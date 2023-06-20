            //Play five rounds of rock paper scissors in dev console.
            //Break down play 1 round of RPS and repeat 5 times.
            //Pseudocode v1 for 1 round of RPS.
            //Step 1 Computer randomly chooses Rock Paper or Scissors.
            //Step 2 Ask Player for choice.
            //Step 3 Compare choices and declare winner.
            //Step 4 Add 1 point to winner
            //Pseudocode for Step 1 
                //Assign values 0 1 and 2 to rock paper and scissors respectively
                //Let computer choose random number from 0 to 2 and store in variable computerChoice
                //convert to equivalent string.
            //Pseudocode for Step 2
                //ask player for choice and store in variable playerChoice
            //Pseudocode for Step 3
                //if choices are the same declare draw
                //else if choices are not the same check ranking
                    //if playerChoice is Paper and computerChoice is Scissors declare computer win
                    //else if playerChoice is Scissors and computerChoice is Rock declare computer win
                    //else if playerChoice is Rock and computerChoice is Paper declare computer win
                    //else declare player win
            //Psuedocode for Step 4 
                //if player wins playerScore plus 1 
                //if computer wins computerScore plus 1
            //Pseudocode for 5 rounds of RPS
                //Step 1 Add 1 to roundCounter
                //Step 2 Play 1 round of RPS
                //Step 3 Check roundCounter
                    //If roundCounter is less than 5 go back to step 1
                    //else end game
                //Step 4 Compare scores
                    //if playerScore is greater than computerScore declare player win
                    //else declare computer win.                 
            //Code Start
            //Declare variables
            let playerSelection;
            let computerSelection;
            let playerScore = 0;
            let computerScore = 0;
            let roundWinner;
            let gameWinner;

            //set up UI

            const container = document.querySelector('#container');

            const roundResult = document.createElement('p')
            roundResult.classList.add("result");
            roundResult.textContent = "Pending"
            
            const scoreDisplay = document.createElement('p')
            scoreDisplay.classList.add("score");
            scoreDisplay.textContent = `Player: ${playerScore}    Computer: ${computerScore}`;

            container.appendChild(roundResult);
            container.appendChild(scoreDisplay);

            const buttonContainer = document.createElement('div')
            container.appendChild(buttonContainer);

            const rock = document.createElement('button')
            rock.setAttribute('id', 'rock');
            rock.classList.add('choicebtn');
            rock.textContent = 'ROCK!';
            rock.style.color ='dark gray';
            rock.style.backgroundColor = 'brown';

            const paper = document.createElement('button')
            paper.setAttribute('id', 'paper');
            paper.classList.add('choicebtn');
            paper.textContent = 'PAPER!';
            paper.style.color ='black';
            paper.style.backgroundColor = 'white';

            const scissors = document.createElement('button')
            scissors.setAttribute('id', 'scissors');
            scissors.classList.add('choicebtn');
            scissors.textContent = 'SCISSORS!';
            scissors.style.color ='orange';
            scissors.style.backgroundColor = 'light gray';

            buttonContainer.appendChild(rock);
            buttonContainer.appendChild(paper);
            buttonContainer.appendChild(scissors);

            const newGame = document.createElement('button')
            newGame.classList.add('restart');
            newGame.textContent = 'Start Over';
            newGame.style.color = 'cyan';
            newGame.style.backgroundColor = 'navy';
            newGame.addEventListener('click', startOver);

            const endGame = document.createElement('h4');

            //Button clicks play a round
            let btns = document.querySelectorAll('.choicebtn');
            btns.forEach((btn) => {
                playerSelection=btn.id
                btn.addEventListener('click', playRound);
            });


            
            function getComputerChoice() {
                let answer = Math.ceil(Math.random()*3)
                if (answer === 1){
                    computerSelection = 'rock';
                } else if (answer === 2){
                    computerSelection = 'paper';
                } else if (answer === 3){
                    computerSelection = 'scissors';
                }
                return computerSelection;
            }

            function findWinner() {
                if (playerSelection === computerSelection){
                    roundWinner = 'no one';
                } else if (playerSelection === 'rock' && computerSelection === 'paper'){
                    roundWinner = 'computer';
                } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
                    roundWinner = 'computer';
                } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
                    roundWinner = 'computer';
                } else if (playerSelection === 0){
                    alert("Try Again!");
                    getPlayerChoice();
                    findWinner();
                } else roundWinner = 'player';
                //console.log(roundWinner + ' wins the round');  if choice other than rps is made console prints twice.
                // removed and placed in play round after this function
            }

            function updateScore(){
                if (roundWinner === 'computer'){
                    computerScore +=1;
                } else if (roundWinner === 'player') {
                    playerScore +=1;
                };
                scoreDisplay.textContent = `Player: ${playerScore}    Computer: ${computerScore}`;
                scoreDisplay.parentNode.replaceChild(scoreDisplay, scoreDisplay);
            }

            function displayResult(){
                roundResult.textContent = `${roundWinner} won the round!`
                roundResult.parentNode.replaceChild(roundResult, roundResult);
            }

            function startOver(){
                playerScore = 0;
                computerScore = 0;
                roundWinner= 'no one';
                updateScore();
                container.removeChild(endGame)
                container.appendChild(buttonContainer)
                container.removeChild(newGame);
            }

            function endIt(){
                if (gameWinner === 'player'){
                    endGame.textContent = "GAME OVER! You win nothing!";
                } else if (gameWinner === 'computer'){
                    endGame.textContent = "GAME OVER! Skynet has become self-aware. GOODBYE...";
                };

                container.appendChild(endGame);
                container.removeChild(buttonContainer);
                container.appendChild(newGame);
            }

            function endCheck(){
                if (playerScore === 5){
                    gameWinner = "player";
                    endIt();
                } else if (computerScore === 5){
                    gameWinner = "computer";
                    endIt();
                }
            }

            function playRound(){
                getComputerChoice();
                findWinner();
                updateScore();
                displayResult();
                endCheck();
                //console.log(roundWinner + ' wins the round') not needed with below,
                //moved to game function below playRound() call
                return roundWinner  + ' wins the round';
            }


            //Start 5 rounds 

            // function game(){
            //     playerScore = 0;
            //     computerScore = 0;
            //     for (let i=0; i<5; i++){
            //         playRound();
            //         console.log(roundWinner + ' wins the round');
            //     }
            //      let gameWinner = (playerScore>computerScore) ? 'player' : 
            //      (playerScore<computerScore) ? 'computer' : 'no one';
            //      return gameWinner + ' wins the game! Congratulations';
            // }