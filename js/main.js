let boxes = document.querySelectorAll(".Box");
let Reset_btn = document.querySelector(".Reset-Btn");
let Winner_box = document.querySelector(".winner_box");
let newGame_btn = document.querySelector(".New_game_btn");
let mssg = document.querySelector("#msg");
let cnt = 0;

let turn_0 = true;

const WinArr = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
]

const startOver = () => {
    turn_0 = true;
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
    cnt = 0;

    Winner_box.classList.add("hide");
}

const disableAll = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}



boxes.forEach((box) => {
    box.addEventListener("click",() => {
        cnt++;
        console.log(cnt);
        if(turn_0){
            box.innerText = "O";
            turn_0 = false;
        }
        else{
            box.innerText = "X";
            turn_0 =  true;
        }
        
        box.disabled = true;
        
        checkWinner();
    })
})


const checkWinner = () => {
    for(let i = 0;i<8;i++){
        let Fst = boxes[WinArr[i][0]].innerText;
        let scnd = boxes[WinArr[i][1]].innerText;
        let thrd = boxes[WinArr[i][2]].innerText;
        
        if(Fst !== "" && scnd !== "" && thrd !== ""){
            if(Fst === scnd && scnd === thrd){
                mssg.innerText = `The winner is ${Fst}`;
                Winner_box.classList.remove("hide");
                disableAll();
                return;
            }
        }
    }

    if(cnt  === 9){
        mssg.innerText = `It's A Draw`;
        Winner_box.classList.remove("hide");
        disableAll();
        return;
    }
}

Reset_btn.addEventListener("click",startOver);

newGame_btn.addEventListener("click",startOver);
