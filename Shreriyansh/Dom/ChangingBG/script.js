var btns = document.querySelectorAll("button")
var body = document.querySelector("body")
btns.forEach(function(btn){
    btn.addEventListener("click" , function(){
        body.style.backgroundColor = btn.innerHTML
        btn.style.backgroundColor = "white"
        btn.style.border = "none"
        btn.style.color = btn.innerHTML
    })
    
})