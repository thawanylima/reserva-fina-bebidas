import React from 'react'
import {NavLink} from "react-router-dom";

export default function Navegacao() {
  return (
    <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/vinhos'>Vinhos</NavLink></li>
        <li><NavLink to='/espumantes'>Espumantes</NavLink></li>
        <li><NavLink to='/whisky'>Whisky</NavLink></li>
        <li><NavLink to='/destilados'>Destilados</NavLink></li>
        <li><NavLink to='/catalogo'>Catálogo</NavLink></li>
        <li><NavLink to="/tabela">Cadastro</NavLink></li>
    </ul>
  );
};
