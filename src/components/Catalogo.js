import React from "react";
import { Link } from "react-router-dom";

const Catalogo = ( {bebidas} ) =>{
    return(
    <main className="principal">
        <h2>Catalogo de Vinhos</h2>
        <ol>
            {bebidas.filter(bebida => bebida.tipo == "Vinhos").map(bebida => (
                <li><Link to={'/bebida/${bebida.slug}'}>{bebida.nome}</Link></li>))}
        </ol>
        <h2>Catálogo Espumantes</h2>
        <ol>
            {bebidas.filter(bebida => bebida.tipo == "Espumantes").map(bebida => (
                <li><Link to={'/bebida/${bebida.slug}'}>{bebida.nome}</Link></li>))}
        </ol>
        <h2>Catálogo de Whiskys</h2>
        <ol>
             {bebidas.filter(bebida => bebida.tipo == "Whisky").map(bebida => (
                <li><Link to={'/bebida/${bebida.slug}'}>{bebida.nome}</Link></li>))}
        </ol>
        <h2>Catálogo de Destilados</h2>
        <ol>
             {bebidas.filter(bebida => bebida.tipo == "Destilados").map(bebida => (
                <li><Link to={'/bebida/${bebida.slug}'}>{bebida.nome}</Link></li>))}
        </ol>
    </main>
    );
};
export default Catalogo;