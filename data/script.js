const data = new Date()

let dia= data.getDay()
let mes = data.getMonth()
let ano = data.getFullYear()
console.log(`${dia} - ${mes} - ${ano}`)

let dataC = data.getDate()
console.log(dataC)

let segundo = data.getSeconds()
console.log(`segundo: ${segundo}`)
let minuto = data.getMinutes()
console.log(`Minutos: ${minuto}`)
let hora = data.getHours()
console.log(`hora: ${hora}`)
let horario = data.getTime()
console.log(`horario: ${horario}`)

let timeZone = data.getTimezoneOffset()
console.log(timeZone)
