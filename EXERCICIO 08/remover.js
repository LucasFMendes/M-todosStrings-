const cpf = "011.022.033-44,";

const validarMascara = cpf.replace(/[,.-]/g,"")

console.log(validarMascara)