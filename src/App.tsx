import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallary from "./components/Gallery";
import Rental from "./components/Rental";
import Business from "./components/Business";
import Insight from "./components/Insight";
import Contact from "./components/Contact";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Gallary />
      <Rental />
      <Business />
      <Insight />
      <Contact />
    </div>
  );
};

export default App;
