let areaLampada = document.querySelector('.areaLampada')
let areaBotao = document.querySelector('.areaBotao')
let body = document.querySelector('body')

let imgLampadaDesligada = document.querySelector('.areaLampada > img')
let imgBotaoLigar = document.querySelector('.areaBotao > img')


let lampadaLigada = document.createElement('img')
lampadaLigada.setAttribute('src', 'pngegg.png')
lampadaLigada.setAttribute('class', 'lampadaLigada')
let botaoDesligar = document.createElement('img')
botaoDesligar.setAttribute('src', 'power-button-icon-8369 (1).png')
botaoDesligar.setAttribute('onclick','desligar()')

imgBotaoLigar.addEventListener('click', ()=>{
    areaLampada.removeChild(imgLampadaDesligada)
    areaBotao.removeChild(imgBotaoLigar)
    areaLampada.appendChild(lampadaLigada)
    areaBotao.appendChild(botaoDesligar)
    body.style.backgroundColor = 'black'
})
function desligar(){
    areaLampada.appendChild(imgLampadaDesligada)
    areaBotao.appendChild(imgBotaoLigar)
    areaLampada.removeChild(lampadaLigada)
    areaBotao.removeChild(botaoDesligar)
    body.style.backgroundColor = 'white'
}

