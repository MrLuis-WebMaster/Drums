document.addEventListener("DOMContentLoaded", function(){
    IniciarApp();        
})

function IniciarApp() {
    window.addEventListener("touchstart",AudioTecla2)
    window.addEventListener("touchstart",AnimacionTecla2)
    window.addEventListener("keydown", AudioTecla);
    window.addEventListener("keydown", AnimacionTecla)
}

function AudioTecla(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}
function AudioTecla2(e) {
    const audio2 = document.querySelector(`audio[data-key="${e.path[1].dataset.key}"]`);
    if(!audio2) return;
    audio2.currentTime = 0;
    audio2.play();
}
function AnimacionTecla2(e) {
    const key = document.querySelector(`.key[data-key="${e.path[1].dataset.key}"]`);
    if(!key) return;
    key.classList.add("playing");

    const keys = document.querySelectorAll(".key");
    keys.forEach( key => key.addEventListener("transitionend",RemoveTransition))
    
}
function AnimacionTecla(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!key) return;
    key.classList.add("playing");

    const keys = document.querySelectorAll(".key");
    keys.forEach( key => key.addEventListener("transitionend",RemoveTransition))
    
}
function RemoveTransition (e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing")

}

