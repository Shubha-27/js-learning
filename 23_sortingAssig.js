
const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`====================Sort in reverse order====================`);
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);


console.log(`===================Sort in ascending order===================`);
const arrayRoll=[113,45,56,11,32,45,109,799,56,45];
console.log(arrayRoll);
arrayRoll.sort();
console.log(arrayRoll);


console.log(`========Other way to sort element in Ascending order==========`);
const array=[113,45,56,11,32,45,109,799,56,45];
array.sort((n1, n2)=>{
    return n1<n2 ? -1 : 1;
});
console.log(array);


console.log(`========================Greater Number========================`);
var arrayNum=[113,45,56,11,32,45,109,799,56,45];
 let arre=arrayNum.length-1;
 console.log(`Greater Number is: ${arrayNum[7]}`)



 console.log(`========================Smallest Number=======================`);
 var arrayN=[113,45,56,11,32,45,109,799,56,45];
 let arrey=arrayNum.length-1;
 console.log(`Smallest Number is: ${arrayN[3]}`)

 console.log(`=====================Remove duplicate array===================`);
 var arrayN=[113,45,56,11,32,45,109,799,56,45];
 console.log(`Given array is: ${arrayN}`);
 let uniqueArray=[...new Set(arrayN)];
 console.log(`removed Duplicaate array is: ${uniqueArray}`);