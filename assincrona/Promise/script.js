//criação da promise
//geralmente os nomes masi comum para dar aos atributos é resolve e reject, porem podemos colocar qualquer nome          resolve   reject
const myPromise = new Promise(function (deuCerto, DeuErrado) {
    const nome = `joao`
    if(nome === 'jao'){
        deuCerto('nome do usuario é joao')
    }else{
        DeuErrado('nome do usuario nao é joao')
    }
})


myPromise
.then((parametroA)=> {
    console.log(`${parametroA} primeiro cara `)
    return parametroA.toLowerCase()
})
.then((parametroB)=> {
    console.log(`${parametroB} segundo cara `)
}).catch((erro) =>{
    console.log(`algo dentro da promise deu errado `)
})

