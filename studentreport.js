

class studentReport{
    constructor(marks,name){
        this.marks=marks;
        this.name=name;
    }
 addMarks(){
     for(let i=0;i<this.marks.length;i++){
         Total+=this.marks[i];
         }
         return Total;
 }
 toFindAverage(){
     let average =Total/this.marks.length;
     console.log(average);

     
 if( average> 90 ){
    console.log(" O grade");
      }
  else if (average >80 && average <90){
      console.log("A grade");
     } 
   else if( average >70 && average <80) {
       console.log("B grade");
   } 
   else{
       console.log("C grade");
   }  
}
}
      
marks = [90,80,70,80,50];
let Total=0;
 

const obj = new studentReport(marks,"Kavya");
console.log(obj.name);
console.log(obj.addMarks());
obj.toFindAverage();
