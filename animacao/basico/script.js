/* 
A função setInterval permite configurar um tempo de intervalo para chmar aquela função es espesifica
por exemplo, é como se a gente fosse no restaurante e chamsse o garsoul, porem quando ele vem ele deixa um cronometro 
com a gente, que conta um determinado tempo e depois ele volta e assim por diante 


sintaxe 
 
variavel = setInterval(função, intervaloDeTempo, parametroDaFunçãoCasoAfunçãoTenhaParametro)


*/



/* const carro = document.getElementById('carro')
const carro2 = document.getElementById('carro2')
<<<<<<< HEAD
const carro3 = document.getElementById('carro3')
=======
const carro3 = document.getElementById('carro3') */
const div = document.getElementById('divCarro')
>>>>>>> 0f364fd6b6a933520542e42ca0a709920d16164c

let anima = null 
let anima2 = null 
let anima3 = null 
let telaMax
let pos = 0


const init=()=>{
<<<<<<< HEAD
    carro.style="position:relative;left:0px"
    carro2.style="position:relative;left:300px"
    carro3.style="position:relative;left:300px"
    telaMax=window.innerWidth - 
=======
    div.style="position:relative;left:0px"

    telaMax=window.innerWidth
>>>>>>> 0f364fd6b6a933520542e42ca0a709920d16164c
    console.log(telaMax)
    anima=setInterval(move,10,2)
   
   
}
const move=(dir)=>{
if(pos <= telaMax){
    pos=parseInt(div.style.left)
    pos+=1*dir
    //console.log(`valor do pos: ${pos}`)
    div.style=`position:relative;left:${pos}px`
}else{
    pos = -600
    div.style=`position:relative;left:${pos}px`
 }
 

}

window.onload=init