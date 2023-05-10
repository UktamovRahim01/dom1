let ups = document.querySelector(`.up`)
let nums = document.querySelector(`.num`)
let downs = document.querySelector(`.down`)
let rest = document.querySelector(`.res`)
let rand = document.querySelector(`.ran`)

ups.onclick = () => {
    nums.innerHTML++
    if (nums.innerHTML<0) {
        nums.classList.add(`hjk`)
    }
    else if (nums.innerHTML>=0) {
        nums.classList.remove(`hjk`)
    }
}
downs.onclick = () => {
    nums.innerHTML--
    if (nums.innerHTML<0) {
        nums.classList.add(`hjk`)
    }
    else if (nums.innerHTML>=0) {
        nums.classList.remove(`hjk`) 
    }
}
rest.onclick = () => {
    nums.innerHTML = `0`
    nums.classList.remove(`hjk`) 

}
rand.onclick = () => {
nums.innerHTML = Math.round((Math.random()*200)-100)
if (nums.innerHTML<0) {
    nums.classList.add(`hjk`)
}
else if (nums.innerHTML>=0) {
    nums.classList.remove(`hjk`)
    
}
}


    







