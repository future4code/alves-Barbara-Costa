/*Interpretação de codigo
1:
Parte A (b) = (10) // será impresso no navegador o resultado (10)
Parte B (a, b) (5) // será impresso no navegador o resultado (10 e 5)
2: 

( a, b, c) // será impresso no navegador o resultado (10,10,10)
3: 
let JornadaDeTrabalho = prompt("Quantas horas você trabalha por dia?")
let RecompensaFinanceira = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)*/

//Escrita de codigo 
let nome = "Barbara"
let idade = 25
console.log (typeof nome, idade)
// a variavel não teve valor atribuido, imprimiu apenas undefined
 const nomeUsuario = prompt ("qual é seu nome? e sua idade?")
console.log (typeof nome, idade)
// apareceu apenas string e a idade 
console.log (typeof nome, typeof idade) 
// notei que apos repetir o comando typeof em ambas variaveis deu certo
 console.log ("Ola Barbara, você 25 anos") 
  
 let  questionario= "você é alta? você gosta de carros? você sabe andar de bicicleta?"
 let respostaA = "sim"
let respostaB = "não"
let respostaC = "sim" 
console.log (questionario, respostaA, respostaB, respostaC)

//Alterando o valor da variavel
let a = 10
let b = 25
let c = 10
a = b
b = c 
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("o novo valor de b é", b) // O novo valor de b é 10 
