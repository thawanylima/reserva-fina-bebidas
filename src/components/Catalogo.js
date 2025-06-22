import React from "react";
import { Link } from "react-router-dom";

const Catalogo = ( {bebidas} ) =>{
    return(
    <main className="principal">
        <h2>Catalogo de Vinhos</h2>
        <ol>
            {bebidas.filter(bebida => bebida.tipo == "Vinho").map(bebida => (
                <li><Link to={'/bebida/${bebida.slug}'}>{bebida.nome}</Link></li>))}
        </ol>
        <h2>Catálogo Espumantes</h2>
        <ol>
            {bebidas.filter(bebida => bebida.tipo == "Espumante").map(bebida => (
                <li><Link to={'/bebida/${bebida.slug}'}>{bebida.nome}</Link></li>))}
        </ol>
        <h2>Catálogo de Whiskys</h2>
        <ol>
             {bebidas.filter(bebida => bebida.tipo == "Whisky").map(bebida => (
                <li><Link to={'/bebida/${bebida.slug}'}>{bebida.nome}</Link></li>))}
        </ol>
    </main>
    );
};
export default Catalogo;