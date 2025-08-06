import React, { useEffect } from 'react';
import './SplashScreen.css';

export default function SplashScreen({ onExit }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onExit();
    }, 6000); // show splash for 6 seconds
    return () => clearTimeout(timer);
  }, [onExit]);

  return (
    <section className="splash-screen">
      <div className="splash-content">
        <h1>hi my handsome sayang,</h1>
        <p>happy birthday ❤️</p>
      </div>
    </section>
  );
}
