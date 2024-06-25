console.log(`====== break ========`);
for (let index = 0; index <= 5; index++) {
    if (index==2) {
        break;
    }
    console.log(index);
}

console.log(`====== continue ========`);
for (let index = 0; index <= 5; index++) {
    if (index==2) {
        continue;
    }
    console.log(index);
}
    

console.log(`Count the total number of a character`);
var word = "JavaScript";
var counter = 0;
for (let index = 0; index < word.length; index++) {
    var ch = word.charAt(index);
    if (ch=="a") {
        counter ++;
    }
}
console.log(`Total number of a is: ${counter}`);