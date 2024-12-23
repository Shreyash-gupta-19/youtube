var statu = document.querySelector('.box h3')
var btn = document.querySelector('.box button')
var flag = 0
btn.addEventListener('click', function(){
    if(flag == 0){
        statu.innerHTML = 'Friend'
        statu.style.color = 'green'
        btn.innerHTML = 'Remove'
        btn.style.backgroundColor = 'white'
        btn.style.color = 'black'
        btn.style.boxShadow =  '1px 0px 20px rgba(0, 0, 0, 0.488)'
        flag = 1
    }

    else{
        statu.innerHTML = 'Stranger'
        statu.style.color = 'red'
        btn.innerHTML = 'Add Friend'
        btn.style.backgroundColor = 'rgb(56, 56, 255)'
        btn.style.color = 'white'
        btn.style.boxShadow =  'none'
        flag = 0
    }
})




