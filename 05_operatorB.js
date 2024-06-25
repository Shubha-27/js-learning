 console.log(`=========================step1========================`);
 
 var greaterNumber=function (num1,num2){
    var result=num1>=num2 ? num1 : num2;
    console.log(`Greater number from given number ${num1} , ${num2} is : ${result}`);

}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`========================step2=========================`);
 function isEvenOrOddNum(argOne){
    var result = argOne%2==0 ? true : false;
    return result;

 }
  var returnResult=isEvenOrOddNum(29);
 console.log(`given 29 number is even : ${returnResult} `);
 
 var returnResult=isEvenOrOddNum(44);
 console.log(`given 44 number is even : ${returnResult} `);

 var returnResult=isEvenOrOddNum(0);
 console.log(`given 0 number is even  : ${returnResult} `);

 var returnResult=isEvenOrOddNum(101);
 console.log(`given 101 number is even: ${returnResult} `);


 
console.log(`========================step3=========================`);
function wordLength(argOne){
    var result= argOne.length%2==0 ? "even" : "odd";
    return result;
}
 var resultWord=wordLength("JavaScript");
 console.log(`given number JavaScript is: ${resultWord}`);

 var resultWord=wordLength("developer");
 console.log(`given number  developer is: ${resultWord}`);

 var resultWord=wordLength("Google");
 console.log(`given number  Google is : ${resultWord}`);

 console.log(`======================================================`);






















