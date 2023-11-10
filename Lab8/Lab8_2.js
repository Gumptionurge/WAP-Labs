
function Student(firstName,lastName,grades){
this.firstName=firstName;
this.lastName=lastName;
this.grades=grades;
}

Student.prototype.inputNewGrade = function(newGrade){
    this.grades.push(newGrade);
}

Student.prototype.computeAverage = function(){
    let sum=0;
    let counter=0;
    for(let i of this.grades){
        sum+=i;
        counter++;
    }
    return sum/counter;
}


let student1= new Student("Hein","Ztet",new Array);

let student2= new Student("Hasan","AlYousef",new Array);

let student3=new Student("Arinda","Hilary",new Array);
student1.inputNewGrade(70);student1.inputNewGrade(90);student1.inputNewGrade(80);student1.inputNewGrade(93);
student2.inputNewGrade(90);student2.inputNewGrade(93);student2.inputNewGrade(60);student2.inputNewGrade(85);
student3.inputNewGrade(91);student3.inputNewGrade(83);student3.inputNewGrade(60);student3.inputNewGrade(96);
console.log(student1.firstName+" "+student1.lastName+ " has average : "+student1.computeAverage());
console.log(student2.firstName+" "+student2.lastName+ " has average : "+student2.computeAverage());
console.log(student3.firstName+" "+student3.lastName+ " has average : "+student3.computeAverage());

