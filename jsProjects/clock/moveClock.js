const hourHand = document.querySelector(".hour-hand")
const minuteHand = document.querySelector(".minute-hand")
const secondHand = document.querySelector(".second-hand")
console.log(hourHand,minuteHand,secondHand)
const date = new Date()
let second = date.getSeconds();
let hour = date.getHours();
let minute = date.getMinutes();
let minOffset = 90,hourOffset = 90, secondOffset = 90
function mover(){
    let secondMove = second*6 + secondOffset
    let hourMove = hour*30 + hourOffset
    let minuteMove = minute*6 + minOffset
    secondHand.style.transform = `rotate(${secondMove}deg)`
    minuteHand.style.transform = `rotate(${minuteMove}deg)`
    hourHand.style.transform = `rotate(${hourMove}deg)` 
    second += 1
    if(second == 60){
        second = 0
        minute+=1
        secondOffset += 360
        if(minute == 60){
            minute  = 0
            hour+=1
            minOffset += 360
            if(hour == 12){
                hour = 0
                hourOffset += 360
            }
        }
    }

}
setInterval(mover,1000)