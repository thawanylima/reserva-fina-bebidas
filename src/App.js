import React, {Component} from "react";
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
import BuscaBebida from "./components/BuscaBebida";
import axios from "axios";

class App extends Component{
  state = {
    bebidas: []
  };
  async componentDidMount(){
    try{
      const {data : bebidas } = await axios.get("/api/todasBebidas.json");
      this.setState({ bebidas });
    }catch(error) {
      console.log(error);
      document.querySelectorAll(".principal")[0].insertAdjacentHTML(
        "beforeend",
        "<p class='erro>Mesagem de erro </p>'"
      );
    }
  }

  render(){
    return (
      <Router>
        <Topo />
        <Routes>
          <Route path="/" element={<Home bebidas={this.state.bebidas} />} />
          <Route path="/vinhos" element={<Vinhos bebidas={this.state.bebidas}/>} />
          <Route path="/espumantes" element={<Espumantes bebidas={this.state.bebidas}/>} />
          <Route path="/whisky" element={<Whisky bebidas={this.state.bebidas}/>} />
          <Route path="/destilados" element={<Destilados bebidas={this.state.bebidas}/>} />
          <Route path="/catalogo" element={<Catalogo bebidas={this.state.bebidas} />} />
          <Route path="/bebida/:bebidaSlug" element={<BuscaBebida bebidas={this.state.bebidas} />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </Router>
    );
  }

}

export default App;
