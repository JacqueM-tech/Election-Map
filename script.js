var createPolitician = function(name, partyColor) {
  
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  
  politician.tallyUpTotalVotes = function () {
  this.totalVotes = 0;
  for (var i = 0; i < this.electionResults.length; i++){
  this.totalVotes = this.totalVotes + this.electionResults[i];
   }
     
 };
  
  return politician;

};

var joe = createPolitician("Joe Biden", [0, 0, 255]);
var donald = createPolitician("Donald Trump",[255, 0, 0]);

joe.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 
                              11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 
                              2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 7, 3, 2, 8, 
                              21, 3, 2, 11, 1, 3, 7, 2];

donald.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 3, 0, 
                              6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 
                              2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 
                              2, 11, 2, 3, 1];

joe.electionResults[9] = 1;
donald.electionResults[9] = 28;

joe.electionResults[4] = 17;
donald.electionResults[4] = 38;

joe.electionResults[43] = 11;
donald.electionResults[43] = 27;

console.log(joe.electionResults);
console.log(donald.electionResults);

var setStateResults = function(state) {
  
  theStates[state].winner = null;
  
  if (joe.electionResults[state] > donald.electionResults[state]) {
      theStates[state].winner = joe;  
  
  } else if (joe.electionResults[state] < donald.electionResults[state]) {
    theStates[state].winner = donald;
  }
  
 var stateWinner = theStates[state].winner;
if (stateWinner !== null) {
   theStates[state].rgbColor = stateWinner.partyColor;
} else {
   theStates[state].rgbColor = [11,32,57];
 
} 
  
var stateInfoTable = document.getElementById('stateResults')
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
candidate1Name.innerText = joe.name;
candidate2Name.innerText = donald.name;
candidate1Results.innerText = joe.electionResults[state];
candidate2Results.innerText = donald.electionResults[state];

if (theStates[state].winner === null)
{
    winnersName.innerText = "DRAW";
  
} 
  else {
  winnersName.innerText = theStates[state].winner.name;
  
 }
  
}
 

joe.tallyUpTotalVotes();
donald.tallyUpTotalVotes();

console.log(joe.totalVotes);
console.log(donald.totalVotes);
 
var winner = {};

if (joe.totalVotes > donald.totalVotes) {
    winner = joe.name;
 
}else if (joe.totalVotes < donald.totalVotes){
    winner = donald.name;
}else{
    winner = "DRAW."
  
}

console.log("AND THE WINNER IS..." + winner + "!!!");

console.log("Joe's color is: " + joe.partyColor);
console.log("Donald's color is: " + donald.partyColor);


var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = joe.name;
row.children[1].innerText = joe.totalVotes;
row.children[2].innerText = donald.name;
row.children[3].innerText = donald.totalVotes;
row.children[5].innerText = winner;
  
  
  

 

    


    











