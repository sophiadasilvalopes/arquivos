
/*let nome = Carlos;
let nota = 7;
let frequencia = 80;
let trabalhoEntregue = true;
if (nota>=7 && frequencia>=75 && trabalhoEntregue === true){
    console.log("Aprovado");
}else{
    console.log("Reprovado");
}
console.log("Nome do aluno: "+ nome)*/

let produto = "Teclado";
let preco = 150;
let quantidade = 3;
let promocao = true;

let total= preco * quantidade
let desconto=0;
if (total>=400 && promocao){
    desconto= total * 0.15;
}else if(total>=200 && promocao){
    desconto= total * 0.10;
}else{
    desconto=0
}
let valorfinal = total-desconto;
console.log("Produto:"+produto)
console.log("Quantidade: "+quantidade)
console.log("Valor sem desconto: "+preco)
console.log("Desconto: "+promocao)
console.log("Valor final: "+ (total-desconto))



    
