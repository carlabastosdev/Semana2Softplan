var sinal=window.prompt ("Qual tipo de calculo deseja fazer +, -, * ou /?" );
var primeiroValor = parseFloat(window.prompt ("primeiro valor que deseja calcular"));
var segundoValor = parseFloat(window.prompt ("segundo valor que deseja calcular"));

var resultado;
switch(sinal){
    case '*':
        resultado=primeiroValor*segundoValor;
        break;
    case'/':
        resultado=primeiroValor/segundoValor;
        break;
    case '+':
        resultado=primeiroValor+segundoValor;
        break;
    case  '-':
        resultado=primeiroValor-segundoValor;
        break;
    
}
window.alert ('O resultado do seu cálculo é ' + resultado)