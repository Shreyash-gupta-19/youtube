var arr = [
    {
        dp: "https://plus.unsplash.com/premium_photo-1668319915384-3cccf7689bef?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://plus.unsplash.com/premium_photo-1668319915454-ee79c9f81f5e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "RahulVerma"

    },

    {
        dp: "https://images.unsplash.com/photo-1670885192882-45e27afb4294?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1734366965586-dc4155c0b9b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "PriyaLovesTravel"
    },

    {
        dp: "https://images.unsplash.com/photo-1730941343980-5d81ce7c768b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1734299421690-13be495151c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "AmitKulkarni"
    },

    {
        dp: "https://plus.unsplash.com/premium_photo-1668319915384-3cccf7689bef?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://plus.unsplash.com/premium_photo-1668319915454-ee79c9f81f5e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Sneha_Artistry"
    },

    {
        dp: "https://images.unsplash.com/photo-1670885192882-45e27afb4294?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1734366965586-dc4155c0b9b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "VikramTheWanderer"
    },

    {
        dp: "https://images.unsplash.com/photo-1730941343980-5d81ce7c768b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1734299421690-13be495151c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Anjali.Dreamer"
    }
]
var All_story = document.querySelector('#All-story')
var sum = ''

arr.forEach(function(elem, idx){
    sum += `<div class="story">
                <img id = ${idx} src=${elem.dp}
                    alt="">
                <h3>${elem.username}</h3>
            </div>`
})

All_story.innerHTML = sum
var screen = document.querySelector('#fullScreen')
var nameee = document.querySelector('.profile h2')
var picc = document.querySelector('.profile img')
var growth = document.querySelector('.growth')

All_story.addEventListener("click" ,function(dets){
    var grow = 0
    var king = arr[dets.target.id].story
    var king1 = arr[dets.target.id]
    screen.style.display = 'block'
    screen.style.backgroundImage = `url(${king})`
    nameee.innerHTML = king1.username 
    picc.setAttribute('src', king1.dp)

    var intern = setInterval(function(){
        grow++
        growth.style.width = grow + "%"
    },40)

    setTimeout(function(){
        clearInterval(intern)
        screen.style.display = 'none'
    },4000)
})

