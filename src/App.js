import React, {}  from 'react';
import { useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState('')
  const [zip, setZip] = useState({})

  async function handleSearch(){
    if(input === ''){
      alert("Fill in with some Zip Code!")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setZip(response.data)
      setInput("");
      
    }catch{
      alert("Oops...error when searching")
      setInput("")
    }

  }

  return (
    <div className="container">
      <h1 className="title">Zip Code Finder</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Input your postal code..."
        value={input}
        onChange={(e) => setInput(e.target.value) } 
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFFF"/>
        </button>
      </div>


      {Object.keys(zip).length > 0 && (
        <main className='main'>
          <h2>Zip Code: {zip.cep} </h2>
          
          <span>{zip.logradouro} </span>
          <span>Complement: {zip.complemento}</span>
          <span>{zip.bairro}</span>
          <span>{zip.localidade} - {zip.uf}</span>
        </main>
      )}

    </div>
  );
}

export default App;
