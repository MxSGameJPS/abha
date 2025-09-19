import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import Formulario from "./page/Formulario/Formulario";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Abertura from "./components/abertura/abertura";
import Videos from "./page/Videos/Videos";
import Social from "./page/Social/Social";

function App() {
  const [showAbertura, setShowAbertura] = useState(true);
  return (
    <>
      {showAbertura && <Abertura onFinish={() => setShowAbertura(false)} />}
      {!showAbertura && (
        <BrowserRouter>
          <Header />
          <div id="app-layout">
            <div id="app-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/formulario" element={<Formulario />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/social" element={<Social />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
