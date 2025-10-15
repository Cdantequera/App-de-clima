import React from "react";

function Header() {
  return (
    <header className="
      bg-transparent 
      w-full
      h-20
      flex
      rounded-lg
      justify-center
      items-center
      border-b md:border-b-0 
      
      "
    >
      <h1 className="
        text-center
        text-4xl 
        font-bold
        text-sky-900 
        fill-cyan-400 drop-shadow-lg
        drop-shadow-cyan-300"
      >
        Proyecto de tiempo 
      </h1>
    </header>
  );
}

export default Header;