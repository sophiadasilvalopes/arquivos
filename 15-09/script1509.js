let motorista=Marcos;
let tipoVeiculo=2;
let horas=8;
let clienteCadastrado=true;
let ficouDuranteNoite=false;
let valorPorHora=0;
switch(tipoVeiculo){
    case 1:
        valorPorHora = 4;
        break;
    case 2:
        valorPorHora = 7;
        break;
    case 3:
        valorPorHora = 10;
        break;
    default:
        console.log("Tipo de veículo inválido.");
}
let valor
/*
//texto_digitado=Number(texto_digitado);
//Number é utilizado quando queremos converter o valor digitado em número, caso seja necessário.

if(confirmacao){//Se a confirmação for verdadeira, o código dentro do if será executado.
//if(!confirmacao){ //Utilizar o ! para negar a condição, ou seja, se a confirmação for falsa, o código dentro do if será executado.
//if(confirmacao==true){
    alert(`O texto digitado foi: ${nome} e a idade digitada foi: ${idade}.`);
    if(idade>=18){
        alert("Você é maior de idade.");
    }
}else{
    alert("Você não quis ver o texto digitado.");
}

switch(idade){
    case 18:
        alert("Você tem 18 anos.");
        break;
    case 19:
        alert("Você tem 19 anos.");
        break;
    default:
        alert("Você não tem 18 nem 19 anos.");
        break;
}
        */

/*
while(idade<18){
    alert("Você é menor de idade.");
    idade++;
    //idade=idade+1;
}
alert("Você é maior de idade.");


//let i;
//for(let i=0;i<10;i++){
//    alert(`Contagem: ${i}`);
//}

//Operadores logicos: && (E), || (OU), ! (NÃO)

/*Operadores aritméticos: +, -, *, /, %, ++, --
+	Adição
-	Subtração
*	Multiplicação
**	Exponenciação
/	Divisão
%	Resto da divisão
++	Incremento
--	Decrement

/*Comparadores: ==, ===, !=, !==, >, <, >=, <=
== Igualdade (valor)
=== Igualdade estrita (valor e tipo)
!= Diferente (valor)
!== Diferente estrito (valor e tipo)
> Maior que
< Menor que
>= Maior ou igual a
<= Menor ou igual a
*/

//Operador ternário: condição ? valor_se_verdadeiro : valor_se_falso
//let pode_votar=idade>=16 ? "Você pode votar." : "Você não pode votar.";
//alert(pode_votar);

/*Sem o ternario seria necessário fazer assim:
if(idade>=16){
    alert("Você pode votar.");
}else{
    alert("Você não pode votar.");
}
*/

alert(mensagem());
mensagem2();
alert(soma(5,10));
alert(soma(10,20));

function mensagem(){
    return "Olá, mundo!";
}
function mensagem2(){
    alert("Olá, mundo2!");
}
function soma(a,b){
    return a+b;
}