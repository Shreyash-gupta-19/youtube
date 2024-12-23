var box = document.querySelector("div")
var btn = document.querySelector("button")

btn.addEventListener("click",  () => {
    var clr1 = Math.floor(Math.random()*255)
    var clr2 = Math.floor(Math.random()*255)
    var clr3 = Math.floor(Math.random()*255)

    box.style.backgroundColor = `rgb(${clr1},${clr2},${clr3})`
    box.style.boxShadow =  `5px 0px 100px rgba(${clr1},${clr2},${clr3}, 0.734)` 
    btn.style.color = `rgb(${clr1},${clr2},${clr3})`
})