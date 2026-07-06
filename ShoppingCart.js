let cart = [
{ name:"Mouse", price:500, qty:2 },
{ name:"Keyboard", price:1000, qty:1 },
{ name:"Monitor", price:10000, qty:1 }
];

function totally(cart){
   return cart.reduce((acc, val) => acc + (val.price * val.qty), 0);
}

console.log(totally(cart));
