// EXERCÍCIO 3
let media, n1, n2, n3 ;

n1 = prompt("Informe a primeira nota: ") ;
n1 = eval(n1);

n2 = prompt("Informe a segunda nota: ") ;
n2 = eval(n2) ; 

n3 = prompt("Informe a terceira nota: ") ; 
n3 = eval(n3) ;

media = (n1 + n2 + n3)/3 ; 

if ( media >= 7 ) {
    document.write ("Aprovado");
} else { 
    if ( media <= 6 ) {
    document.write ("Reprovado");
} else {
    document.write ("Recuperação");
}}



// EXERCÍCIO 4
// var entradaDoUsuario;
// entradaDoUsuario = window.prompt("Por favor, digíte seu país de origem abaixo:");
// switch (entradaDoUsuario) {
//     case "Brasil":
//         alert("Você é brasileiro(a).");
//         break;
//     case "Argentina":
//         alert("Você é argentino(a).");
//         break;
//     default:
//         alert("Infelizmente não pude identificar sua nacionalidade.");
//         break;
// }


// EXERCÍCIO 5
// var tabuada3;
// for(var i=0; i < 11; i++){
//     console.log("3 X "+ i + " =" + 3*i);
// }


// EXERCÍCIO 6
// var numeroInteiro=0;
// while(numeroInteiro < 6){
//     console.log("Número inteiro " + numeroInteiro + ".");
//     numeroInteiro++;
// }


// EXERCÍCIO 7
// var numeroInteiro;
// do{
//     numeroInteiro = parseInt(window.prompt("Digite um número abaixo de 10, vamos ver se você acerta hahahaha!"));
// }while(numeroInteiro !== 6);
// alert("Você acertou!!!");


// EXERCÍCIO 8  
// var time = 3;
//     for(var i = 0; i < time; i++){
//         setInterval(() => {
//             console.log("Hello World.")
//         }, 3000);
//     }


// EXERCÍCIO 9
// console.log("Espere cinco segundos para a surpresa!");
// const timeOut = setTimeout(Mensagem, 5000);
// function Mensagem(){
//     console.log("Obrigado por esperar HEHEHE.");
// }


// EXERCÍCIO 10
// var clique = document.querySelector('button').addEventListener('click',MudarBackground);
// function MudarBackground(){
//     var body = document.querySelector('body');
//     body.style.background = 'blue';
// }