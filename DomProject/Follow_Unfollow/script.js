var istatus = document.querySelector("h5")

var addfriend = document.querySelector(".button")

var check = 0

addfriend.addEventListener("click",function(){
    if(check === 0){
     istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    addfriend.innerHTML = "Unfollow"

    check = 1
    }
    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        addfriend.innerHTML = "Follow"

        check = 0
    }
    
})