import React from "react";

const Bebida = ({ bebida }) => {
    <main className="principal">
        <h2>{bebida.nome}</h2>
        <div className="bebida">
                <img src={"/imagens/bebidas/" + bebida.id + ".jpg"} />
            <ul>
                <li>Marca: {bebida.marca}</li>
                <li>Tipo: {bebida.tipo}</li>
                <li>Volume: : {bebida.volume}</li>
                <li>Preço: : {bebida.preco}</li>
            </ul>
            <hr />
            <h3>Descrição da Bebida</h3>
            <p>{bebida.descricao}</p>
        </div>
    </main>
};
export default Bebida;