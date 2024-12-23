var body = document.querySelector("body")
var cursor = document.querySelector(".cursor")
var h1 =   document.querySelector("h1")

body.addEventListener('mousemove' , function(move){
    cursor.style.left = move.x + "px"
    cursor.style.top = move.y + "px"
})
h1.addEventListener('mouseenter' , function(){
    cursor.style.scale = 4
})

h1.addEventListener('mouseleave' , function(){
    cursor.style.scale = 1
})