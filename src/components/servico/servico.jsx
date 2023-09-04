import { produtos } from "../../data-produtos";

export const filtraCategoria = (categoria) => {
  return produtos.filter((produto) => produto.categoria === categoria);
  
};

export const filtraBusca = (textoDigitado) => {
  return produtos.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
      produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
  );
};

export const produtosEntradas = filtraCategoria("Entradas");
