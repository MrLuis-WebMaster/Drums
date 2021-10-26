document.addEventListener("DOMContentLoaded", function(){
    IniciarApp();        
})

function IniciarApp() {
    window.addEventListener("keydown", AudioTecla);
    window.addEventListener("keydown", AnimacionTecla)

}

function AudioTecla(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
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

