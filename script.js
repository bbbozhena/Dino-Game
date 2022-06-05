const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener ('keydown', function (event) {
    jump();
});

function jump () {
   if (dino.classList != 'jump') {
       dino.classList.add ('jump')
   }
   setTimeout(function() {
    dino.classList.remove('jump')
   }, 300)
}
let isAlive = setInterval(function () {
    let dinoTop = parseInt (window.getComputedStyle(dino).getPropertyValue('top'));
    let cacrusLeft = parseInt (window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cacrusLeft < 50 && cacrusLeft > 0 && dinoTop >=140) {
        alert ('Game over!!')
    }
}, 10)
