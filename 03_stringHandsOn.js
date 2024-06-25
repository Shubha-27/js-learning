console.log(` Given string:"  Hey you are doing good,keep it up   " `);
console.log(`-------------step1---------------`);
function stringHandsOn() {
  console.log(` "  Hey you are doing good,keep it up   " `);
  

  console.log(`-------------step2---------------`);
  var result = "  Hey you are doing good,keep it up   ";
  console.log(`Total number of string : ${result.length}`);

  console.log(`-------------step3--------------`);
  var res = "  Hey you are doing good,keep it up   ";
  console.log(`Trimmed strings :${res.trim()}`);

  console.log(`After trimming the length is : ${result.trim().length} `);

  console.log(`-------------step4---------------`);
  console.log(`Total number of extra spaces count is removed: ${result.length - res.trim().length }` );

  console.log(`-------------step5---------------`);
  console.log(
    `first charcter after trim : ${res.charAt(
      2
    )} , last character after trim : ${res.charAt(34)}`
  );

  console.log(`-------------step6---------------`);

  var myName = "Hey you are doing good,keep it up";
  var result = myName.split(" ");
  console.log(` Total number of words after trim: ${result.length}`);

  console.log(`------------step7----------------`);
  var txt="Hey you are doing good,keep it up";
  console.log(`print the index of good : ${txt.indexOf("good")}`);

  
  console.log(`------------step8----------------`);
  var txt="Hey you are doing good,keep it up";
  console.log(`print the substring starting index 22: ${txt.substring(22)}`);

    
  console.log(`------------step9----------------`);
  console.log(`check string ends with up or not after trim: ${txt.includes("up")}`);

  
  console.log(`------------step10----------------`);
  console.log(`Check is string starts with 'Hey' or not after trim: ${txt.includes("Hey")}`);
}

stringHandsOn();
