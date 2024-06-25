console.log(`==================step1==================`);
console.log(`log the array element with it's index using forEach() loop`);
const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((currentValue,index) => {
    console.log(`Cureent value: ${currentValue}, and index is:${index}`);
    
});

console.log(`==================step2=================`);
console.log(`log the only positive Numbers from the given array`);
const array=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(array);
console.log(`Positive Number is:`);
array.forEach((value)=>{
    if(value>=0){
        console.log(value);
    }
});

console.log(`==================step3=================`);
console.log(`log the only Negative Numbers from the given array`);
const arrayN=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(arrayN);
console.log(`Negative number is:`);
arrayN.forEach((element)=>{
    if(element<0){
       
        console.log(element);
        
    }
    
});

console.log(`==================step4=================`);
console.log(`log the only Even Numbers from the given array`);
const arrayNo=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(arrayNo);
console.log(`Even number is:`);
arrayNo.forEach((value)=>{
    if(value%2==0){
       
        console.log(value);
        
    }
    
});

console.log(`==================step5=================`);
console.log(`log the  Sum values on the console`);
const arrayNum=[1,-7,40,502,-77,91,0,108,89,-601];
let sum = 0;
arrayNum.forEach( (element) => {
    sum = sum + element;
} );
console.log(`sum of the given array ${arrayNum} is: ${sum}`);

console.log(`===========================step6==========================`);
console.log(`log the only even indexed value on the console`);
const arrays=[1,-7,40,502,-77,91,0,108,89,-601];
arrays.forEach((currentValue,index,array)=>{
    console.log(`find only even indexed value from given array: ${currentValue,index,array}`);
    if (index%2==0) {
        console.log(`Even index is: ${index}`);
        
    }

});

