var arr = [{
    name: 'Samay',
    price: 50000,
    quantity:43

},
{
    name: 'Shreyash',
    price: 70000,
    quantity:64

}, {
    name: 'prashant',
    price: 10000,
    quantity:54

}]

var total = 0
arr.forEach(function (elm){
    total += elm.price * elm.quantity;
})

console.log(total);
