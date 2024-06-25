console.log(`==============count total number of vowels================`);
var str="I am very good IT Developer";
var vowels="aeiou";
var counter=0;
for (let index = 0; index < str.length; index++) {
    var ch = str.charAt(index);
    var chLowerCase=ch.toLowerCase();
    if (vowels.includes(chLowerCase)){
        counter++;
    }
        
    }
    console.log(`The total number of vowels present in a string :${counter}`);
    
console.log(`============sum of cube of numbers from 1 to 5============`);
var sum=0;
for(let i=1; i<=5; i++){
    var cube=i*i*i;
    sum=sum+cube;

}
console.log(sum);

console.log(`==============log only odd positioned Chars===============`);
function oddPositionedChars(str){
    for (let index = 0; index < str.length; index++) {
      var ch=str.charAt(index);
      if(index%2==1 && ch != ' ') 
        console.log(ch); 
        
    }
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be UI IT Champ");
    
    