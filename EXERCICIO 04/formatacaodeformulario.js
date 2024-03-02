function completarIdentificador (numero) {
   let identificador = numero.toString();
    while (identificador.length < 6) {
        identificador = '0' + identificador;
    }
    return identificador;
}
function inicialMaiusculas () {
    
    const nomeMinusculo = "lucas felipe mendes"

    const nomeMaisculo = nomeMinusculo.replace(/\b\w/g, c => c.toUpperCase());

    return nomeMaisculo;
}


let identificador = "123";

let nome = "Lucas felipe mendes";

let nomeMaisculo = inicialMaiusculas(nome)

let email = "       lucasfelipe@gmail.com";


console.log(nomeMaisculo)

console.log(email.trim())

console.log(completarIdentificador(123))