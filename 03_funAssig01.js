console.log("==1.function with no argument and no return type==");
function Add(){
    console.log("Addition of two numbers");
    var result=30+10;
    console.log("Addition is:",result);
}
Add();



console.log("==2.function with argument and no return type==");
console.log("--My Personal Details--");
function personalDetails(firstName,lastName,collegeName){
    console.log("My first name is:",firstName);
    console.log("My last name is:",lastName);
    console.log("My college name is:",collegeName);

}
personalDetails("Shubhangi","Jadhav","Sangameshwar college,solapur");



console.log("==3.function with argument and with return value==");
function addThreeValues(num1,num2,num3){
console.log("addition of three values:",num1 ,num2 ,num3);
var result=num1+num2+num3;
return result;

}
var result=addThreeValues(10.23,600,40);
console.log("Addition is:",result);
var result=addThreeValues("Hello","Good","Morning");
console.log("Addition is:",result);