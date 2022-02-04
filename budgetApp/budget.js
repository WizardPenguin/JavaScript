let error = "This is error generated"
let icons = `<i class="fas fa-edit"></i>
<i class="far fa-trash-alt"></i>`
const buttons = {
    calculate : document.getElementsByClassName("entry-btn")[0],
    addExpence : document.getElementsByClassName("expences-btn")[0],
}
const inputs = {
    budget : document.getElementById("budget"),
    expenceName : document.getElementById("expenceName"),
    expenceAmount : document.getElementById("expenceAmount"),
}
const outputs = {
    budget: document.querySelector(".budget .number"),
    expence: document.querySelector(".expence .number"),
    balance: document.querySelector(".balance .number"),
}
const lists = {
    title: document.getElementsByClassName("title-list")[0],
    value: document.getElementsByClassName("value-list")[0],
    button: document.getElementsByClassName("button-list")[0]
}
let budget = 0
let expence = 0
let balance = 0

// defining  functions 


buttons.calculate.addEventListener("click",e=>{
    e.preventDefault()
    let txt = inputs.budget.value
    if(txt.length == 0) txt= "0"
    inputs.budget.value = ""
    inputs.budget.removeAttribute("placeholder")
    if(isNumber(txt)){
        outputs.budget.textContent = txt;
        balance -= budget // remove previous amount
        budget = +txt
        balance += budget // add new amount 
        outputs.balance.textContent = balance
    }
    else{
        inputs.budget.setAttribute("placeholder","invalid number")
    }
})
buttons.addExpence.addEventListener("click",e=>{
    e.preventDefault()
    let name = inputs.expenceName.value
    let amount = inputs.expenceAmount.value
    inputs.expenceAmount.removeAttribute("placeholder");
    inputs.expenceName.removeAttribute("placeholder")
    if(name.length == 0){
        inputs.expenceName.setAttribute("placeholder","give Name")
        return
    }
    if(amount.length == 0){
        inputs.expenceAmount.setAttribute("placeholder","enter amount")
        return
    }
    inputs.expenceName.value = ""
    if(isNumber(amount)){
        inputs.expenceAmount.value = ""
        expence += +amount
        balance -= +amount
        outputs.expence.textContent = expence
        outputs.balance.textContent = balance
        // now add these elements in list 
        let nameElement = document.createElement("li")
        nameElement.textContent = name
        let buttonElement = document.createElement("li")
        buttonElement.innerHTML = icons
        let amountElement = document.createElement("li")
        amountElement.textContent = amount
        lists.title.append(nameElement)
        lists.value.append(amountElement)
        lists.button.append(buttonElement)
    }
    else{
        inputs.expenceName.setAttribute("placeholder","invalid number")
    }
})
lists.button.addEventListener("click",e=>{
    e.preventDefault()
    let index = 0
    console.log(index)
    let value = lists.value.children[index].textContent
    if(e.target.classList.contains("fas")){
        for(let elm of lists.button.children){
            if(elm.firstElementChild == e.target){
                break
            }
            index += 1
        }
        let title = lists.title.children[index].textContent
        inputs.expenceAmount.value = value
        inputs.expenceName.value = title
    }
    else{
        for(let elm of lists.button.children){
            if(elm.children[1] == e.target){
                break;
            }
            index += 1
        }
    }
    lists.button.children[index].remove()
    lists.title.children[index].remove()
    lists.value.children[index].remove()
    expence += -value
    balance += +value
    outputs.balance.textContent = balance
    outputs.expence.textContent = expence
})
const isNumber = txt=>{
    for(let char of txt){
        if(char < '0' || char > '9'){
            return false
        }
    }
    return true
}