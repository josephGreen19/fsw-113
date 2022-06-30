// Declare any necessary variables.
let student;
const studentName = document.querySelector("#studentName");
const className = document.querySelector("#className");
const studentScores = document.querySelector("#studentScores");
const possibleScores = document.querySelector("#possibleScores");
const certStudentName = document.querySelector("#certStudentName");
const certClassName = document.querySelector("#certClassName");
const certGrade = document.querySelector("#certGrade");






// Add am event listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
document.querySelector("#print").addEventListener("click", () => {
    createNewStudent ();
    completeCertificate(student);
    
});



// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.

document.querySelector("#reset").addEventListener("click", () => {
   studentName.value= "";
   className.value= "";
   studentScores.value= "";
   possibleScores.value= "";
   certStudentName.value= "";
   certClassName.value= "";
   certGrade.value= "";
    
});


// Create a function that instantiates a new student object with the input from the HTML form.

function createNewStudent () {
  let studentScoresArr =toNumArry(studentScores.value);
  let possibleScoresArr =toNumArry(possibleScores.value);
    student = new Student(studentName.value, className.value, studentScoresArr, possibleScoresArr);
    completeCertificate(student);
}


// Create a function that fills in the student's name, class name, and calculated grade on the certificate .

function completeCertificate(student) {
  certStudentName.innertext= student.getSname();
  certClassName.innertext= student.getCname();
  certGrade.innertext= student.getLetterGrade();

}



// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.

function cstStringNumArray(str) {
    return str.split(',').map(score => Number(score.trim()));
}



//console.log(cstStringNumArray("10,20,30,40,50"));