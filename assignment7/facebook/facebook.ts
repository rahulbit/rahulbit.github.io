
class facebook{
     private name:string;
     private Dob:string;
     private educationMasters:string;
     private  educationbachelor:string;
     private hometown:string;
     private livesIn:string;
     private highschool:string;
     private mobilePhone:number;
     private Gender:string;
     private Religion:string;
     private relationshipStatus:string;
     private Quotes:string;
     private nickname:string;

     constructor(name:string,Dob:string,Masters:string,Bachelors:string,homeTown:string,livesIn:string,highSchool:string,mobilePhone:number,gender:string,Religion:string,RelationshipStatus:string,quotes:string,nickname:string){
            this.name=name;
            this.Dob=Dob;
            this.educationMasters=Masters;
            this.educationbachelor=Bachelors;
            this.hometown=homeTown;
            this.livesIn =livesIn;
            this.highschool=highSchool;
            this.mobilePhone=mobilePhone;
            this.Gender = gender;
            this.Religion=Religion;
            this.relationshipStatus=RelationshipStatus;
            this.Quotes =quotes;
            this.nickname=nickname;
     }

     getDateofbirth=()=>{
         return  this.Dob;
     }
     getQuotes=()=>{
         return this.Quotes;
     }
     getRelationshipStatus=()=>{
         return this.relationshipStatus;
     }

     getGender=()=>{
         return this.Gender
     }

     getEducationmaster=()=>{
        return this.educationbachelor;
        
     }
     getHometown=()=>{
         return this.hometown;
         
     }

     getLivesIn=()=>{
         return this.livesIn;
     }

     getmobile=()=>{
         return this.mobilePhone;
     }

     getnickname=()=>{
         return this.nickname;
     }
}
let fb =new facebook ("rahul","21-nov-1993","Birla Institute of Technology,Mesra","Rajasthan Technical University","Ranchi", "Bangalore","DAV Publich school",70799888,"Male","Hindu","complicated","It is hard to fail, but it is worse never to have tried to succeed.","Lucky");
console.log(fb.getDateofbirth())
console.log(fb.getQuotes())
console.log(fb.getRelationshipStatus())
console.log(fb.getGender())
console.log(fb.getEducationmaster())
console.log(fb.getHometown())
console.log(fb.getLivesIn())

console.log(fb.getmobile())
console.log(fb.getnickname())
