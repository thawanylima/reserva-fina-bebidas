import React from "react";
import { Link } from "react-router-dom";

const Vinhos= ({ bebidas }) =>(
    <main className="principal">
        <h2>Categoria de Vinhos</h2>
        {bebidas.filter(t => t.tipo === "Vinhos").map(bebida => (
            <div className="card">
                <div className='thumb'>
                    <img src={"/imagens/bebidas/" + bebida.id + ".jpg"}/>
                </div>
                <Link>
                    <div className="detalhes">
                        <h3>{bebida.nome}</h3>
                        <p>{bebida.descricao}</p>
                        <p>Leia Mais &gt;</p>
                    </div>
                </Link>
            </div>
        ))}
    </main>
);
export default Vinhos;