// setTimeOut(função, tempo ms)
setTimeout(function(){
    console.log("tempo esgotado")
}, 1000)

// setInterval(função, tempo ms)
let fps = Math.round ( Math.random() *30)

const intervalo1 = setInterval(function() {
    console.clear() // limpar a tela
    console.log("fps: " + fps)
    fps = fps + 1
}, 1000)

setTimeout(function (){
    clearInterval(intervalo1)
    console.log("conexão encerrada")
}, 5000)