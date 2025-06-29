import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BebidaIndividual = ({ bebidas }) => {
  const { slug } = useParams();
  
  // Encontra a bebida pelo slug
  const bebida = bebidas.find(b => b.slug === slug);
  
  // Se não encontrar a bebida, mostra erro
  if (!bebida) {
    return (
      <main className="principal">
        <div className="produto-nao-encontrado">
          <h2>Produto não encontrado</h2>
          <p>Desculpe, não conseguimos encontrar o produto solicitado.</p>
          <Link to="/" className="botao lista-cadastrar-alterar">
            Voltar ao início
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="produto-individual-container">
      <div className="produto-header">
        <div className="produto-imagem">
          <img 
            src={`/imagens/bebidas/${bebida.imagem}.jpg`} 
            alt={bebida.nome}
            onError={(e) => {
              e.target.src = '/imagens/placeholder.jpg'; // imagem padrão se não carregar
            }}
          />
        </div>
        
        <div className="produto-info">
          <h1>{bebida.nome}</h1>
          
          {bebida.marca && (
            <div className="produto-marca">
              <strong>Marca:</strong> {bebida.marca}
            </div>
          )}
          
          {bebida.tipo && (
            <div className="produto-tipo">
              <strong>Categoria:</strong> {bebida.tipo}
            </div>
          )}
          
          {bebida.preco && (
            <div className="produto-preco">
              <strong>Preço:</strong> R$ {bebida.preco}
            </div>
          )}
            <div className="produto-detalhes">
                <h3>Descrição</h3>
                <p>{bebida.descricao}</p>
            </div>
        </div>
      </div>

      <div className="produto-acoes">
        <Link to="/" className="botao lista-cadastrar-alterar">
          ← Voltar aos Produtos
        </Link>
        
        {/* Adicione outros botões se necessário */}
        <button className="botao cadastrar-alterar">
          Adicionar ao Carrinho
        </button>
      </div>
    </main>
  );
};

export default BebidaIndividual;