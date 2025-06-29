import React from "react";
import {Link } from "react-router-dom";

const MenuTabela = () => {
    return (
        <main className="principal">
            <nav className="menu">
                <u>
                    <li>
                        <button className="bt lista-cadastrar-alterar">
                            <Link to="/tabela">Lista de Livros</Link>
                        </button>
                    </li>
                    <li>
                        <button className="bt lista-cadastrar-alterar">
                            <Link to="/cadastrar">Cadastrar</Link>
                        </button>
                    </li>
                </u>
            </nav>
        </main>
    );
};
export default MenuTabela;