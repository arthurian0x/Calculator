var num1; 
var num2; 
var op; 

function numero(num){ // Esta funcao recebe o numero escolhido pelo usuario e o adiciona a tela da calculadora
    valor = document.getElementById("result").value;
    document.getElementById("result").value = valor+num;
}

function operacao(ope){ // Esta funcao recebe a operacao escolhida pelo usuario, remove o que esta na tela da calculadora e armazena a operacao na var global op
    num1 = document.getElementById("result").value;
    document.getElementById("result").value = null; 
    op = ope; 
}

function calculo(){ // Esta funcao checa qual operacao o usuario escolheu e entao realiza o calculo adequado
    num2 = document.getElementById("result").value;
    if(op == '+'){
        document.getElementById("result").value = parseFloat(num1) + parseFloat(num2);
    }
    else if(op == '-'){
        document.getElementById("result").value = parseFloat(num1) - parseFloat(num2);
    }
    else if(op == '/'){
        document.getElementById("result").value = parseFloat(num1) / parseFloat(num2);
    }
    else if(op =='*'){
        document.getElementById("result").value = parseFloat(num1) * parseFloat(num2);
    }
}

function clean(){ // Esta funcao limpa a tela da calculadora e todas as variaveis
    document.getElementById("result").value = null;
    num1 = null;
    num2 = null;
    op = null;
}