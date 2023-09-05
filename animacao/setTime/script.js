let teste = 0

const intervalID = setInterval(myCallback, 500); 
 



function myCallback(){
    console.log(`teste${teste}`)
    teste++
    if(teste == 10){
    clearInterval(intervalID)
}
}
