import React from "react";
import "./App.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import TaxiHomepage from "./components/TaxiHomepage";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Header />
        <TaxiHomepage />
      </LanguageProvider>
    </div>
  );
}

export default App;