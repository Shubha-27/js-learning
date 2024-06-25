const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`======Log the first and last element on the console======`);
console.log("first element");
console.log(fruits_seasonal[0]);
console.log("last element");
const  len = fruits_seasonal.length;
console.log(fruits_seasonal[len-1]);



console.log(`=========Add element Papaya before the Banana=========`);
fruits_seasonal.unshift("Papaya");
console.log(`After adding element : ${fruits_seasonal}`);

console.log(`======Add element Pineapple at the last position======`);
fruits_seasonal.push("Pineapple");
console.log(`After adding element : ${fruits_seasonal}`);

console.log(`======Remove mango from the array========`);
var deletedElement=fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);
console.log(`removing element:`,deletedElement);
console.log(fruits_seasonal);

console.log(`======insert element Dragon fruit before waterMelon======`);
var deletedElement=fruits_seasonal.splice(4,0,"Dragon");
console.log(fruits_seasonal);

console.log(`======Replace an element Orange with kiwi=======`);
var deletedElement=fruits_seasonal.splice(2,2,"Kiwi");
console.log(fruits_seasonal);

console.log(`======Log the element Starting from index 1 to 4=======`);
var deletedElement=fruits_seasonal.splice(0,5);
console.log(`starting from index 1 to 4: ${deletedElement}`);
console.log(`Remaining index Element : ${fruits_seasonal}`);

