function adicionaritem() {
    if (validarcampos == false) {
        return;
    }
    let nome = camponome.value; // .value = valor, neste caso guarda o valor do camponome no let nome
    let categoria = campocategoria.value; // .value = valor, neste caso guarda o valor do campocotegoria no let categoria
    let preco = campopreco.value; // .value = valor, neste caso guarda o valor do campopreco no let preco
    let descricao = campodescricao.value; // .value = valor, neste caso guarda o valor do campodescricao no let descricao

    let novocard = document.createElement("div"); // createElement cria um elemento html, neste caso uma div, armazenando no let novocard
    novocard.className = "card"; // className adiciona uma classe a um elemento html, neste caso a classe card ao novocard
    let titulocard = document.createElement("h3"); // createElement cria um elemento html, neste caso uma h3, armazenando no let titulocard
    titulocard.innerText = nome; // innerText altera o valor de um elemento de texto do html, neste caso o valor do titulocard é o nome
    let categoriacard = document.createElement("p"); // createElement cria um elemento html, neste caso uma p, armazenando no let categoriacard
    categoriacard.innerText = "categoria" + categoria; // innerText altera o valor de um elemento de texto do html, neste caso o valor do categoriacard é a categoria
    let precocard = document.createElement("p"); // createElement cria um elemento html, neste caso uma p, armazenando no let precocard
    precocard.innerText = "R$" + preco; 
    let descricaocard = document.createElement("p");
    descricaocard.innerText = descricao; 

    novocard.appendChild(titulocard); // appendChild adiciona um elemento em outro elemento
    novocard.appendChild(categoriacard);
    novocard.appendChild(precocard); 
    novocard.appendChild(descricaocard); 

    listaitens.appendChild(novocard); 

    camponome.value = ""; // value = valor, neste caso deixa o camponome vazio
    campocategoria.value = ""; 
    campopreco.value = ""; 
    campodescricao.value = ""; 

    visualnome.innerText = "Nome do produto"; // innerText altera o valor de um elemento de texto do html.
    visualcategoria.innerText = "Categoria"; 
    visualpreco.innerText = "R$0,00"; 
    visualdescricao.innerText = "Descrição do produto"; 
    mensagemerro.innerText = ""; 
}
