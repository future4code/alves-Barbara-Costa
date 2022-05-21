
// // COMPARADORES
// // Exercício 1------------------------------------------------------------------------------------

// // a-)Comparador de desigualdade a!==b 
// // Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 3));

// // // // b-)Compare a igualdade entre a===b

// // function checarIgualdade(a, b) {
// //     return `No comparador de igualdade ${a} === ${b} é ${a===b}`
// // }
// // console.log(checarIgualdade(1,3));

// // // c-)Faça uma função chamada "verificaSeEMaior"

// // function verificaSeEMaior(c, d){
  
// //     return ` ${c} > ${d}  ${c > d}`
// // }

// //  console.log(verificaSeEMaior(321, 2156));


// // // Exercício 2------------------------------------------------------------------------------------
// // //Escreva true or false para as comparações abaixo:
// // // exemplo 1>2 = false
// // a-) 1==='1'= false
// // b-) 1=='1'=  false
// // c-) 'a'==='b'= true
// // d-) 'b'>'a'= true
// // e-) 0!==null= false

// // // CONDICIONAIS

// // // Exercício 3------------------------------------------------------------------------------------
// // Escreva uma função que receba do usuário **nomeDoUsuario**, **anoDeNascimento**,
// //  **senhaDoUsuario** e **nacionalidade** e ****guarde essas informações dentro de um array 
// //  `usuários.` Porém só poderão se cadastrar:

// // - Usuários maiores de 18 anos
// // - A senha deve ter no mínimo 6 caracteres
// // - E que a nacionalidade seja brasileira.


// nomeDoUsuario = prompt("Digite seu nome de usuario"), 
// anoDeNascimento=Number (prompt("infome seu ano de nascimento")),
//  senhaDoUsuario= prompt("escolha uma senha de no mínimo 6 caracteres"),
//   nacionalidade= prompt("informe sua nacionalidade").toLowerCase()

// const cadastro=(nome,nascimento, senha, nacionalidade) => {
// const usuario = []
// let MaiorDeIdade = 2022 - nascimento
// if(MaiorDeIdade >= 18 &&(senha.length >=6) && nacionalidade === "brasileira") {
//     usuario.push(nome, nascimento, senha, nacionalidade)

// }
//  return usuario 
// }
// console.log (cadastro (nomeDoUsuario,anoDeNascimento, senhaDoUsuario, nacionalidade))

// // Exercício 4-----------------------------------------------------------------------------------------------
//Escreva uma função que peça uma senha para o usuário e verifique se está é a 
// mesma senha cadastrada por ele.  Dentro da função defina uma senha válida 
//  Ex: const senha=”labenu”
// - Caso a senha seja válida imprima no console a mensagem (Usuário Logado)
// // - Caso a senha seja inválida imprima no console (Senha Inválida)




// // Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {

//     //  Sua lógica aqui


// }
// console.log(primeiraDose())


// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui


// }
// console.log(segundaDose("Barbara"));

// // Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui

// }
// console.log(avisoAosAtrasados());


// // DESAFIO------------------------------------------------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]

// const cadastroDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastroDesafio());

// const loginDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(loginDesafio());

// const primeiraDoseDesafio = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDoseDesafio())
// const segundaDoseDesafio = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

// const avisoAosAtrasadosDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasadosDesafio())