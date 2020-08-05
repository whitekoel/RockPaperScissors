let choice = ["rock", "paper", "scrissors"];
let win, lose;
function computerplay(){
    return choice[Math.floor(Math.random()*3)];
}

function playerPlay(){
    let playerSelection = prompt("Select rock ,paper or scrissors.").toLowerCase();
    return playerSelection;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock"||playerSelection == "paper"||playerSelection == "scrissors"){
        console.log("You choose "+playerSelection+".");
        let result = playerSelection[0]+computerSelection[0];
        switch (result){
            case 'rs':
            case 'sp':
            case 'pr':
                win++;
                console.log("You win! "+playerSelection+" beats "+computerSelection);
                break;
            case 'rp':
            case 'sr':
            case 'ps':
                lose++;
                console.log("You lose! "+computerSelection+" beats "+playerSelection);
                break;
            default:
                playerSelection = prompt("You draw, Please select rock ,paper or scrissors again.");
                playRound(playerSelection.toLowerCase(), computerplay());
        }
    }else{
        playerSelection = prompt("Input wrong, Please select rock ,paper or scrissors again.");
        return playRound(playerSelection.toLowerCase(), computerplay());
    }
}

function game(){
    win = 0;
    lose = 0;
    for(i=0; i<5; i++){
        playRound(playerPlay(), computerplay());
    }
    if(win > lose){
        console.log("Score Player : "+win+" | computer : "+lose+" You win!");
    }else{
        console.log("Score Player : "+win+" | computer : "+lose+" You lose!");
    }
}