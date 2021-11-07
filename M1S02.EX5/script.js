var nome = prompt("Qual é o seu nome?"); 
var idade = prompt("Qual é o sua idade?");
if (isNaN(idade)){
    alert('não é número');
}
var esporte = confirm("Gosta de praticar algum esporte?");
if (esporte==true){
    esporte='você gosta de esporte!'
} else{
    esporte='você não gosta de esporte'
}
console.log (" O seu nome é " + nome + ", a sua idade é " +  idade + " anos e " + esporte);

alert (" O seu nome é " + nome + ", a sua idade é " +  idade + " anos e " + esporte);

