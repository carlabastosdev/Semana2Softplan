var nascimento = parseInt(window.prompt("Qual é o ano de seu nascimento?")); 
var anoAtual = parseInt(window.prompt("Qual é o ano atual?"));
var idade = (anoAtual-nascimento);
window.alert (" Sua idade é " + idade + " anos se você não fez aniversário ou " + (idade+1) + " anos se você já fez aniversário.");

