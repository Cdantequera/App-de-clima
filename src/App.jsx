// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LeftAside from './components/LeftAside/LeftAside';
import DynamicBackground from './components/GlobosFlotadores/DynamicBackground';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  // 2. El estado del clima ahora vive aquí
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3. La lógica para buscar el clima se mueve aquí
  useEffect(() => {
    const fetchWeather = async () => {
      if (!API_KEY) {
        // Datos de ejemplo si no hay API Key
        setWeather({ location: { name: 'San Miguel de Tucumán' }, current: { temp_c: 33, condition: { text: 'Soleado', icon: '//cdn.weatherapi.com/weather/64x64/day/113.png' } } });
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=San Miguel de Tucuman&aqi=no&lang=es`);
        if (!response.ok) throw new Error('No se pudieron obtener los datos del clima.');
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  return (
    <>
      {/* 4. Usamos DynamicBackground y le pasamos el estado del clima */}
      <DynamicBackground weather={weather} />
      <div className="layout-container">
        <div className="header-area">
          <Header />
        </div>
        <div className="left-area">
          <LeftAside />
        </div>
        <div className="main-area">
          {/* 5. Pasamos el clima, carga y error como props a MainContent */}
          <MainContent weather={weather} loading={loading} error={error} />
        </div>
        <div className="footer-area">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;