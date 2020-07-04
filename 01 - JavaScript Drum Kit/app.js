const keys = document.querySelectorAll(".key");

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(audio==null) return;
    audio.currentTime=0;
    audio.play();
    if(key == null) return;
    key.classList.add("playing");
}

function removeTransition(e){
    if(e.propertyName==="transform"){
        this.classList.remove("playing");
    }
}

function playTune(e){
    const audio = document.querySelector(`audio[data-key="${e.path[1].dataset.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.path[1].dataset.key}"]`);
    if(audio==null) return;
    audio.currentTime=0;
    audio.play();
    if(key == null) return;
    key.classList.add("playing");
}

keys.forEach((key)=>{
    key.addEventListener('transitionend',removeTransition);
    key.addEventListener('click',playTune);
});
window.addEventListener('keydown',playSound);