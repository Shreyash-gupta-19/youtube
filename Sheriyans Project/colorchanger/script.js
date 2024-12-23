var btns = document.querySelectorAll("button")
var body = document.querySelector("body")

btns.forEach(function(elem){
    elem.addEventListener("click",function(){
        body.style.backgroundColor = elem.innerHTML
    })
    
})