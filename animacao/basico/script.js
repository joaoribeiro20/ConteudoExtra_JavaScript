/* 
A função setInterval permite configurar um tempo de intervalo para chmar aquela função es espesifica
por exemplo, é como se a gente fosse no restaurante e chamsse o garsoul, porem quando ele vem ele deixa um cronometro 
com a gente, que conta um determinado tempo e depois ele volta e assim por diante 


sintaxe 
 
variavel = setInterval(função, intervaloDeTempo, parametroDaFunçãoCasoAfunçãoTenhaParametro)


*/



const carro = document.getElementById('carro')
const carro2 = document.getElementById('carro2')

let anima = null 
let telaMax

const init=()=>{
    carro.style="position:relative;left:0px"
    carro2.style="position:relative;left:300px"
    telaMax=window.innerWidth
    console.log(telaMax)
    anima=setInterval(move,10,1)
   
}
const move=(dir)=>{
let pos1 = 0
let pos2 =0
if(pos1 == 0){
    pos1=parseInt(carro.style.left)
    pos2=parseInt(carro2.style.left)
    pos1+=1*dir
    pos2+=1*dir
    carro.style=`position:relative;left:${pos1}px`
    carro2.style=`position:relative;left:${pos2}px`
    //console.log(pos)
    if(pos1 > telaMax){
    console.log(pos1)
    carro.style=`position:relative;left:${-200}px`
    pos1 = 0
    }
    if(pos2 > telaMax){
        carro2.style=`position:relative;left:${-200}px`
    }
    }
}

carro.addEventListener('click', entrar)
 function entrar(){
    carro.style.width = '350px'
    carro.style.height = '160px'
    carro.style.background = 'rgb(247, 255, 202)'
    clearInterval(anima)
  
}
carro.addEventListener('mouseout', sair)
function sair(){
    
    carro.style.background = 'blue'
    anima=setInterval(move,15,1)
}

carro2.addEventListener('mouseenter', entrar2)
 function entrar2(){
    carro2.style.width = '350px'
    carro2.style.height = '160px'
    carro2.style.background = 'rgb(247, 255, 202)'
    clearInterval(anima)
  
}
carro2.addEventListener('mouseout', sair2)
function sair2(){
    
    carro2.style.background = 'blue'
    anima=setInterval(move,15,1)
}
window.onload=init