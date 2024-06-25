console.log(`=================================step1================================`);
var isEvenOrOdd = function(num){
    if(num%2==0){
        return "EVEN";
    }
    else{
        return "ODD";
    }
}
var value= isEvenOrOdd (45);
console.log(`The Given number 45 is : ${value}`);
var value= isEvenOrOdd (70);
console.log(`The Given number 70 is : ${value}`);
var value= isEvenOrOdd (67);
console.log(`The Given number 67 is : ${value}`);
var value= isEvenOrOdd (98);
console.log(`The Given number 98 is : ${value}`);

console.log(`=================================step2================================`);
var voteEligibility = function(age){
    if(age>=18){
        console.log(`You are eligible for vote`);
    }
    else{
        console.log(`You are not eligible for vote`);
    }
}
voteEligibility(18);
voteEligibility(20);
voteEligibility(17);
voteEligibility(40);

console.log(`=================================step3================================`);
var strLength = function(str){
    if (str.length >= 10) {
    console.log(`Yes! the given string contains more than 10 character`);
    } else {
        console.log(`No! the given string not contains more than 10 character`);  
    }

}
strLength("JavaScript-ES6");


console.log(`=================================step4================================`);
var strLength = function(str){
    if (str.startsWith("Java")) {
     console.log(`The given string : ${str} , starts with "java"`);
    } else {
     console.log(`The given string : ${str} , not  starts with "java"`); 
    }
}
strLength("JavaScript Language");
strLength("Programming Language");
console.log(`======================================================================`);
