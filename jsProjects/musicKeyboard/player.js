// we are going to apply this in div.keys that can listen to each even bubbled from childs
window.addEventListener("keydown",(e)=>{
    let code = e.key.charCodeAt(0)
    let lowerCode = code-32;
    console.log(code)
    let elm = document.querySelector(`.keys div[data-key="${code}"]`) ||
        document.querySelector(`.keys div[data-key="${lowerCode}"]`)
    if(!elm) return
    console.log(elm)
    elm.classList.add("playing")
    // now playing corresponding sound 
    let sound = document.querySelector(`audio[data-key="${code}"]`) || 
        document.querySelector(`audio[data-key="${lowerCode}"]`)
    console.log(sound)
    sound.currentTime = 0 // whenever key pressed it is going to start from begining
    sound.play()
})  
// removing transition class (playing)
function removeTransition(e){
    if(e.propertyName !== 'transform') return
    this.classList.remove('playing')
}
const transKeys = document.querySelectorAll(".key")
transKeys.forEach(key=>{
    key.addEventListener("transitionend",removeTransition)
})
