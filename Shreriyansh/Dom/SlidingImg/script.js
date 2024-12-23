var body = document.querySelector("body")
var image = document.querySelector(".image")
var moveX = 0
var moveY = 0 

body.addEventListener("keydown" , function(key){
    image.style.position = "absolute"
    console.log(key.code);
    
    if(key.code == "ArrowRight"){
        if(moveX < 84){
            moveX++
            image.style.left = moveX + "%"
        }
    }
    else if(key.code == "ArrowLeft"){
        if(moveX>0){
            moveX--
            image.style.left = moveX + "%"
        }
    }
    else if(key.code == "ArrowDown"){
        if(moveY < 70){
            moveY++
            image.style.top = moveY + "%"
        }
    }

    else if(key.code == "ArrowUp"){
        if(moveY>0){
            moveY--
            image.style.top = moveY + "%"
        }
    }

    else{
        console.log("Other key press");
        
    }

    
})

