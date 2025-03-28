

// Seleção pelo ID
let titulo = document.getElementById("titulo");
console.log("Selecionado por ID:", titulo);

// Seleção pela classe, mostrando o primeiro esporte
let esportesPorClasse = document.getElementsByClassName("esporte");
console.log("Selecionado por classe:", esportesPorClasse[0].textContent);

// Seleção pela classe, mostrando o segundo esporte
let esportesPorClass = document.getElementsByClassName("esporte");
console.log("Selecionado por classe:", esportesPorClasse[1].textContent);

let esportesPorClas = document.getElementsByClassName("esporte");
console.log("Selecionado por classe:", esportesPorClasse[2].textContent);

let esportesPorCla = document.getElementsByClassName("esporte");
console.log("Selecionado por classe:", esportesPorClasse[3].textContent);


// Seleção pela tag
let itensLista = document.getElementsByTagName("li");
console.log("Selecionado por tag:", itensLista[0].textContent);

let itensList = document.getElementsByTagName("li");
console.log("Selecionado por tag:", itensLista[1].textContent);

let itensLis = document.getElementsByTagName("li");
console.log("Selecionado por tag:", itensLista[2].textContent);

let itensLi = document.getElementsByTagName("li");
console.log("Selecionado por tag:", itensLista[3].textContent);


// Seleção pelo seletor CSS (primeiro elemento encontrado)
let primeiroEsporte = document.querySelector(".esporte");
console.log("Selecionado por querySelector:", primeiroEsporte.textContent);

// Seleção pelo seletor CSS (todos os elementos correspondentes)
let todosEsportes = document.querySelectorAll(".esporte");
console.log("Selecionado por querySelectorAll:", todosEsportes);
