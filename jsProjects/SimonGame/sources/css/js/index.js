const BEGIN = 0,END = 1,RUNNING = 2,OUTPUT = 3
const cache = [],mapping = {"red": 0,"green": 1,"blue": 2,"yellow": 3,"0": "red","1": "green","2": "yellow","3": "blue"}
let state = BEGIN,level = 0,currentId = 0
document.addEventListener("keypress",function(){
    if(state == END || state == BEGIN){
        cache.length = 0
        level = 0
        $("h1").text("LEVEL : " + 0)
        showColor(); 
        console.log("startingGame")
        state = RUNNING
    }
})
document.querySelectorAll(".col").forEach(elm=>{
    // console.log("adding Even Listner")
    elm.addEventListener("click",function(e){
        // console.log("clicked",e.target)
        if(e.target.classList.contains("box") && state == RUNNING ){
            // console.log("it was runnig")
            console.log(mapping[cache[currentId]])
            if(mapping[cache[currentId]] != e.target.id){
                // console.log("game end")
                state = END
                $("h1").text("You Lost, Click any key to restart the gain")
                toggler(document.body,"game-over",300)
            }
            else{
                console.log("correct")
                currentId += 1 
                if(currentId == cache.length){
                    level += 1; 
                    $("h1").text("LEVEL : " + level)
                    state = OUTPUT; 
                    showColor();  
                }
            }
        }
        // console.log("normal Stuff")
        toggler(e.target,"clicked-"+e.target.id,100)
    })
})
function showColor(){
    let n = (Math.random()*4)>>>0  // make it integer
    // console.log("random number generated is ",n);
    currentId = 0
    cache.push(n)
    // console.log(document.getElementById(mapping[n]))
    toggler(document.getElementById(mapping[n]),"show",300)
    state = RUNNING
}
function toggler(elm,className,interval = 500){
    // console.log("toggling",className)
    elm.classList.add(className)
    setInterval(function(){
        elm.classList.remove(className);
    },interval)
}