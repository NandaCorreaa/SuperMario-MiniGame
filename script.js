const mario = document.querySelector('.mario');
const obstaculo = document.querySelector('.obstaculo');
const gameOver = document.querySelector('.gameOver');

const pulo = () => {
    mario.classList.add('pulo'); // Adiciona a class na imagem quando a gente apertar a tecla. Nesse caso, adiciona a class 'pulo' que é a animação que faz o Mario pular.
    document.getElementById('jumpSound').volume = 0.5; // Reproduz o som
    jumpSound.play();

    setTimeout(() => { // Aqui estou usando o setTimeout(função, tempo) para remover a class depois da animação acontecer. Fiz isso para a animação poder acontecer novamente.
        mario.classList.remove('pulo')
    }, 500);
}

const loop = setInterval(() => {

    const obstaculoPosition = obstaculo.offsetLeft; //Para pegar o valor do left
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '') // Para pegar o valor do bottom já que não existe a propriedade offsetBottom

    if (obstaculoPosition <= 190 && obstaculoPosition > 0 && marioPosition < 122){
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obstaculoPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './Assets/game-over.png'
        mario.style.width = "120px"
        mario.style.marginLeft = "120px"

        gameOver.style.display = 'flex';

        const somGameOver = new Audio('./Assets/gameOverMusica.mp3');
        somGameOver.play();

        clearInterval(loop) //Para quando acabar o jogo o loop parar de rodar
    }}, 10)

document.addEventListener('keydown', pulo) //EventListener- Executador de eventos. Keydown é para executar uma função ao apertar qualquer tecla do teclado.