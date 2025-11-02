"use client";
import React, { useState, useEffect, useRef } from 'react';

const ScrollIndicator = ({ 
  onScrollClick,
  fillDuration = 1500,
  scrollToSection = true 
}) => {
  const [fillProgress, setFillProgress] = useState(0);
  const [isFilling, setIsFilling] = useState(false);
  const animationRef = useRef(null);
  const isFillingRef = useRef(false);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (!isFillingRef.current) {
          startFillAnimation();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const startFillAnimation = () => {
    if (isFillingRef.current) return;
    
    setIsFilling(true);
    isFillingRef.current = true;
    setFillProgress(0);
    
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      if (!isFillingRef.current) return;
      
      const elapsed = currentTime - startTime;
      const progress = Math.min((elapsed / fillDuration) * 100, 100);
      
      setFillProgress(progress);
      
      if (progress < 100) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        completeFillAnimation();
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };

  const stopFillAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    setIsFilling(false);
    isFillingRef.current = false;
    
    // Reset progress if not completed
    if (fillProgress < 100) {
      setTimeout(() => {
        setFillProgress(0);
      }, 300);
    }
  };

  const completeFillAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    
    setIsFilling(false);
    isFillingRef.current = false;
    
    // Execute scroll action
    if (scrollToSection) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
    
    if (onScrollClick) {
      onScrollClick();
    }
    
    // Reset progress after completion
    setTimeout(() => {
      setFillProgress(0);
    }, 500);
  };

  const handleMouseDown = () => {
    if (!isFillingRef.current) {
      startFillAnimation();
    }
  };

  const handleMouseUp = () => {
    // If user releases before completion, stop the animation
    if (isFillingRef.current && fillProgress < 100) {
      stopFillAnimation();
    }
  };

  const handleMouseLeave = () => {
    // Stop if user leaves the element and animation isn't complete
    if (isFillingRef.current && fillProgress < 100) {
      stopFillAnimation();
    }
  };

  const handleClick = () => {
    // For click: start and let it complete automatically
    if (!isFillingRef.current) {
      startFillAnimation();
    }
  };

  return (
    <div style={{
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      zIndex: 10
    }}>
      
      {/* Animated Circle */}
      <div 
        style={{
          position: 'relative',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          pointerEvents: 'auto',
          userSelect: 'none'
        }} 
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Background Circle with Fill */}
        <svg width="60" height="60" viewBox="0 0 60 60" style={{ position: 'absolute', top: 0, left: 0 }}>
          {/* Fill Circle */}
          <circle
            cx="30"
            cy="30"
            r="28"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="175.93"
            strokeDashoffset={175.93 - (175.93 * fillProgress) / 100}
            transform="rotate(-90 30 30)"
          />
          
          {/* Outline Circle */}
          <circle
            cx="30"
            cy="30"
            r="28"
            fill="none"
            stroke="white"
            strokeWidth="2"
            opacity="0.3"
          />
        </svg>

        {/* Arrow Down Icon */}
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{
            opacity: isFilling ? 0.8 : 1,
            transition: 'opacity 0.3s ease'
          }}
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>

        {/* Pulsing effect when filling */}
        {isFilling && (
          <div style={{
            position: 'absolute',
            width: '70px',
            height: '70px',
            border: '2px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            animation: 'pulse 1s ease-in-out infinite'
          }} />
        )}
      </div>

      {/* "Scroll Down" Text */}
      <span style={{
        color: 'white',
        fontSize: '0.875rem',
        fontWeight: '300',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        opacity: 0.8,
        pointerEvents: 'none',
        userSelect: 'none'
      }}>
        Scroll Down
      </span>

      {/* Instructions for Keyboard Users */}
      <div style={{
        color: 'rgba(255,255,255,0.5)',
        fontSize: '0.75rem',
        textAlign: 'center',
        marginTop: '0.5rem',
        pointerEvents: 'none',
        userSelect: 'none'
      }}>
        Hold ↓ to navigate
      </div>

      {/* Add CSS styles */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ScrollIndicator;