// we need to listen to input event to get any changes happening to input fiends
// getting access to variable names
// these are defined as properties of element in which they are created

document.addEventListener("input",(e)=>{
    let target = e.target
    console.log(target,target.dataset,target.value,target.name)
    let suff = target.dataset.type || ""
    document.documentElement.style.setProperty(`--${target.name}`,target.value + suff)
})