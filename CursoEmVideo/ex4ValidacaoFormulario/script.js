let numeroEntrada = document.getElementById('infoNumero')
let nomeEntrada = document.getElementById('infoNome')
let emailEntrada = document.getElementById('infoEmail')
let cont1 = 0;
const dados = [{}]



function salvar(){

    //verifica se o returno da funçoes é true, caso as informaçoes estiverrem correta, caso ao contratrio
    //as funçoes returna false
    if(validarNumero(numeroEntrada) != false && validarNome(nomeEntrada) != false && validarEmail(emailEntrada) != false){
      
        dados[cont1] = {nome: nomeEntrada.value, numero: numeroEntrada.value, email: emailEntrada.value}
        cont1++/
        console.log(dados)

    }else{
        alert('Dados invalidos')
    }
    
}

//nao pode comecar um nome com numero 
//nao pode colocar 0 em numero
//
//esta permitindo escrever 1 numero e o resto letra e 1 letra e o resto numeros

//verifica se o campos de numero nao esta vazio e verifica se nao é uma letra ou texto
function validarNumero(numero){
    //let teste = parseInt(numero.value)
    //console.log(teste)
    if(numero.value != '' ){
        return true
    }else {
        return false
    }
}
//verifica se o campo de nome nao esta vazio e tambem verifica se nao contem numero
function validarNome(nome){
    

    if(nome.value != '' ){
        for(let i=0; i <= 9; i++)
        {
            if(nome.value.indexOf(i) != -1){
                console.log('foi encontrado um numero dentro da string/campus nome')
                return false
                break
            }
        } 
        console.log('nao foi encontrado nenhum numero dentro da string/campus nome')
        return true 
        
    }else {
        return false
    }
}

//varifica se o campo de email possui o @ e tambem o .com
//usar os metodos de string

function validarEmail(email){
const dominioCom = '.com'
const dominioBr = '.br'
const arroba = '@'
let emailV = email.value


    if(emailV.endsWith(dominioBr) || (emailV.endsWith(dominioCom))){
        if(emailV.includes(arroba)){
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
