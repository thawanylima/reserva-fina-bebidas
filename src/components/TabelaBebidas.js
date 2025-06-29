import React from "react";
import {Link } from "react-router-dom";

const TabelaBebidas = ({ bebidas, excluirBebida}) => {
    return(
        <main className="principal">
            <h2>Lista de Bebidas</h2>
            {bebidas.length === 0 && <h3>Nenhuma bebida cadastrada!</h3>}
            {bebidas.length > 0 && (
                <table className="tabela">
                    <thead>
                        <tr>
                            <th width="20%">Nome</th>
                            <th>Marca</th>
                            <th>Tipo</th>
                            <th width="8"></th>
                            <th width="10%"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {bebidas.map((bebida) => (
                            <tr>
                                <td>{bebida.nome}</td>
                                <td>{bebida.marca}</td>
                                <td>{bebida.tipo}</td>
                                <td>
                                    <button className="bt lista-cadastrar-alterar">
                                        <Link to={'/alterar/${bebida.id}'}>alterar</Link>
                                    </button>
                                </td>
                                <td>
                                    <button className="bt excluir" onClick={ () => {excluirBebida(bebida); }}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </main>
    );
};
export default TabelaBebidas;