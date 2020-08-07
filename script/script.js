let choice = ["Rock", "Paper", "Scissors"];
let win=0;
let lose=0;

const buttons = document.querySelectorAll('button');
const dashboard = document.querySelector('span#dashboard');
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        playRound(button.innerText, computerplay());
    })
});

function computerplay(){
    return choice[Math.floor(Math.random()*3)];
}

function findWinner(){
    if(win==5){
        dashboard.innerText = `You have 5 point,
        You win.`;
        win=lose=0;
    }else if(lose==5){
        dashboard.innerText = `Computer have 5 point,
        You lose.`;
        win=lose=0;
    }
    
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "Rock"||playerSelection == "Paper"||playerSelection == "Scissors"){
        let result = playerSelection[0]+computerSelection[0];
        switch (result){
            case 'RS':
            case 'SP':
            case 'PR':
                win++;
                dashboard.innerText = `${playerSelection} vs ${computerSelection},
                You win!!!
                score win:${win} lose:${lose}`;
                break;
            case 'RP':
            case 'SR':
            case 'PS':
                lose++;
                dashboard.innerText = `${playerSelection} vs ${computerSelection},
                You lose!!!
                score win:${win} lose:${lose}`;
                break;
            default:
                dashboard.innerText = `${playerSelection} vs ${computerSelection},
                Draw try again.
                score win:${win} lose:${lose}`;
        }
        findWinner();
    }
}