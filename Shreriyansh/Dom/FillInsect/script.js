var btn = document.querySelector('button')
var body = document.querySelector('body')
var rotate = 0

btn.addEventListener('click', function(){

    var idx = Math.floor(Math.random()*4)
    var left = Math.floor(Math.random()*95)
    var top = Math.floor(Math.random()*95)
    var image = ["https://pngimg.com/uploads/cricket_insect/cricket_insect_PNG5.png" , "https://freepngimg.com/thumb/bug/32-bug-png-image.png" , "https://cdn.pngedits.com/uploads/thumbnail/insect-bug-transparent-png-free-download-116249265952qcz0onudy.png" , "https://freepngimg.com/download/bug/31-black-bug-png-image.png"]
    var img = document.createElement('img')
    img.style.width = "70px"
    img.style.position ="absolute"
    img.style.left = left + "%"
    img.style.top = top + "%"
    
    var setImg = img.setAttribute("src", image[idx])
    body.appendChild(img)
})