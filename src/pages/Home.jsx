import React, { useState } from 'react'
import Card from '../components/Card';
import { filmeMock } from "../moki/filmeMock";

function Home() {
  const [filtrado, setFiltrado] = useState(filmeMock);

  function BuscarFilme(title) {
    const filtro = filmeMock.filter((filme) =>
      filme.title.toLowerCase().includes(title.toLowerCase())
    );

    if (filtro.length === 0) {
      setFiltrado(filmeMock);
    }
    setFiltrado(filtro);
  }

  return (
    <div className="container">
      <main className="filter-container">
        <BaraDePesquisa onchange={BuscarFilme} />
      </main>
      <div className="card_container">
        {filtrado.map((filme) => (
          <Card filme={filme} key={filme.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;

function BaraDePesquisa({ onchange }) {
  return (
    <div className="barra-de-pesquisa">
      <input
        className="input_Search"
        type="text"
        placeholder="Pesquisar..."
        onChange={(e) => onchange(e.target.value)}
        
      />
    </div>
  );
}