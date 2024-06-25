
console.log(`===================step1===================`);
function squareOfWordLength(argOne){
  var lenSquare = argOne.length;
   var result = lenSquare*lenSquare;
  // return {length: lenSquare ,square:result};
  return result

}
var argOne="JavaScript";
var returnValue = squareOfWordLength("JavaScript");
console.log( `The length of JavaScript is: ${argOne.length} ||and it's square is : ${returnValue}`);


var argOne="Google Chrome";
var returnValue = squareOfWordLength("Google Chrome");
console.log( `The length of Google Chrome  is: ${argOne.length} ||and it's square is : ${returnValue}`);

var argOne="Developer smart";
var returnValue = squareOfWordLength("Developer smart");
console.log( `The length of Developer smart is: ${argOne.length}|| and it's square is : ${returnValue}`);


console.log(`===================step2===================`);
var str="I am Angular Developer";
var len = console.log(`length of string:${str.length}`);
var totalWords= console.log(`Divided by total number of words:${str.split(" ").length}`);
var result= str.length/ str.split(" ").length;
console.log(`result is:${result}`);
var str="I am Angular Developer";
var len = console.log(`length of string:${str.length}`);
var totalWords= console.log(`multiple by total number of words:${str.split(" ").length}`);
var res= str.length*str.split(" ").length;
console.log(`result is:${res}`);