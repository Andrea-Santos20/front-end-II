/*
Exercício de Hoje

Montar um script que pergunte:
Nome
Idade
Profissão

E logo após obter essas informações exiba uma mensagem dizendo "Olá me chamo {NOME}, tenho ${IDADE} e atualmente trabalho com ${PROFISSÃO}"
*/

var userName = prompt('Olá! Qual o seu nome?');
var age = prompt('E me diz, qual a sua idade?');
var job = prompt('Qual a sua atual profissão?');

const message = `Olá meu nome é ${userName}, tenho ${age} anos de idade e minha profissão atual é ${job}`;

alert(message);