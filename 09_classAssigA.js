console.log(`=============================================step 1--Vehicle Details===============================================`);
class Vehicle{
    constructor(Name,speed,color,price,year){
        this.Name=Name;
        this.speed=speed;
        this.color=color;
        this.price=price;
        this.year=year;
    }

    details(){
        console.log(` Vehicle Details: Name:${this.Name} ,  Speed:${this.speed},  Color:${this.color},   Price:${this.price},   Year:${this.year}`);
    }
}
const Name = new Vehicle("Toyota ","177 to 209km","Black","$35,000","2024");
Name.details();

const Name2=new Vehicle("Honda","177 to 209km","Silver","$40000","1990");
Name2.details();

const Name3=new Vehicle("Ford","177 to 209km","Blue","$40000","2021");
Name3.details();

const Name4=new Vehicle("BMW","209 to 250km","Gray","$100,00","2020");
Name4.details();

const Name5=new Vehicle("Audi","209 to 250km","White","$50000","1998");
Name5.details();

console.log(`================================================step2--College Details==============================================`);
class College{
    constructor(collegeName,Branch,Location,Classes){
        this.collegeName= collegeName;
        this.Branch=Branch;
        this.Location=Location;
        this.Classes=Classes;
    }
    details(){
        console.log(`College Details: College Name:${this.collegeName} , Branch:${this.Branch} , Location:${this.Location} , Classes:${this.Classes}`);
    }
}
const clg=new College("Sangameshwar college","BCS","Solapur","30");
clg.details();

const clg2=new College("Soni College", "BCA","Solapur","100");
clg2.details();

const clg3=new College("COCSIT College","BBA","Latur","56");
clg3.details();

const clg4=new College("Daynanda College","B.com","Latur","78");
clg4.details();