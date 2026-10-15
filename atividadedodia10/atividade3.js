let usuario = "Sophia"
let tipodeusuario = 2
let ativo = true
let tentativas = 1

    switch (tipodeusuario) {
        case 1:
            tipodeusuario = "Aluno"
            break;
        case 2:
            tipodeusuario = "Professor"
            break;
        case 3:
            tipodeusuario = "Administrador"
            break;
        default:
            tipodeusuario = "não"
    }

if (tipodeusuario == "não") {
    ativo = false
} else if (tentativas > 3) {
    ativo = false
} else {
    ativo = true
}

console.log(`Usuario: ${usuario}`)
console.log(`Tipo: ${tipodeusuario}`)
console.log(`Ativo: ${ativo}`)
console.log(`Tentativas: ${tentativas}`)
console.log(`Situação ${ativo}`)
