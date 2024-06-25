console.log(`======================================= Grade Calculation =================================`);
console.log(`Grade A+ it is funtastic marks , Grade A it is excellent marks ,Grade B it is good marks 
,Grade C is oky but need to improvement , Marks less than 35 no grade result is Failed..... `);
console.log(`===========================================================================================`);
function gradeCalculation(marks){
    var typeOF = typeof marks;
    //Invalid Scenario
    if (marks<=0|| marks>100 || marks == undefined || typeOF != "number") {
        console.log(`Invalid Marks : ${marks} , Provide valid marks`);
        
    } else {
        //valid marks
         
     if(marks>=90) {
        console.log(`Funtastic marks:${marks} , your grade is A+`);
         
     }
     if (marks>=75 && marks<90) {
        console.log(`Excellent marks : ${marks} , your grade is A`);
     }
     if (marks>=50 && marks<75){
        console.log(`Good marks : ${marks} , your grade is B`);
     }
     if (marks>=35 && marks<50) {
        console.log(`Marks is : ${marks} , your grade is C,Need improvement`);
     }
     if (marks>0 && marks<35) {
        console.log(`marks is : ${marks} , No grade result is Fail....`);
     }
        
    }
}
gradeCalculation("Seven");
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
var str = "91";
var num=parseInt(str);
console.log(`Funtastic marks : ${num} , your grade is A+`);
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);
console.log(`============================================================================================`);