import React from 'react'

function Footer() {
  return (
    <footer className="
      w-full
      h-15
      flex
      justify-center
      items-center
      
      bg-[rgba(5,5,16,0.9)] 
      border-t md:border-t-0
      shadow-[0_0_15px_rgba(0,255,157,0.3)]
      "
    >
      <div className="
        absolute top-0 left-0 right-0 h-[1px]
        bg-gradient-to-r from-transparent via-neon-green to-transparent
        animate-laser-sweep"
      ></div>

      <p className="
        text-cyan-300 
        fill-cyan-400 drop-shadow-lg
        drop-shadow-cyan-300
      
      ">
        Sistema The Goog775 © 2025 | Creado por DAnte.Dev | Todos los derechos reservados
      </p>
    </footer>
  )
}

export default Footer