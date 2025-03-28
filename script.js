let titulo = document.getElementById("titulo");
console.log(titulo);

// //buscando elemento por classe
// let descrição = document.getElementsByClassName("descrição");
// console.log(descrição[0]);

// //selecionando pelo nome da tag
// let paragrafo = document.getElementsByTagName("p");
// console.log(paragrafo[0]);

// //selecionando pelo Query Selector
// //# significa Id -> O nome da classe é descrição
// //"." significa classe -> O nome da classe é descrição
// let tituloQS = document.querySelector("#titulo");
// let paragrafoQS = document.querySelector(".descriçao");
// console.log("Exibindo com Query Selector" + tituloQS);
// console.log("Exibindo com QS o paragrafo" + paragrafoQS[0].textContent);

//alterando o style de um elemento
titulo.innerText = "Novo Título para o nosso H1";
titulo.innerHTML = "<span style='color:red'> Titulo em vermelho </span>"

//Alterando o style de um elemento com JS 
titulo.style.backgroundColor = "black";
titulo.style.fontSize = "50px";

// adicionando um novo elemento
let novoParagrafo = document.createElement("p");
novoParagrafo.innerText = "Este é um novo páragrafo!";

//adicionando o novo paragrafo ao body
documento.body.appendChid(novoParagrafo);

//removendo elementos do DOM com js removeChild
let elementoParaRemover = document.querySelector(".descricao");
document.body.removeChild(elementoParaRemover);