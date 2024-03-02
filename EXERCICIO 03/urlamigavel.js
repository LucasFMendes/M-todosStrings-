function alterarFrase (texto) {
    
    const palavras = texto.split(' ');

    const fraseAlterada = palavras.join('-')

    return fraseAlterada;
}

const meuTexto = "Aprenda programar do zero na Cubos Academy"

const fraseAlterada = alterarFrase(meuTexto)

console.log(fraseAlterada.toLowerCase())

