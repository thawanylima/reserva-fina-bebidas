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
import Tabela from "./components/Tabela";
import BuscaBebidaAlteracao from "./components/BuscaBebidaAlteracao";
import Cadastro from "./components/Cadastro";
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
  inserirBebida = (bebida) => {
  // Gera novo ID baseado no último ID existente + 1
  const novoId = this.state.bebidas.length > 0 
    ? Math.max(...this.state.bebidas.map(b => b.id))+1 
    : 1;
    // Gera slug baseado no nome
  const slug = bebida.nome.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
  this.setState({ bebidas: [...this.state.bebidas, { ...bebida, id: novoId }]
  });
}
  alterarBebida = (bebida) =>{
    const index = this.state.bebidas.findIndex(b => b.id === bebida.id);
    const bebidas = this.state.bebidas.slice(0, index).concat(this.state.bebidas.slice(index + 1));
    this.setState({bebidas: [...bebidas, bebida].sort((a,b) => a.id - b.id)});
  }
  excluirBebida = (bebida) => {
    if(window.confirm("Deseja realmente excluir essa bebida?")){
      const bebidas = this.state.bebidas.filter(b => b.id !== bebida.id);
      this.setState({bebidas});
    }
  }

  render(){
    const { bebidas } = this.state;
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
          
          <Route path="/cadastrar" element={<Cadastro bebida={{ id: 0, nome: "", marca: "", tipo: "", volume: "", preco: "", descricao: ""}} inserirBebida={this.inserirBebida} />} />

          <Route path="/alterar/:slugBebida" element={<BuscaBebidaAlteracao bebidas={this.state.bebidas} alterarBebida={this.alterarBebida} />} />

          <Route path="/tabela" element={<Tabela bebidas={this.state.bebidas} excluirBebida={this.excluirBebida} />} />
          
          <Route path="/bebida/:bebidaSlug" element={<BuscaBebida bebidas={this.state.bebidas} />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </Router>
    );
  }

}

export default App;
