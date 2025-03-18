import React, { useState, useEffect } from 'react';
import cursonimg from "../images/crownwhite.svg"

const AnimatedCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);

  // Mouse movement handler
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  // Click effect handler
  const handleClick = (e) => {
    const newRipple = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now()
    };
    setRipples([...ripples, newRipple]);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  // Remove ripples after animation
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  return (
    <div style={{ cursor: 'none', position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }}>
      {/* Crown SVG Cursor */}
      <img
         src={cursonimg}
        alt="cursor"
        style={{
          position: 'fixed',
          left: cursorPosition.x - 15, // Adjust based on SVG size
          top: cursorPosition.y - 15,
          width: '30px',
          height: '30px',
          transition: 'all 0.2s ease-out',
          animation: 'pulse 1.5s infinite',
          pointerEvents: 'none'
        }}
      />

      {/* Click Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          style={{
            position: 'fixed',
            left: ripple.x - 5,
            top: ripple.y - 5,
            width: '10px',
            height: '10px',
            border: '2px solid #fff',
            borderRadius: '50%',
            animation: 'ripple 0.6s ease-out',
            pointerEvents: 'none'
          }}
        />
      ))}

      {/* Animation Styles */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.2) rotate(-10deg); }
            100% { transform: scale(1) rotate(0deg); }
          }

          @keyframes ripple {
            from { transform: scale(1); opacity: 1; }
            to { transform: scale(3); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedCursor;