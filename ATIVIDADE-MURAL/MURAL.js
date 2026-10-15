let inputnome = document.querySelector("#nome");
    let inputassunto = document.querySelector("#assunto");
    let inputmensagem = document.querySelector("#mensagem");

    let btnpre = document.querySelector("#btn");
    let assuntodescricao = document.querySelector("#assuntodescricao");
    let mensagemdescricao = document.querySelector("#mensagemdescricao");


    if(camponome.value=="") {
        nomedescricao.innerText = "Informe um nome";
    } else {
        nomedescricao.innerText = camponome.value;
    }
    assuntodescricao.innerText = campoassunto.value;
    mensagemdescricao.innerText = campomensagem.value;
}
let botaovisualizar = document.querySelector("visualizar");
botaovisualizar.addEventListener("click", visualizarrecado);

function visualizarrecado() {
    let inputnome = document.querySelector("#nome");
    let inputassunto = document.querySelector("#assunto");
    let inputmensagem = document.querySelector("#mensagem");

    let nomedescricao = document.querySelector("#nomedescricao");
    let assuntodescricao = document.querySelector("#assuntodescricao");
    let mensagemdescricao = document.querySelector("#mensagemdescricao");


    if(camponome.value=="") {
        nomedescricao.innerText = "Informe um nome";
    } else {
        nomedescricao.innerText = camponome.value;
    }
    assuntodescricao.innerText = campoassunto.value;
    mensagemdescricao.innerText = campomensagem.value;