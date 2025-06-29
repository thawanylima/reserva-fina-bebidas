import React from 'react'
import { Link } from 'react-router-dom';

const Home = ({ bebidas }) => {
  return(
  <main className="principal">
    <h2>Destaques do Mês</h2>
    <div className="produtos-container">
      {bebidas.filter((bebida,index) => index < 6).map(bebida => (
        <div className="card">
          <div className='thumb'>
            <img src={`/imagens/bebidas/${bebida.imagem}.jpg`} alt={bebida.nome}/>
          </div>
          <div className='detalhes'>
            <Link to={`/bebida/${bebida.slug}`} >
              <h3>{bebida.nome}</h3>
                <p>{bebida.descricao}</p>
                <p className="leia-mais">Leia mais</p>
              </Link>
            </div>
          </div>
      ))}   
      </div>
    </main>
  )
};
export default  Home