import React, { useState } from "react";
import Banner from "../banner/banner";
import Categoria from "../categorias/Categoria";
import Itens from "../itensLista/Itens";
import "../listaProdutos/lista.css";
import {
  produtosEntradas,
  filtraCategoria,
  filtraBusca,
} from "../servico/servico";
function Home() {
  const [dadosCategorias, setDadosCategorias] = useState(produtosEntradas);
  const [textoBusca, setTextoBusca] = useState("");
  const [botaoClicado, setBotaoClicado] = useState("Entradas");
  const handleFiltro = (categoria) => {
    setDadosCategorias(filtraCategoria(categoria));
    setBotaoClicado(categoria);
    setTextoBusca("");
  };

  const handleBusca = (textoDigitado) => {
    setTextoBusca(textoDigitado);
    textoDigitado.length >= 3 && setDadosCategorias(filtraBusca(textoDigitado));
    setBotaoClicado("");
  };
  return (
    <div>
      <Banner />
      <Categoria
        handleFiltro={handleFiltro}
        botaoClicado={botaoClicado}
        textoBusca={textoBusca}
        handleBusca={handleBusca}
      />
      <div className="container-item maxWidth">
        <h1 className="titleCardapio">Cardápio</h1>
        <div className="box-item">
          {dadosCategorias.map((produto) => (
            <Itens key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
