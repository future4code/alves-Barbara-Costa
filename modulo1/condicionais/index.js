// EXECICIO DE INTERPRETAÇÃO DE CODIGO 

// (1)

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// //a) Explique o que o código faz. Qual o teste que ele realiza? 
// R= pede ao usuario para escolher um numero teste

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
//     R= apenas para numeros iguais que estão no valor do objeto, ou seja, 2 ou 0

// c) Para que tipos de números a mensagem é "Não passou no teste"?
//       R= numeros diferentes do que estão no valor do objeto, neste caso,
//       numeros diferentes de "2 e 0 "

//       (2)
//       let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// R= let cria variavel;fruta e preço, switch está no começo do bloco, case indica a condiçao. 
//     se a variavél é igual que está no case. break é a palavra que faz a execução sair do bloco
//      default é um codigo padrão, caso nenhum valor da variavel seja compativel com as opçoes dos cases


// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//   R= "o valor da maçã é" no caso o valor da maçã apareceu 5, pois está definido pelo "default"
  
// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos 
// o `break` que está logo acima do `default`
//  (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// R= aparece "valor da pêra é..." neste caso todos os valores de frutas ficariam "5" pois foram definido por "default", se tirar 
// esse comando os valores serão underfined 

// (3)

// const numero = Number(prompt("Digite o primeiro número."))
// if(numero >0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// // console.log(mensagem)


// // a) O que a primeira linha está fazendo?
//  //R= está pedindo para que o usuario digite um numero atraves do comando "number" "prompt" 

// // b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//        //R= a mensagem seria "esse numero passou no teste" .
//        // se fosse -10 daria erro pois não foi definido nenhum valor negativo além de 0 (?)

// // c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//  // R= sim, o programa colocou que seria aceito apenas numero maiores que "0" nesse caso,
//  // qualquer numero que seja maior que zero passará no teste. se colocar 20 não passa, apenas numeros de "1 a 10"

// // ---------------------------------------------------------##---------------------------------------------------------------------

// //     EXERCICIO DE ESCRITA DE CODIGO
//      //(1)
// // a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//    // R= let perguntaUsuario = (prompt("Qual é a sua idade?"))

// // b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
//  // if(perguntaUsuario >= 18) {}

// // c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console 
// // , caso contrário, imprima `"Você não pode dirigir."`

// // console.log("Você pode dirigir!")
// // } else{ 
// // console.log("Você não pode dirigir")
// // }

// // let perguntaUsuario = +(prompt("Qual é a sua idade?"))


// // if(perguntaUsuario >= 18) {

// // console.log("Você pode dirigir!")
// // } else{ 
// // console.log("Você não pode dirigir")
// // }

// // ==================================================================================================================================
// // (2) Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
// //  Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else)

// let perguntaAluno = prompt("Digite M para (matutino). V para (vespetino) e N para (noturno").toUpperCase()
// console.log(perguntaAluno)
// if(perguntaAluno ==="M"){
//   console.log("Bom dia!")
// }

// else if(perguntaAluno === "V") {
//   console.log("Boa tarde!")
// }
// else if(perguntaAluno ==="N") {
//   console.log("Boa noite!")
// }
// // ========================================================================================================================================
// //(3) Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
 
// switch(perguntaAluno){
//        case 'M':
//   console.log("Bom dia!");
//   break; 
//   case 'V' :
//     console.log("Boa tarde!");
//     break;
//     case 'N':
//       console.log("Boa Noite!");
//       break;
// }
// ===============================================================================================================================================
// (4)
// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for
//  do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme
//   que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai 
// topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, 
// imprima `"Escolha outro filme :("`
 


//  let valorIngresso= +(prompt("Qual valor você gostaria de pagar no ingresso?"))


// let perguntaUsuario =(prompt("Qual genero de filme você quer assistir?")).toLowerCase()


// if(valorIngresso <=15) {
//  if(perguntaUsuario === "fantasia"){ 
//   console.log("Bom filme!")
//  } else { 
//   console.log("Escolha outro filme")
// }}
