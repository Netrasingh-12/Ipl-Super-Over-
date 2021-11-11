// const strikeButton = document.getElementById("strike");
// const resetButton  = document.getElementById("reset");
// const $team1Score =  document.getElementById("score-team1");
// const $team1Wickets =  document.getElementById("score-team1");
// const $team2Score =  document.getElementById("score-team2");
// const $team2Wickets =  document.getElementById("score-team2");

// const strikeAudio = new Audio(" http://bit.ly/so-ball-hit");
// const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

// var team1Score = 0;
// var team1Wickets = 0;
// var team2Score = 0;
// var team2Wickets = 0;
// var team1BallsFaced = 0;
// var team2BallsFaced = 0;
// var turn = 1;

// const possibleOutcomes = [0, 1, 2, 3, 4, 6, "W"];

// function gameOver (){
//     gameOverAudio.play();
//     if(team1Score > team2Score) alert("MI Wins ");
//     if(team1Score < team2Score) alert("DC Wins ");
//     if(team1Score == team2Score) alert("It's another SuperOver");

// }

// function updatesScore(){
//     $team1Score.textContent = $team1Score;
//     $team1Wickets.team1Wickets = $team1Wickets;
//     $team2Score.textContent = $team2Score;
//   $team2Wickets.team1Wickets = $team2Wickets;
// }

// resetButton.oneclick = () => {
//     window.location.reload();

// }

// strikeButton.oneclick = () => {
//     //play audio 
//     strikeAudio.pause();
//     strikeAudio.currentTime = 0;
//     strikeAudio.play();

//     //generate random strike value 
//     const randomElement = possibleOutcomes[Math.floor(Math.random)( * possibleOutcomes.length)];

//     //second team 
//     if(turn == 2 ){
//         //increase ball played 
//         team2BallsFaced++;
//         // update score
//         document.querySelector(
//         `#team2-superover div:nth-child($-{team2BallsFaced})`
//         ).textContent = randomElement;
//         //if its wicket update wicket variable
//         if(randomElement === "W"){
//         team2Wickets++;

//         }
//         else{ 
//             team2Score += randomElement;  //team2Score  =  team2Score  =  randomElement 

//         }

//         //Game over condition 
//         if(
//             team2BallsFaced === 6 ||
//             team2Wickets === 2 ||
//             team2Score > team1Score 
//         )

//         turn = 3;
//         gameOver();
//     }

// }

// //increase ball played 
// team2BallsFaced++;
// // update score
// document.querySelector(
// `#team1-superover div:nth-child($-{team2BallsFaced})`
// ).textContent = randomElement;
// //if its wicket update wicket variable
// if(randomElement === "W"){
// team1Wickets++;

// }
// else{ 
//     team2Score += randomElement;  //team2Score  =  team2Score  =  randomElement 

// }

// // team 2 chance 
// if(
//     team2BallsFaced === 6 ||
//     team2Wickets === 2 ) turn = 2; 
// {
//     
// }



// }
// updateScore();
// };
