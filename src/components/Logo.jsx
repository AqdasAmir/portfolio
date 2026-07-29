import React from 'react';

export const Logo = () => {
  return (
    <span className="inline-flex items-center font-bold tracking-tight select-none">
      <span className="text-4xl md:text-5xl leading-none text-white font-extrabold pr-0.5 hover:text-primary">
        A
      </span>
      
      {/* Vertically stacked halves */}
      <span className="flex flex-col justify-center text-[15px] md:text-[18px] leading-[1.1] font-semibold tracking-wider uppercase">
        <span className="text-white hover:text-primary -ml-1.5 mt-3">QDAS</span>
        <span className="text-primary text-left hover:text-white mb-1">MIR</span>
      </span>
    </span>
  );
};