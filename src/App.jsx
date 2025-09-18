import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import Header from "./components/header/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<h1>Videos Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
