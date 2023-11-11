let video = document.querySelector('video');

let play = document.getElementById('play');
let pausa = document.getElementById('pausa');

play.addEventListener('click', e =>{
    video.play();
});

pausa.addEventListener('click', e =>{
    video.pause();
});
