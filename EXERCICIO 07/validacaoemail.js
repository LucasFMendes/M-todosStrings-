function validacaoEmail (verificarEmail) {

    const validarEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

    const emailValido = verificarEmail.replace(validarEmail)

    console.log(emailValido)

    if (emailValido === verificarEmail) {

        console.log("Email Valido")

        return
    }
    console.log("Email invalido")
}

const verificarEmail = "lucasfelipe@cubos.academy"

validacaoEmail(verificarEmail)
