import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function TopLoader() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loader on route change
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Loader displays for 800ms

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className={`top-loader-container ${loading ? 'show' : ''}`}>
      <div className="top-loader-bar"></div>
      <div className="top-loader-overlay">
        <div className="spinner"></div>
      </div>
    </div>
  );
}
