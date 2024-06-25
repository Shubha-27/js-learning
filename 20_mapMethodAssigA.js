console.log(`=================step1================`);
const arrayNumber=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`Before adding 10 value to each element the given array is : ${arrayNumber}`);
const newArray = arrayNumber.map( (element)=>{
    return element + 10;
});

console.log(`After adding 10 into each elememt the array is: ${newArray}`);

console.log(`=================step2================`);
const arrayNum=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`Given array is:${arrayNum}`);
const newArr = arrayNum.map( (element)=>{
    return element * element*element;
});
console.log(`Array after cubing each element: [${newArr}]`);

console.log(`=================step3================`);
const array=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`Given array element is:${array}`);
console.log(`Add the index value into corresponding each array element`);
const newA=array.map((element,index)=>{
    return element + index;
});
console.log(newA);


