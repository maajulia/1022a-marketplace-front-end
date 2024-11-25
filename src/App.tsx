import { useEffect, useState } from 'react'
import Header from './componentes/header'
import './App.css'
// Tipo para produtos
type ProdutoType = {
  id: number,
  nome: string,
  preco: string,
  descricao: string,
  imagem: string
}

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])


  // useEffect para carregar produtos e usuários
  useEffect(() => {
    // Buscar os produtos
    fetch("http://localhost:8000/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
  }, [])

  return (
    <>
    <Header/>
      {/* Listagem de Produtos */}
      <div className="produtos-container">
        <h1 className='titulo-produto'>Mundo Encantado</h1>
        <div className="produtos-list">
          {
            produtos.map(produto => (
              <div key={produto.id} className="produto-item">
                <h3 className="produto-nome">{produto.nome}</h3> {/* Use h3 para o nome do produto */}
                <div className='container-imagem'>
                  <img src={produto.imagem} alt="Imagem do produto" />
                </div>
                <p className="produto-preco">{produto.preco}</p>
                <p className="produto-descricao">{produto.descricao}</p>
                <button className="botao-comprar">Comprar</button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App