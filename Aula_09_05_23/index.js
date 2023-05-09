//BASICO PARA JS

alert("Olá, 2C <3")
prompt("Digite seu nome") //prompt sempre recebe texto
confirm("Certeza que deseja trancar o curso?") 

// INICIO DOS DADOS
var nome = prompt("Digite seu nome") //criar uma variavel
console.log(nome) //guardar o valor da variavel
document.write(nome) //mostrar a variavel na tela

//VARIAVEL

// VAR pode ser alterada depois e é global

var a = 10 
console.log(a)
a = 15
console.log(a)

// LET é usado para local, valores locais.

let b = 10
console.log(a) 

if(true){
    let b = 15
    console.log(a)
}

console.log(b)

// CONST é valor fixo ideal para cadastro.

const c = 30
console.log(c) 


//JUNTANDO VALORES "TEXTO + VAR"

var nome = prompt("Digite seu nome: ")
alert("Bom dia " + nome)

//TEMPLATE STRING => INTERPOLAÇÃO

alert(`Bom dia ${nome}`) //evitar juntar muitos +



//JUNTANDO VALORES NO DOCUMENTO

//concatenando texto
var n3 = prompt("Digite seu n3: ") //transformando em num
var n4 = prompt("Digite seu n4: ") //transformando em num
var juntou = n3 + n4



//concatenando numero
var n1 = parseInt(prompt("Digite seu n1: ")) //transformando em num
var n2 = parseInt(prompt("Digite seu n2: ")) //transformando em num
var soma = n1 + n2

console.log("n1 é: " + typeof n1) //verificar o tipo de dado

//PARAGRAFO

//document.write(`<P >A soma de ${n1} com ${n2} é ${soma}</P>`)

//COLOCANDO COR e TESTE CONDICIONAL

if(soma>10){

    document.write(`<P class="maior">A soma de ${n1} com ${n2} é ${soma}</P>`)
}
else{
    document.write(`<P class="menor">A soma de ${n1} com ${n2} é ${soma}</P>`)
}



