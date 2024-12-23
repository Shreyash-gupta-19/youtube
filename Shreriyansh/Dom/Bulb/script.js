var bulb = document.querySelector('.bulb')
var btn = document.querySelector('button')

var flag = 0

btn.addEventListener('click', function () {
    if (flag == 0) {
        bulb.style.backgroundColor = 'yellow'
        bulb.style.boxShadow = '1px 0px 100px yellow'
        bulb.style.border = 'none'
        btn.innerHTML = 'OFF'
        flag = 1
    }
    else{
        bulb.style.backgroundColor = 'white'
        bulb.style.boxShadow = 'none'
        btn.innerHTML = 'ON'
        flag = 0
    }
})