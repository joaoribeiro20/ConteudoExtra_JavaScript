export default class Aluno{
    nome
    idade
    constructor(Nome, Idade){
        this.nome = Nome
        this.idade = Idade
        
    }

    nomeEidade(){
        return `bem vindo ${this.nome} sua idade é ${this.idade}`
    }
}