const nome = 'Guido Cerqueira';

function gerarApelido (nome) {
    if (nome.charAt(0) !== "@") {
        nome = "@" + nome.toLocaleLowerCase().replace(/\s/g, "");
    }
    return nome.substring(0,13)
}

const apelido = gerarApelido(nome);
console.log(apelido)
