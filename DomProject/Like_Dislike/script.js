var imgame = document.querySelector(".img")

var dil = document.querySelector("i")

imgame.addEventListener("dblclick",function(){
    dil.style.transform = "translate(-50%, -50%) scale(1)"
    setTimeout(function(){
        dil.style.transform = "translate(-50%, -50%) scale(0)"
    },650)
})