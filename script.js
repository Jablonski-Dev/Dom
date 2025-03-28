let titulo = document.getElementById("titulo");
console.log(titulo);

//buscando elemento por classe
let descrição = document.getElementsByClassName("descrição");
console.log(descrição[0]);

//selecionando pelo nome da tag
let paragrafo = document.getElementsByTagName("p");
console.log(paragrafo[0]);

//selecionando pelo Query Selector
//# significa Id -> O nome da classe é descrição
//"." significa classe -> O nome da classe é descrição
let tituloQS = document.querySelector("#titulo");
let paragrafoQS = document.querySelector(".descriçao");
console.log("Exibindo com Query Selector" + tituloQS);
console.log("Exibindo com QS o paragrafo" + paragrafoQS[0].textContent);
