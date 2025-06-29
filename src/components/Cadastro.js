import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Cadastro extends Component {
    state = {
        bebida: {
            id: this.props.bebida.id,
            nome: this.props.bebida.nome,
            marca: this.props.bebida.marca,
            tipo: this.props.bebida.tipo,
            descricao: this.props.bebida.descricao,
            volume: this.props.bebida.volume,
            preco: this.props.bebida.preco
        },
        redirecionar: false
    };
    handleBebidaForm = () => {
        if(this.props.inserirBebida){ this.props.inserirBebida(this.state.bebida);}
        else { this.props.alterarBebida(this.state.bebida); }
        this.setState({redirecionar: true});
    };

    render(){
        if(this.state.redirecionar === true){ return <Navigate to="/tabela" />; }
        return(
            <main className="formulario">
                <form onSubmit={this.handleBebidaForm}>
                    <h2>{this.props.inserirBebida ? "Cadastro de Bebida" : "Alteração de Bebida"}</h2>
                    
                    <p><label htmlFor="fnome">Nome</label>
                    <input type="text" autoFocus defaaultValue={this.props.nome} id="fnome" disabled={this.props.inserirBebida ? false:true}
                    value={this.state.bebida.nome}
                    onChange={ (e) => this.setState({ bebida: {...this.state.bebida, nome: e.target.value}})}/></p>

                    <p><label htmlFor="fmarca">Marca</label>
                    <input type="text" defaaultValue={this.props.marca} id="fmarca"
                    required value={this.state.bebida.marca}
                    onChange={ (e) => this.setState({ bebida: {...this.state.bebida, marca: e.target.value}})}/></p>

                    <p><label htmlFor="ftipo">Tipo</label>
                    <input type="text" defaaultValue={this.props.tipo} id="ftipo"
                    required value={this.state.bebida.tipo}
                    onChange={ (e) => this.setState({ bebida: {...this.state.bebida, tipo: e.target.value}})}/></p>


                    <p><label htmlFor="fvolume">Volume</label>
                    <input type="text" defaaultValue={this.props.volume} id="fdescricao"
                    required value={this.state.bebida.volume}
                    onChange={ (e) => this.setState({ bebida: {...this.state.bebida, volume: e.target.value}})}/></p>


                    <p><label htmlFor="fpreco">Preço</label>
                    <input type="text" defaaultValue={this.props.volume} id="fvolume"
                    required value={this.state.bebida.volume}
                    onChange={ (e) => this.setState({ bebida: {...this.state.bebida, volume: e.target.value}})}/></p>

                    <p><label htmlFor="fdescricao">Descrição</label>
                    <input type="text" defaaultValue={this.props.descricao} id="fdescricao"
                    required value={this.state.bebida.descricao}
                    onChange={ (e) => this.setState({ bebida: {...this.state.bebida, descricao: e.target.value}})}/></p>

                    <p><button type="submit" className="bt cadastrar-alterar">
                        {this.props.inserirBebida ? "Cadastrar" : "Alterar"}
                    </button></p>
                </form>
            </main>
        );
    }
}
export default Cadastro;