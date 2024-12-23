var process = document.querySelector(".process")
var button = document.querySelector("button")
var h1 = document.querySelector("h1")

var grow = 0
button.addEventListener("click",function(){
    var growthInterval = setInterval(function(){
        grow++

        h1.innerHTML = grow + "%"
        process.style.width = grow + "%"
    },50)
    
    setTimeout(function(){
        clearInterval(growthInterval)
        button.innerHTML = "Downloded"
        button.style.opacity = "0.6"
        button.style.pointerEvents = 'none'
    },5000)
})