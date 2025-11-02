"use client";
import React from "react";
import Particles from "./Components/Particles"
import ScrollIndicator from "./Components/ScrollIndicator";

export default function Hero() {
  const handleScrollAction = () => {
    // Optional: Add any additional logic when scroll is triggered
    console.log('Scroll action triggered');
  };

  return (
    <div style={{ backgroundColor: "#05061f", width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      {/* Main Text Content - With pointer-events: none to allow particle interaction */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        zIndex: 10,
        width: '90%',
        maxWidth: '800px',
        pointerEvents: 'none'
      }}>
        {/* Main Heading */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 'bold',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 4px 8px rgba(0,0,0,0.3)',
          pointerEvents: 'none'
        }}>
          Welcome to Our World
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
          fontWeight: '300',
          marginBottom: '3rem',
          color: '#e0e0e0',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto 3rem auto',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          pointerEvents: 'none'
        }}>
          Discover amazing experiences and innovative solutions that transform the way you interact with technology
        </p>
      </div>

      {/* Scroll Indicator Component */}
      <ScrollIndicator
      />
    </div>
  );
}