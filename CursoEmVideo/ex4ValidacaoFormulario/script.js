let numeroEntrada = document.getElementById('infoNumero')
let nomeEntrada = document.getElementById('infoNome')
let emailEntrada = document.getElementById('infoEmail')
let telefoneEntrada = document.getElementById('infoTelefone')
let cpfEntrada = document.getElementById('infoCPF')
let cepEntrada = document.getElementById('infoCEP')

let cont1 = 0;
const dados = [{}]



function salvar(){

    //verifica se o returno da funçoes é true, caso as informaçoes estiverrem correta, caso ao contratrio
    //as funçoes returna false
    if(validarNumero(numeroEntrada) != false && validarNome(nomeEntrada) != false && validarEmail(emailEntrada) != false){
      
        dados[cont1] = {
            nome: nomeEntrada.value, 
            numero: numeroEntrada.value, 
            email: emailEntrada.value
            //telefone: telefoneEntrada.value,
            //cpf: cpfEntrada.value,
            //cep: cepEntrada.value
        }
        cont1++
        console.log(dados)
        console.log('---------------------------------------')

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
    let regexv = /[a-z]/ig
    if(numero.value != '' && !regexv.test(numero.value)){
        console.log(`validação numero: ${!regexv.test(numero.value)}`)
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
        console.log('validaçao nome: true ')
        return true 
        
    }else {
        return false
    }
}

//varifica se o campo de email possui o @ e tambem o .com
//usar os metodos de string

function validarEmail(email){

let emailV = email.value
let regexv = /\S+@\S+\.+[c]+[o]+[m]|[b]+[r]/ig

 console.log(`validação email: ${!!regexv.test(emailV)}`)
    if(!!regexv.test(emailV)){
        console.log('email com formato certo')
        return true
    }else if(regexv.test(emailV) == false){
        console.log('email com formato errado')
        return false 
    }
}
function validarTelefone(){

}
function validarCpf(){

}
function validarCep(){

}

//verificar dentro do array dados se ja existe algum dado igual ao que esta sendo informado 
function validarRepeticao(){
}
