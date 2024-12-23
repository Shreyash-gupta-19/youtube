var arr = [
   {
      name: 'Shreyash',
      Salary: 500000,
      age: 19,
      city: 'Bengaluru'
   },
   {
      name: "Samay",
      Salary: 400000,
      age: 20,
      city: 'Indore'
   },
   {
      name: "Prashant",
      Salary: 300000,
      age: 21,
      city: 'Bhopal'
   },
   {
      name: "Harsh",
      Salary: 200000,
      age: 21,
      city: 'Delhi'
   },
]
var sum = ` `
arr.forEach(function (elem) {
   sum = sum + `<div class="card">
        <h1>${elem.name}</h1>
        <h3>${elem.Salary}</h3>
        <h2> ${elem.age}</h2>
        <h2>y${elem.city}</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>`
})

var body = document.querySelector('body')

body.innerHTML = sum
