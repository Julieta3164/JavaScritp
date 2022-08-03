let face = 0;
let cross = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button"); 

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-face 10s forwards";
        }, 100);
        face++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-cross 10s forwards";
        }, 100);
        cross++;
    }
    setTimeout(updateStats, 10000);
    disableButton();
});

function updateStats (){
    document.querySelector("#face-count").textContent = `Minnie: ${face}`;
    document.querySelector("#cross-count").textContent = `Mickey: ${cross}`;
}

resetBtn.addEventListener("click",() =>{
    coin.style.animation="none";
    face = 0;
    cross = 0;
    updateStats();
});
