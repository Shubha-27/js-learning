var array = [10, 20, 30, 40, 15];
for (const index in array) {
   console.log(array[index]);
}
console.log(`for of Loop `);
for (const element of array) {
 console.log(element);
}



console.log(`giving index value`);
var array=[10,20,30,40,15];
for (const index of array) {
    console.log(index);
    
}

console.log(`giving the index`);
var array=[10,20,30,40,15];
for (const key in array) {
    console.log(key); 
}

var array = [10, 20, 30, 40, 15];
const result = array.join(",");
console.log(result);

var array = [10, 20, 30, 40, 15];
console.log(array);
console.log(...array);

 

console.log(`Merging an array`);
var arrayOne = [1, 3, 4];
var arrayTwo = [7, 9, 5];
var mergeArray = [...arrayOne, ...arrayTwo];
console.log(mergeArray);