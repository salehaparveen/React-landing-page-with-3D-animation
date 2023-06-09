
import React, { useEffect, useState } from 'react';
import {
  RouterProvider,
} from 'react-router-dom';

import Routes from '../routes/routes';
import './App.css';

function App() {

  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={ Routes }></RouterProvider>
      </React.StrictMode>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  );
}

export default App;
