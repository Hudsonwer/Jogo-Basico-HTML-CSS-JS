const player = document.querySelector('.player')
console.log("Elemento player encontrado:", player);
const IF = document.querySelector('.espinho');

const pular = () => {
    player.classList.add('pular');
    setTimeout(() => {
        player.classList.remove('pular');
    } ,1000)
}

const loop = setInterval(() => {
    const posicaoIF = IF.offsetLeft;
    const posicaoPlayer = +window.getComputedStyle(player).bottom.replace('px', '');

    console.log(posicaoPlayer)
    
    if (posicaoIF <= 90 && posicaoPlayer < 95 && posicaoIF > 0){
        IF.style.animation = 'none';
        IF.style.left = `${posicaoIF}px`;

        player.style.animation = 'none';
        player.style.bottom = `${posicaoPlayer}px`;

        setTimeout(() => {
            player.src = './src/gameover.png';
            player.style.width = '100%';
            player.style.bottom = '0px';
            IF.style.left = '-90px';
        } , 1200)
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', pular)