document.getElementById('demo').textContent="Welcome"
// console.log(document);
// console.log('Hello guuys its javascript');

// alert('Game Over')

// confirm('Do want to continue');

// if(confirm('didi you go to market')){
//     document.getElementById('demo').textContent="you can go to Zoo"
// }
// else{
//     document.getElementById('demo').textContent="you can't go to anywhere"

// }


// prompt('Enter your name');

name1=prompt('enter your name');
if(name1){
    document.getElementById('demo').textContent='Welcome ' +name1

}
else{
    document.getElementById('demo').textContent='chose your charecter name first'

}

console.log(name1);