import React from "react";
import MenuTabela from "./MenuTabela";
import TabelaBebidas from "./TabelaBebidas";

const Tabela = (props) => {
    return(
        <>
            <MenuTabela />
            <TabelaBebidas bebidas={props.bebidas} excluirBebida={props.excluirBebida}/>
        </>
    )
};
export default Tabela;