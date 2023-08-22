//função padrao javascript
//////////////////////////////////////////////////////////
//palavraReservada nomeDaFunção (Espaço para parametros)//
//{                                                     //
//    ação                                              //
//}                                                     //
//////////////////////////////////////////////////////////

//sem parametros
function exibirFuncaoNormal(){
    console.log("olá mundo funcao padrao")
}
exibirFuncaoNormal()
//////////////////////

let numero1 = 10
let numero2 = 30
//com parametro
function somaFuncaoNormal(valor1, valor2){
    let somar = valor1 + valor2
    return somar
}
console.log(`Resultado da soma pela função padrao:  ${somaFuncaoNormal(numero1, numero2)}`)
/////////////////////

let frase = "todo mundo odeia o chris e o joao"
function arrayFrasesFuncaoPadrao(frases){
    let separado = frases.split(' ')
    return separado
}
console.log(`Função padrao : ${arrayFrasesFuncaoPadrao(frase)}`)
/////////////////////////////////////////////////////////////////////

let roupas = [
    {produto: 'a', preco: '1', cor: 'aa'},
    {produto: 'b', preco: '2', cor: 'bb'},
    {produto: 'c', preco: '3', cor: 'cc'},
    {produto: 'd', preco: '9', cor: 'dd'},
    {produto: 'e', preco: '10', cor: 'ee'},
    {produto: 'f', preco: '11', cor: 'ff'}
]


function funcaoPadraoMaiorValor(arrayRoupas){
    let valorRoupa = arrayRoupas.filter(arrayRoupas => arrayRoupas.preco >= 5)
    return valorRoupa
}

console.log(funcaoPadraoMaiorValor(roupas))

//arrow function 
//////////////////////////////////////////////////////////////////////
//let variavelQueVaiAmazernarArrow = (espaco para parametro) => { ação }//
/////////////////////////////////////////////////////////////////////


//sem parametros
let exibirFuncaoArrow = () => console.log("olá mundo arrow function")
exibirFuncaoArrow()
//////////////////

//com parametro
let somaFuncaoArrow = (valor1, valor2) => { return valor1 + valor2 }
console.log(`Resultado da soma pela Arrow Function:  ${somaFuncaoArrow(numero1, numero2)}`)
//////////////////////////////////////


let arrayFrase = (frase) => frase.split(' ')
console.log(`função arrow :  ${arrayFrase(frase)}`)
///////////////////////////////////////////////////////
//a baixo temos a função filter que recebe outra função dentro do espaço de parametros
// nomeDaVariavel.filter(funcaoComAsCondiçoesDoFiltro);
let funcaoArrow = roupas.filter((arrayRoupas2) => {
    return arrayRoupas2.preco >= 5
})
console.log(funcaoArrow)