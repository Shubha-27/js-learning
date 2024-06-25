console.log(`======================step1=====================`);
const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`Given Array is: ${arrayNumbers}`);
console.log(` Find out all the numbers which greater than 50 `);
let filterNum=arrayNumbers.filter(Number => Number>50);
console.log(filterNum);


console.log(`=====================step2=======================`);
console.log(` Find out all the  even numbers`);
const arrayNum=[20,11,40,25,37,49,9,90,60,2,19];
const newArray = arrayNum.filter( (element)=>{
    return element%2==0;
});
console.log(newArray);

console.log(`=====================step3=======================`);
console.log(` Find out all the  odd numbers`);
const arrayN=[20,11,40,25,37,49,9,90,60,2,19];
const newArra = arrayN.filter( (element)=>{
    return element%2==1;
});
console.log(newArra);

console.log(`=====================step4=======================`);
console.log(` Find out all the numbers which are multiple of 5`);
const array=[20,11,40,25,37,49,9,90,60,2,19];
const newA = array.filter( (element)=>{
    return element%5==0;
});
console.log(newA);

console.log(`=====================step5=======================`);
console.log(` Find out all numbers which are between 20 and 50`);
const arrayNu = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
let filterN=arrayNu.filter((num) =>{
return num>=20 && num<=50;
} );
console.log(filterN);

