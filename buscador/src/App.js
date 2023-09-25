import { FiSearch } from 'react-icons/fi'
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP..."/>

        <button className="buttonsearch">
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
