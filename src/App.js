import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Vinhos from "./components/Vinhos";
import Espumantes from "./components/Espumantes";
import Whisky from "./components/Whisky";
import Destilados from "./components/Destilados";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape";

const App = () => {
  return (
    <Router>
      <Topo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vinhos" element={<Vinhos />} />
        <Route path="/espumantes" element={<Espumantes />} />
        <Route path="/whisky" element={<Whisky />} />
        <Route path="/destilados" element={<Destilados />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Rodape />
    </Router>
  );
}

export default App;
