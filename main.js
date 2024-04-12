var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("cli ck", selectChoice);
        document.getElementById("choices").append(choice);
        
    }
}

function selectChoice() {
  you = this.id;
  document.getElementById("your-choice").src = you + ".png";
}

