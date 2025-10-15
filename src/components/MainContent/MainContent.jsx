import React, { useState, useEffect } from 'react';
import '../ModernCards.css';


function MainContent({ weather, loading, error }) {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  
  return (
    <main className="h-full flex items-center justify-center">
      {loading && <p className="text-xl text-white">Cargando clima...</p>}
      {error && <p className="text-red-500 bg-red-100 p-4 rounded-lg">{error}</p>}
      {weather && !loading && (
        <div className="weather-card">
          <div className="card-section">
            <div>
              <h2 className="card-title">{weather.location.name}</h2>
              <p className="card-subtitle">
                {dateTime.toLocaleDateString('es-AR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <div className="text-2xl font-bold">
              {dateTime.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
          <div className="card-section bottom">
            <div className="temperature">
              {Math.round(weather.current.temp_c)}°C
            </div>
            <div className="condition">
              <img src={weather.current.condition.icon} alt={weather.current.condition.text} className="condition-icon" />
              <p className="condition-text">{weather.current.condition.text}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default MainContent;