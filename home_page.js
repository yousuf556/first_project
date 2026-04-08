let grid=["","","","","","","","",""];  // 3x3 grid represented as a flat array
let turn = "X";   // X starts first
let gameOver = false;
let openbtn = document.getElementById("openbtn");
let modal = document.getElementById("modal");
let closebtn = document.getElementById("closebtn");

function play(box,index) {

    // stop if box already clicked
    if (box.innerHTML !== "" || gameOver) {
        return;
    }

    grid[index]=turn;

    // place X or O
    if (turn === "X") {
        box.innerHTML = "<img class='game_icon' src='cross.png'>";
        turn = "O";
    } else {
        box.innerHTML = "<img class='game_icon' src='circle.png'>";
        turn = "X";
    }
    checkWin();

}
function checkWin() {
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // columns
        [0,4,8], [2,4,6]           // diagonals
    ];

    for(let pattern of winPatterns){

        let a = pattern[0];
        let b = pattern[1];
        let c = pattern[2];

        if(
            grid[a] !== "" &&
            grid[a] === grid[b] &&
            grid[a] === grid[c]

        )

        {
            alert(grid[a]+"wins!");
            gameOver=true;
            return;

        }
    }
    //check draw
    if(!grid.includes("")){
        alert("its adraw!");
        gameOver=true

    }
    
}


// grid = ["","","","","","","","",""]; 
// turn = "X"; 
// gameOver = false;

// let boxes = document.getElementsByClassName("ticktackbox");

// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].innerHTML = ""; 
// }


openbtn.onclick = function() {
    modal.style.display = "block";
};

closebtn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};