let dados = '552303s'
let mai = '.COM'
let mi = '.com'
const regexNumero = /[a-z]/i
const regexEmail = /.com/i


//returna a posição que foi encontrado a primeira ocorrencia, caso nao encontre nada retorna -1
console.log(dados.search(/[a-z]/))

//test =  returna true caso encontrei a palavra dentro da string ou false caso nao indentifique nada
console.log(regexNumero.test(dados))
console.log(regexEmail.test(mai))
console.log(regexEmail.test(mi))