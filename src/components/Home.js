import React from 'react'
import { Link } from 'react-router-dom';

const Home = ({ bebidas }) => (
  <main className="principal">
    <h2>Destaques do Mês</h2>
    {bebidas.filter((bebida,index) => index < 2).map(bebida => (
      <div className="card">
        <div className='thumb'>
          <img src={'/imagens/bebidas/' + bebida.id + ".jpg"}/>
        </div>
        <Link to={'/bebida/${bebida.slug}'}>
          <div className='detalhes'>
            <h3>{bebida.nome}</h3>
            <p>{bebida.descricao}</p>
            <p>Leia Mais &gt;</p>
          </div>
        </Link>
        </div>
    ))}   
    </main>
);
export default  Home