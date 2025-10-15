import React, { useState } from 'react';
import '../ModernCards.css';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function LeftAside() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city) return;
    setLoading(true);
    setWeather(null);
    setError(null);
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no&lang=es`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message || 'No se pudo encontrar la ciudad.');
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="pt-1 h-full flex flex-col space-y-4">
      <h3 className="text-2xl text-center text-sky-900 drop-shadow-lg">
        Buscador de Clima
      </h3>
      <form onSubmit={handleSearch} className="flex space-x-2">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Buscar ciudad..."
          className="w-full px-4 py-2 rounded-lg bg-white/50 focus:bg-white/80 focus:outline-none transition-colors text-sky-900 placeholder-sky-800"
        />
        <button type="submit" disabled={loading} className="bg-sky-700 text-white px-4 py-2 rounded-lg hover:bg-sky-800 transition-colors disabled:bg-sky-400">
          Buscar
        </button>
      </form>

      {loading && <p className="text-center text-sky-900">Buscando...</p>}
      {error && !loading && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg" role="alert">{error}</div>}

      {weather && !loading && (
        <div className="weather-card">
            <div className="card-section">
              <div>
                <h2 className="card-title">{weather.location.name}</h2>
                <p className="card-subtitle">{weather.location.country}</p>
              </div>
              <div className="text-lg font-bold">
                {new Date(weather.location.localtime).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}
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
    </aside>
  );
}

export default LeftAside;