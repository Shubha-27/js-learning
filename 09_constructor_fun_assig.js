function Bank(bankName,location,ifscCode,branchCode){
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;

}
console.log(`-----------------------------------------BANK DETAILS----------------------------------------`);
console.log(`==============================================================================================`);
const yesBank= new Bank("Yes Bank","Solapur","Yes0000098","26712");
const sbiBank=new Bank("State Bank","Latur","SBIN0000478","98376");
const mahBank=new Bank("Maharashtra Bank","Yenagur","MAH000789","89264");
const axisBank=new Bank("Axis Bank","Omerga","AXS0000895","90923");
Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 PM IST";

console.log(`Bank Details:${yesBank.bankName} ,${yesBank.location},${yesBank.ifscCode},${yesBank.branchCode}`);
console.log(`Bank Details:${sbiBank.bankName} ,${sbiBank.location},${sbiBank.ifscCode},${sbiBank.branchCode}`);
console.log(`Bank Details:${mahBank.bankName} ,${mahBank.location},${mahBank.ifscCode},${mahBank.branchCode}`);
console.log(`Bank Details:${axisBank.bankName} ,${axisBank.location},${axisBank.ifscCode},${axisBank.branchCode}`);
console.log(`===============================================================================================`);
console.log(`State Bank opening time: ${sbiBank.openTime} and closed time:  ${sbiBank.closeTime}`);
console.log(`===============================================================================================`);
console.log(`Bank of Name: ${axisBank.bankName} and bank closeing time is: ${axisBank.closeTime}`);
console.log(`===============================================================================================`);
console.log(`Bank of Name: ${yesBank.bankName}, and branch code is: ${yesBank.branchCode} and bank opening time is: ${yesBank.openTime}`);
console.log(`===============================================================================================`);