let boxes = document.querySelectorAll(".box");
let resetgames = document.querySelector("#rgame");
let newgame = document.querySelector("#ngame");
let message = document.querySelector("#msg");
let msgbox = document.querySelector(".msg-box");
let score1Display = document.querySelector("#score1");
let score2Display = document.querySelector("#score2");
let turn0 = true;

let scores = { X: 0, O: 0 };

let winpossible = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false; 
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        Cwinner();
    });
});

let showWinner = (winner) => {
    message.innerText = `WINNER IS ${winner} `;
    msgbox.classList.remove("hide");
    disablebox();
    updateScore(winner);
}

let resetgame = () => {
    turn0 = true;
    enablebox();
    msgbox.classList.add("hide");
}

let disablebox = () => {
    boxes.forEach(box => box.disabled = true);
}

let enablebox = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
}

let Cwinner = () => {
    for (let possible of winpossible) {
        let [a, b, c] = possible;
        let pos1 = boxes[a].innerText;
        let pos2 = boxes[b].innerText;
        let pos3 = boxes[c].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
}

let updateScore = (winner) => {
    scores[winner]++;
    if (winner === "X") {
        score1Display.innerText = scores[winner];
    } else {
        score2Display.innerText = scores[winner];
    }
}

newgame.addEventListener("click", resetgame);
resetgames.addEventListener("click", () => {
    resetgame();
    scores = { X: 0, O: 0 };
    score1Display.innerText = scores.X;
    score2Display.innerText = scores.O;
});
