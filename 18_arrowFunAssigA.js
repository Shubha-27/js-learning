console.log(`===============step1================`);
let msg =() => {
    console.log("Good Morning,Today is Friday");
}
 msg();

console.log(`===============step2================`);
 let multiply =(n1,n2,n3=1) => {
    const result=n1*n2*n3;
    console.log(`multiplication of 3 variable is:${result}`);
}
 multiply(5, 5,2);
 multiply(10,4);

 console.log(`==============step3================`);
 // Arrow Function 
let add =(n1,n2,n3,n4,n5) => {
    const result =n1+n2+n3+n4+n5;
    return result;
   
    
    
}
const value = add(100,100,200,349,756);
console.log(`----Addition of given number----`);
console.log(`100,100,200,349,756 addition is: ${value}`);

console.log('----Addition of given words----');
const val=add("I am"," Learning"," ES6",' features ',"in depth");
console.log(`"I am"," Learning"," ES6",' features ',"in depth", addition is: ${val}`);