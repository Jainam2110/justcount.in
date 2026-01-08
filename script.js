let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const restartBtn = document.getElementById("restart");

increaseBtn.addEventListener("click", () => {
    count++;
    countDisplay.innerText  = count;

})

decreaseBtn.addEventListener("click", ()=>{
    if(count!=0){
        count--;
    }
    countDisplay.innerText = count;
})

restartBtn.addEventListener("click", ()=>{
    count = 0;
    countDisplay.innerText = count;
})
