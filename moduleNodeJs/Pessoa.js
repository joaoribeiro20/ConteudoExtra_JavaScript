//exportclass Pessoa{
export default class Pessoa{

    nome
    idade
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
        console.log(`seu nome é ${nome} e voce tem ${idade} anos`)
    }
}
