import React from 'react';
import './DynamicBackground.css';
import GlobosFlotadores from '../GlobosFlotadores/GlobosFlotadores';

const RainEffect = () => {
  // ... (código del efecto de lluvia sin cambios)
  const drops = Array.from({ length: 100 }).map((_, i) => (
    <div key={i} className="drop" style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      animationDuration: `${0.5 + Math.random() * 0.5}s`,
    }}></div>
  ));
  return <div className="rain">{drops}</div>;
};

function DynamicBackground({ weather }) {
  // Si no hay datos, mostramos el fondo de día por defecto
  if (!weather?.current?.condition?.text) {
    return <GlobosFlotadores isDay={true} />;
  }

  const conditionText = weather.current.condition.text.toLowerCase();

  // La lluvia tiene prioridad sobre el día/noche
  if (conditionText.includes('lluvia') || conditionText.includes('rain')) {
    return (
      <div className="weather-background rainy-sky">
        <RainEffect />
      </div>
    );
  }

  // Si no llueve, decidimos si es de día o de noche
  // La API nos da is_day: 1 para día, 0 para noche.
  const isDayTime = weather.current.is_day === 1;

  // Pasamos el resultado como prop a GlobosFlotadores
  return <GlobosFlotadores isDay={isDayTime} />;
}

export default DynamicBackground;