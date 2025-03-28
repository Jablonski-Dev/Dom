

// Seleção pelo ID e alteração do título e cor
let titulo = document.getElementById("titulo");
titulo.textContent = "Meus Esportes Favoritos";
titulo.style.color = "blue";
console.log("Selecionado por ID:", titulo);

// Seleção pela classe, mostrando os esportes
let esportesPorClasse = document.getElementsByClassName("esporte");
console.log("Selecionado por classe:", esportesPorClasse[0]?.textContent);
console.log("Selecionado por classe:", esportesPorClasse[1]?.textContent);
console.log("Selecionado por classe:", esportesPorClasse[2]?.textContent);
console.log("Selecionado por classe:", esportesPorClasse[3]?.textContent);

// Seleção pela tag
let itensLista = document.getElementsByTagName("li");
console.log("Selecionado por tag:", itensLista[0]?.textContent);
console.log("Selecionado por tag:", itensLista[1]?.textContent);
console.log("Selecionado por tag:", itensLista[2]?.textContent);
console.log("Selecionado por tag:", itensLista[3]?.textContent);

// Seleção pelo seletor CSS
let primeiroEsporte = document.querySelector(".esporte");
console.log("Selecionado por querySelector:", primeiroEsporte?.textContent);

let todosEsportes = document.querySelectorAll(".esporte");
console.log("Selecionado por querySelectorAll:", todosEsportes?.textContent);

// Adicionando dois novos esportes à lista
let lista = document.querySelector("ul");

let novoEsporte1 = document.createElement("li");
novoEsporte1.textContent = "hoquei";
novoEsporte1.classList.add("esporte");
lista.appendChild(novoEsporte1);

let novoEsporte2 = document.createElement("li");
novoEsporte2.textContent = "Natação";
novoEsporte2.classList.add("esporte");
lista.appendChild(novoEsporte2);

console.log("Novos esportes adicionados: hoquei e Natação");
