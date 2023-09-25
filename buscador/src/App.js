import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './style.css';

import api from './services/api';

function App() {

  const [input, setinput] = useState('Teste123')
  const [cep, setCep] = useState({})

  async function handlesearch() {
    if(input === '') {
      alert("Preencha algum CEP")
      return
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setinput("");
    }catch{
      alert('Erro: não encontrei informações com esse cep!')
      setinput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP..." onChange={(e) => setinput(e.target.value)}/>

        <button className="buttonsearch" onClick={handlesearch}>
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>
      {Object.keys(cep).length > 0 && (
        <main className="main">
        <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>{cep.uf}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade}</span>
        </main>
      )}

    </div>
  );
}

export default App;
