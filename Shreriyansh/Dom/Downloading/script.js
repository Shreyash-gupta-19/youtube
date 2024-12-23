var loading = document.querySelector(".loading")
var h2 = document.querySelector("h2")
var btn = document.querySelector("button")
var count = Math.floor(Math.random()*100)
console.log(count);


var growth = 0;


btn.addEventListener('click', function () {
    btn.style.pointerEvents = "none";
})

btn.addEventListener('click', function () {
    
    var loadingInterval = setInterval(function () {
        growth++;
        h2.innerHTML = growth + "%"
        loading.style.width = growth + "%"
    }, count)

    setTimeout(function () {
        clearInterval(loadingInterval);
        btn.style.pointerEvents = "none";
        btn.style.opacity = 0.4
        btn.innerHTML = "Downloaded"
    }, count*100)
})