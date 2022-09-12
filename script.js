/* #exercicio "while"
Vamos criar um sistema em que a pessoa sera solicitada a inserir vários números, um após p outro.
Quando digitar o numero '0', devemos para de solicitar novos imputs e imprimir no console a soma de todos os numeros indicados.
Ex: vamos supor que ele coloque: 10,3,50,7,0
O resultado deve ser: 70
*/
/*
let numeroUsuario
let soma = 0

while (numeroUsuario !== 0) {
    numeroUsuario = Number(prompt("Insira um numero:"))
    console.log(numeroUsuario)
    soma += numeroUsuario
    //soma = soma + numeroUsuario
}
console.log(soma)
*/




/* #exercicio "for"
Vamos escrever um programa que recebe um numero por input de usuario.
Esse programa deve escrever os numeros de 0 até o valor que foi digitado pela pessoa.
Para isso, vamos utilizar um laço for que roda por x vezes, onde x é o numero digitado.
*/
/*
let numeroFor = Number(prompt("Digite um numero:"))

for(let i = 0; i<= numeroFor + 1; i++) {
    //let i = 0; i<numeroFor; i++
    console.log(i)
}
*/




/* 3 exercicio "for com arrays"
Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha:
“O número do índice ${indice} é ${numero}”
*/

const array = [1,2,3,4,5,6,7]

for(let i = 0; i < array.length; i++){
    const numero = array [i]
	console.log(`O numero do indice ${i} é ${numero}`);
}
console.log("===========================")




/*pra guardar na cabeça
1. Utilizando o laço while, escreva um código que recebe um prompt esperando seu tipo de usuário. 
O tipo de usuário é representado pelas letras abaixo:
“A”: Administrador;
“B”: Usuário comum;
“C”: Usuário assinante

Enquanto o valor passado for diferente da letra que representa “Administrador”, o laço deve se repetir, 
exibindo a mensagem: “Acesso negado.”
Quando o valor for igual ao da letra que representa “Administrador”, o laço deve parar, 
e a mensagem “Boas-vindas, admin!” deve ser impressa.
*/
/*
let tipoUsuario = ""

while (tipoUsuario !== "A") {
    tipoUsuario = prompt("Digite o tipo de seu usuario:").toUpperCase()
    if (tipoUsuario !== "A") {
    console.log("Acesso negado")
    }
}
console.log("Boas vindas, Admin!")
*/



/*pra guardar na cabeça
2. Escreva, utilizando um laço for, um programa que escreva a tabuada do 2.
*/

const num = 2
for (let i = 1 ; i <= 10; i++){
console.log(`${i} x ${num} = ${i*num}`)
}
console.log("===========================")



/*pra guardar na cabeça
3. Crie um laço for que recebe um array de strings, e imprima no console a string em caixa alta
*/

const arrayStrings = ["limão" , "laranja" , "mamão"]

for(let i = 0; i <arrayStrings.length; i++){
    console.log(arrayStrings[i].toUpperCase())
}