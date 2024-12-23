var body = document.querySelector('body')
var arr = [{
    name : 'Samay',
    age : 55,
    city: 'Bhopal'
}, {
    name : 'Shreyash',
    age : 5,
    city: 'Road_Pe'
}, {
    name : 'Prashant',
    age : 8,
    city: 'Ganda Nala'
}]
var concetinent = ''
arr.forEach(function(elem){
    concetinent += `<div class="card">
        <h1>${elem.name}</h1>
        <h4>${elem.age}, ${elem.city}</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, fugit.</p>
    </div>`
})
body.innerHTML = concetinent