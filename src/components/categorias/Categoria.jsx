import React from "react";
import entrada from "../../assets/entrada.png";
import carne from "../../assets/carne.png";
import massa from "../../assets/massa.png";
import salada from "../../assets/salada.png";
import sobremesa from "../../assets/sobremesa.png";
import bebidas from "../../assets/bebidas.png";
import "./categoria.css";

function Categoria({ handleFiltro, botaoClicado, textoBusca, handleBusca }) {
  return (
    <div className="categorias maxWidth">
      <div className="categoriasBtns">
        <button
          className={`btnCategoria ${
            botaoClicado === "Entradas" ? "botaoClicado" : "botao-n"
          }`}
          onClick={() => handleFiltro("Entradas")}
          autoFocus
        >
          <img src={entrada} alt="" /> Entradas
        </button>
        <button
          className={`btnCategoria ${
            botaoClicado === "Massas" ? "botaoClicado" : "botao-n"
          }`}
          onClick={() => handleFiltro("Massas")}
        >
          <img src={massa} alt="" /> Massas
        </button>
        <button
          className={`btnCategoria ${
            botaoClicado === "Carnes" ? "botaoClicado" : "botao-n"
          }`}
          onClick={() => handleFiltro("Carnes")}
        >
          <img src={carne} alt="" /> Carnes
        </button>
        <button
          className={`btnCategoria ${
            botaoClicado === "Bebidas" ? "botaoClicado" : "botao-n"
          }`}
          onClick={() => handleFiltro("Bebidas")}
        >
          <img src={bebidas} alt="" /> Bebidas
        </button>
        <button
          className={`btnCategoria ${
            botaoClicado === "Saladas" ? "botaoClicado" : "botao-n"
          }`}
          onClick={() => handleFiltro("Saladas")}
        >
          <img src={salada} alt="" /> Saladas
        </button>
        <button
          className={`btnCategoria ${
            botaoClicado === "Sobremesas" ? "botaoClicado" : ""
          }`}
          onClick={() => handleFiltro("Sobremesas")}
        >
          <img src={sobremesa} alt="" /> Sobremesas
        </button>
      </div>
      <div className="inputSearch">
        <input
          id="input"
          value={textoBusca}
          onChange={(event) => handleBusca(event.target.value)}
          type="text"
          placeholder="Pesquise aqui um dos pratos do nosso cardápio"
        />
        {/* <img className="imgLupa" src={lupa} alt="" /> */}
      </div>
    </div>
  );
}

export default Categoria;
