console.log(`==================================step1=================================`);
function maleMarriageEligibility(gender,age,boyName){
   var result = (gender=="Male" && age>=21)
    ? `Hey ${boyName} you are eligible for Marriage` 
    : `${boyName} you are Not eligible for Marriage`;
   return result;
}
var maleResult=maleMarriageEligibility("Male",25,"Billgates");
console.log(`Message for Billgates : ${maleResult}`);

var maleResult=maleMarriageEligibility("Male",17,"Stew jobs");
console.log(`Message for stew jobs : ${maleResult}`);

console.log(`==================================step2=================================`);
function femaleMarriageEligibility(gender,age,girlName){
   var result = (gender=="Female" && age>=18)
    ? `Hey ${girlName} you are eligible for Marriage` 
    : `${girlName} you are Not eligible for Marriage`;
   return result;
}
var maleResult=femaleMarriageEligibility("Female",16,"Jenifer");
console.log(` Jenifer's Mom says : ${maleResult}`);
var maleResult=femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(`Malinda's Mom says : ${maleResult}`);

console.log(`========================================================================`);