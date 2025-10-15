import React from 'react';
import './GlobosFlotadores.css';

// 1. Aceptamos la prop "isDay"
function GlobosFlotadores({ isDay }) {
  // 2. Aplicamos una clase 'day' o 'night' según la prop
  const backgroundClass = isDay ? 'sky-background day' : 'sky-background night';

  return (
    <div className={backgroundClass}>
      {/* 3. Renderizamos el sol o la luna condicionalmente */}
      {isDay ? (
        <div className="sun"></div>
      ) : (
        <div className="moon"></div>
      )}
      
      <div id="clouds">
        <div className="cloud x1"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
    </div>
  );
}

export default GlobosFlotadores;