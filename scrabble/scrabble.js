// Scrabble and Bonus Question 1 -------------------------------------------------------------------------

function scrabble(availableTiles, word) {

  var availableTilesArr = availableTiles.split('').sort(); // [ '?', '?', 'a', 'd', 'i', 'l', 'l', 'm', 'y' ]
  var wordArr = word.split('').sort(); // [ 'a', 'd', 'i', 'l', 'y' ]

  var wildcards = availableTilesArr.filter(function(elem) { // [ '?', '?' ]
    return elem === '?';
  })

  var matchedLetters = [];
  for (var i=0; i<wordArr.length; i++) {
    if (availableTilesArr.includes(wordArr[i])) {
      matchedLetters.push(wordArr[i]);
      availableTilesArr.splice(availableTilesArr.indexOf(wordArr[i]),1);
      }
  }
  if (matchedLetters.length+wildcards.length >= wordArr.length) {
    // console.log("It's a match!");
    return true;
  }
  // else console.log("No match, too bad!");
  return false;
}

scrabble("pr?ogrm", "program") // Bonus 1 - uncomment console.logs at line 20 and 23 for this to work.


// Bonus Question 2 ------------------------------------------------------------------------------------------

var fs = require("fs");
var text = fs.readFileSync("./enable1.txt", "utf-8");
var textByLine = text.split("\r\n")


var longestWord = textByLine.reduce(function(a,b) { //to find out the longest word, which is 'ethylenediaminetetraacetates' of length 28
  return a.length > b.length ? a : b;
})

var objectOfTextByLength = {}; //arranges all the words according to length
for (var i=0; i<29; i++) {
  objectOfTextByLength[i] = [];
  for (var j=0; j<textByLine.length; j++) {
    if (textByLine[j].length === i) {
        objectOfTextByLength[i].push(textByLine[j]);
        // textByLine.slice(j,1); <--why doesn't this work????
      }
  }
}
var longest = function(input) {
  for (var k=28; k>0; k--) {
    for (var m=0; m<objectOfTextByLength[k].length; m++) {
      if (scrabble(input,objectOfTextByLength[k][m])) {
        console.log("The longest matched word is: ",objectOfTextByLength[k][m]);
        return true;
      }
    }
  }
  console.log("Sorry there is no matching words :(");
  return false;
}
longest("dein?stit?ustiona?lizat") // Bonus 2 - comment out line 20 and 23 for this to work properly.


// Bonus Question 3 ----------------------------------------------------------------------------------

//first create an object for the scoring system (by alphabet)...

var scoringSystem = {
  a:1,
  b:3,
  c:3,
  d:2,
  e:1,
  f:4,
  g:2,
  h:4,
  i:1,
  j:8,
  k:5,
  l:1,
  m:3,
  n:1,
  o:1,
  p:3,
  q:10,
  r:1,
  s:1,
  t:1,
  u:1,
  v:4,
  w:4,
  x:8,
  y:4,
  z:10,
  '?':0
}

//next sort the original english dictionary list according to number of scrabble points

var objectOfTextByPoints = {};
// var pointsAddedSoFar = 0;

var totalPointsOfThisWord = function(word) {
  var arr4 = word.split('');
  // arr4 = arr4.reduce(function(elem,elem2) {
  //   return elem + elem2
  // }) //this doesn't work
  var currentPoints = 0;
  for (var p=0; p<arr4.length; p++) {
    currentPoints += scoringSystem[arr4[p]];
  }
  return currentPoints;
}

for (var n=0; n<textByLine.length; n++) { //go down the words
  // for (var p=0; p<textByLine[n].length; p++) { //go down that particular word n, letter by letter, aggregating the points
  //   pointsAddedSoFar += scoringSystem[textByLine[n][p]] //the point of that particular letter at index p, word n
  // }
  var currentWord = textByLine[n]
  var pointsOfThisWord = totalPointsOfThisWord(currentWord); //store the accumulated points for this word, lest we call the function again and again for the few lines below

  if (!objectOfTextByPoints[pointsOfThisWord]) { //after adding up the points of the word, see if there were words of the same points added before
    objectOfTextByPoints[pointsOfThisWord] = []; //create an array for that particular point
    objectOfTextByPoints[pointsOfThisWord].push(currentWord) //push that word n into it
  }
  else { //if there were words with same points pushed in already...
    objectOfTextByPoints[pointsOfThisWord].push(currentWord);
  }
  //now go to next word at index n+1
}

console.log("Checkpoint: ",objectOfTextByPoints); //the dictionary is now re-sorted according to points

var highest = function(input3) { //bonus question 3 proper
  var pointsOfInputWord = totalPointsOfThisWord(input3); //returns an integer - highest possible points given this input tiles
  for (var q=pointsOfInputWord; q>0; q--) { //go down the list from highest points, look for the first match
    for (var r=0; r<objectOfTextByPoints[q].length; r++) {//each point has an array of multiple words giving that number of points
      if (scrabble(input3,objectOfTextByPoints[q][r])) { //using first scrabble function to see if given tiles can produce the current word
        console.log("Congrats! Your tiles can produce this word: "+objectOfTextByPoints[q][r]+" that has points of: "+q);
        return true;
      }
      //if no match, go to next word of point q at index r+1
    }
    //if no match in the list of words in array q, go to next array of q-- and repeat
  }
  console.log("Too bad, your tiles produced 0 points! (how is that even possible?)");
  return false;
}

highest('arvmzayzzsy');

















//
