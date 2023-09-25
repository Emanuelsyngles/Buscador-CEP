import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './style.css';

import api from './services/api';

function App() {

  const [input, setinput] = useState('Teste123')

  async function handlesearch() {
    if(input === '') {
      alert("Preencha algum CEP")
      return
    }

    try{
      const response = await api.get(`${input}/json`);
      console.log(response.data)
    }catch{
      alert('Erro: não encontrei informações com esse cep!')
      setinput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP..." value={input} onChange={(e) => setinput (e.target.value)}/>

        <button className="buttonsearch" onClick={handlesearch}>
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>

      <main className="main">
        <h2>Cep: 2930803808</h2>
        <span>Rua teste algum</span>
        <span>Complemento: Algum complemento</span>
        <span>Vila Rosa</span>
        <span>Teresina-PI</span>
      </main>

    </div>
  );
}

export default App;
