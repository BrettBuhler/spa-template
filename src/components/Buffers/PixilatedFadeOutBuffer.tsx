import React, { useState, useEffect } from "react";

import './Pixilated.css'

interface PixilatedFadeOutBufferProps {
    welcomeMsg?: boolean;
    duration?: number;
  }
  
  const PixilatedFadeOutBuffer: React.FC<PixilatedFadeOutBufferProps> = ({
    welcomeMsg = true,
    duration = 5000
  }) => {
    const [isBuffer, setIsBuffer] = useState<boolean>(true);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsBuffer(false);
      }, duration);
  
      return () => {
        clearTimeout(timeout);
      };
    }, [duration]);
  
    if (isBuffer) {
      return (
        <div className="absolute top-0 left-0 h-screen w-full flex z-10 pixelate-fade-out">
          <div className="flex flex-row w-full h-full">
            <div className="w-1/2 bg-black curtain flex items-center justify-end">
              {welcomeMsg && (
                <div className="text-white font-bold text-8xl">Wel</div>
              )}
            </div>
            <div className="w-1/2 bg-black curtain flex items-center justify-start">
              {welcomeMsg && (
                <div className="text-white font-bold text-8xl">com</div>
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

export default PixilatedFadeOutBuffer;