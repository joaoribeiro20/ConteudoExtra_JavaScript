let numeroEntrada = document.getElementById('infoNumero')
let nomeEntrada = document.getElementById('infoNome')
let emailEntrada = document.getElementById('infoEmail')
let cont1 = 0;
const dados = [{}]



function salvar(){

    console.log(validarEmail(emailEntrada))
    console.log(validarNome(nomeEntrada))
    console.log(validarNumero(numeroEntrada))
    
    //console.log(cont1)
    //console.log(numeroEntrada.value)
    //console.log(nomeEntrada.value)

    //console.log(validarNome())
    //console.log(validarNumero())

    //verifica se o returno da funçoes é true, caso as informaçoes estiverrem correta, caso ao contratrio
    //as funçoes returna false
    /*if(validarNumero() != false && validarNome() != false){

        dados[cont1] = {nome: nomeEntrada.value, numero: numeroEntrada.value}
        cont1++
        console.log(dados)
        console.log(cont1)

    }else{
        alert('Dados invalidos')
    }*/
    
}

//nao pode comecar um nome com numero 
//nao pode colocar 0 em numero
//
//esta permitindo escrever 1 numero e o resto letra e 1 letra e o resto numeros

//verifica se o campos de numero nao esta vazio e verifica se nao é uma letra ou texto
function validarNumero(numero){
    
    if(numero.value != '' && parseInt(numero.value)){
        return true
    }else {
        return false
    }
}
//verifica se o campo de nome nao esta vazio e tambem verifica se nao contem numero
function validarNome(nome){
    if(nome.value != '' && !parseInt(nome.value)){
        return true
        
    }else {
        return false
    }
}

//varifica se o campo de email possui o @ e tambem o .com
//usar os metodos de string
//primeiro corta para pegar so a parte final e depois comparar com uma variavel let com = .com
//equals e para cotar o endsWith() ou substring() juntamento com length
//str.endsWith(stringSendoBuscada[, tamanho])

const dominioCom = '.com'
const dominioBr = '.br'
const arroba = '@'
function validarEmail(email){
    if(email.value.endsWith(dominioBr) || (email.value.endsWith(dominioCom))){
        if(email.value.includes(arroba)){
        return true
    } else{
        return false
    }
   }
    else{
        return false
    }


}

function validarExistencia(){

}
