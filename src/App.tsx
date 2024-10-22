import { useEffect, useState } from 'react';
import './App.css';

// Tipos para Produtos
type ProdutoType = {
  id: number;
  nome: string;
  preco: string;
  descricao: string;
  imagem: string;
}

// Tipos para Usuários
type UsuarioType = {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

function App() {
  const [nome, setNome] = useState("");
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([]);

  useEffect(() => {
    setNome("Maria Julia");

    // Buscar dados de produtos e usuários
    fetch("https://one022a-marketplace-924k.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados));


  }, []);

  useEffect(() => {
    fetch("https://one022a-marketplace-924k.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
  }, [])

  return (
    <>
    
  <h1>{nome}</h1>
      <div className="produtos-container">
        {produtos.map(produto => (
          <div key={produto.id} className='produto-item'>
            <h1>{produto.nome}</h1>
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
            <img src={produto.imagem} alt={produto.nome} />
          </div>
        ))}
      </div>
      <div className="usuarios-container">
        {usuarios.map(usuario => (
          <div key={usuario.id} className='usuario-item'>
            <h1>{usuario.name}</h1>
            <p>{usuario.email}</p>
            <p>{usuario.created_at}</p>
            <p>{usuario.updated_at}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;