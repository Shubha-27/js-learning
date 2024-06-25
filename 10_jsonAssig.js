console.log(`====================step1====================`);
const employeeJSON=`{
  "name" : "Aleix Melon",
  "id" : "E00245",
  "role" : ["Dev","DBA"],
  "age" : 23,
  "doj" : "11-12-2019",
  "married" : false,
  "address": {
        "Street" : "32,Laham St",
        "city" : "Innsbruck",
        "country" : "Austria"
  },
  "referred-by": "E0012"
}`
console.log(typeof employeeJSON);
console.log(employeeJSON);
const employee=JSON.parse(employeeJSON);
console.log(`-----convert string into object------`);
console.log(typeof employee);
let empSkills=employee.role;
console.log(empSkills);
const viko = empSkills[0];
 console.log(`==============step2===============`);
 console.log(`role of 0 index is:- ${viko}`);
 console.log(`==============step3===============`);
 const emp=employee.name;
 console.log(emp);
 const array2=emp.split(" ");
console.log(array2);
const niko=array2[1];
console.log(`log last name only: ${niko}`);
console.log(`===============step4================`);
const array3=employee.doj;
console.log(array3);
arrayNum=array3.split("-");
console.log(arrayNum);
const Array4=arrayNum[2];
console.log(`Log the joining year of employee is : ${Array4}`);
  
    
    

    



    


