function validacaoArquivos (nomeArquivo) {

    const ArquivosValidos = ['jpg', 'jpeg', 'gif', 'png']

    const extensao = nomeArquivo.split(".").pop()

    if (ArquivosValidos.includes(extensao)) {
        
        console.log("Arquivo Valido")
        return
    }
        console.log("Arquivo Invalido")
    
}
const nomeArquivo = 'Foto da Familia.pdf';

validacaoArquivos(nomeArquivo)