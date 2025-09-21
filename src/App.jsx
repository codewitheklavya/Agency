import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Optional: persist theme on change
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy/>
    </div>
  );
};

export default App;
