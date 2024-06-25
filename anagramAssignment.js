function isAnagram(str1,str2) {
   if (str1.length!==str2.length) {
    return false
   }
   const sortedStr1=str1.split('').sort().join('');
   const sortedStr2=str2.split('').sort().join('');

   return sortedStr1 ==sortedStr2;

}
const test =[
    ["vile","evil"],
    ["silent","listen"],
    ["gram","aram"],
    ["mom","tom"]
]

test.forEach((test,index)=>{
    const str1=test[0];
    const str2=test[1];
    const result=isAnagram(str1,str2);

    if (result) {
        console.log(`Compare the given string ${index+1}: '${str1}' and '${str2}', It is Anagrams.`);
     }else{
        console.log(`Compare the given string ${index+1}: '${str1}' and '${str2}', It is not Anagrams.`);
     }
})