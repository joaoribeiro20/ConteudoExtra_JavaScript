/* let input = document.querySelector('input').value

console.log(input.checked)


function teste(){
    console.log('a vida e sem graça')
} */let botoes = document.getElementsByName("mybuttons");
let i = 0
function checar()
{
     /* console.log("Escolheu: " + botoes[0].checked)
     console.log("Escolheu: " + botoes[1].checked)
     console.log("Escolheu: " + botoes[2].checked)
     console.log("Escolheu: " + botoes[3].checked)
     console.log("Escolheu: " + botoes[4].checked)
     */
    for (i; i<botoes.length; i++) {
        console.log(botoes[i].checked);
        if(botoes[2].checked == true){
            console.log('eba voce acertou')
            break
        }else if(botoes[2].checked != true){
            console.log('voce errou')
            break
        }
        
    }
} 

 
