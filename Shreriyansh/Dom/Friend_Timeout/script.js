var btn = document.querySelector("#btn")
var h = document.querySelector("h2")

var flag = 0
btn.addEventListener('click', function () {
    if(flag == 0){
        btn.innerHTML = "Send"
    h.innerHTML = "Request Send..."
    h.style.color = "yellow"
    btn.style.backgroundColor = "grey"
    btn.style.color = "black"

     setTimeout(function () {
        btn.innerHTML = "Remove"
        h.innerHTML = "Friend"
        h.style.color = "green"
        btn.style.backgroundColor = "black"
        btn.style.color = "white"
    }, 3000)

    flag = 1
    }

    else{
        btn.innerHTML = "Add Friend"
        h.innerHTML = "Stranger" 
        h.style.color = "red"
        btn.style.backgroundColor = "green"
        btn.style.color = "white"

        flag = 0
    }
})