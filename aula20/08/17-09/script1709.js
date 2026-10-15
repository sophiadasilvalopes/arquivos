let livros = [
    [101,"Dom Casmurro", "Clássico", 14, 3]
    [102, "Odisseia", "Clássico", 14, 2]
    [103, "O Portador da Espada", "Lançamento", 7, 4],
    [104, "Teologia", "Geral", 10, 1]
];
let historicodeDevolução = [];

function registrarEmprestimo (livroid, coleta, atrasoDia){

for (let i = 0; i < acervoBiblioteca.length; i++) {
        if (acervoBiblioteca[i][0] === idLivro) {
            livroEncontrado = acervoBiblioteca[i];
            break;}}

    if(livroEncontrado){
        console.log(`Erro:${livroid}`);
        return;
    }
let taxa = 0;
switch (coleta){
    case "Interior":
        taxa = 26.00
        break;
    case "Bairro":
        taxa = 9.00
        break;
    case "Centro":
        taxa = 3.00
        break;
    default:
        taxa = 11.00;
}
}
let valorcomMulta = atrasoDia * 8.00;
let totalPagar = taxa + valorcomMulta