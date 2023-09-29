var setaD = window.document.getElementById("setaD")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaE = window.document.getElementById("setaE")

function RolaParaDireita() {
    
    Samantha.style = "display:flex"
    Leonardo.style = "display:none"
    setaD.style = "display:none"
    setaE.style = "display:flex"
}

function RolaParaEsquerda() {
    
    Leonardo.style = "display:felx"
    Bruna.style = "display:flex"
    Samantha.style = "display:none"
    setaD.style = "display:flex"
    setaE.style = "display:none"
    
}




