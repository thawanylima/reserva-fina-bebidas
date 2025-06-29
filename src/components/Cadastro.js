import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Cadastro extends Component {
    state = {
        bebida: {
            id: this.props.bebida.id,
            nome: this.props.bebida.nome,
            marca: this.props.bebida.marca,
            tipo: this.props.bebida.tipo,
            volume: this.props.bebida.volume,
            preco: this.props.bebida.preco,
            descricao: this.props.bebida.descricao
        },
        redirecionar: false
    };
    handleBebidaForm = (e) => {
         e.preventDefault();
        if(this.props.inserirBebida){ 
            this.props.inserirBebida(this.state.bebida);
        }else { this.props.alterarBebida(this.state.bebida); }
        this.setState({redirecionar: true});
    };

    render(){
        if (this.state.redirecionar) {
            return <Navigate to="/tabela" />;
        }

        const { inserirBebida } = this.props;
        const { bebida } = this.state;
        const caracteresRestantes = 200 - bebida.descricao.length;

        return(
            <div className="cadastro-container">
                <main className="cadastro-form">
                    <form onSubmit={this.handleBebidaForm}>
                        <h2>{inserirBebida ? "Cadastro de Bebida" : "Alteração de Bebida"}</h2>
                        
                        <p>
                            <label htmlFor="fnome">Nome</label>
                            <input type="text" autoFocus 
                                id="fnome" disabled={!inserirBebida} value={bebida.nome}
                                onChange={(e) => this.setState({ 
                                    bebida: {...bebida, nome: e.target.value}
                                })}
                                required/>
                        </p>

                        <p>
                            <label htmlFor="fmarca">Marca</label>
                            <input type="text" id="fmarca" value={bebida.marca}
                                onChange={(e) => this.setState({ 
                                    bebida: {...bebida, marca: e.target.value}
                                })}required/>
                        </p>

                        <p>
                        <label htmlFor="ftipo">Tipo</label>
                        <select 
                            id="ftipo"
                            value={bebida.tipo}
                            onChange={(e) => this.setState({ 
                                    bebida: {...bebida, tipo: e.target.value}})}
                                required>
                            <option value="">Selecione um tipo</option>
                            <option value="Vinho">Vinho</option>
                            <option value="Whisky">Whisky</option>
                            <option value="Espumante">Espumante</option>
                            <option value="Destilado">Destilado</option>
                        </select>
                        </p>

                        <p>
                            <label htmlFor="fvolume">Volume (ml)</label>
                            <input type="number" id="fvolume" value={bebida.volume}
                                onChange={(e) => this.setState({ 
                                    bebida: {...bebida, volume: e.target.value}})}
                                required
                                min="0"/>
                        </p>


                        <p>
                            <label htmlFor="fpreco">Preço (R$)</label>
                            <input type="number" id="fpreco" value={bebida.preco}
                                onChange={(e) => this.setState({ 
                                    bebida: {...bebida, preco: e.target.value}})}
                                required
                                min="0"
                                step="0.01"/>
                        </p>

                        <p>
                            <label htmlFor="fdescricao">Descrição</label>
                            <textarea
                                id="fdescricao"value={bebida.descricao}
                                onChange={(e) => this.setState({ 
                                    bebida: {...bebida, descricao: e.target.value}})}
                                maxLength={200}
                                rows={4}
                                placeholder="Digite a descrição (máx. 200 caracteres)"
                                required/>
                            <small className="contador-caracteres">{caracteresRestantes} caracteres restantes</small>
                        </p>

                        <p>
                            <button type="submit" className="bt cadastrar-alterar"> {inserirBebida ? "Cadastrar" : "Alterar"}
                            </button>
                        </p>
                    </form>
                </main>
            </div>
        );
    }
}
export default Cadastro;