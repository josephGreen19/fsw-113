// Create a class called Student whose constructor maintains all four data inputs from the HTML page.

class Student {
    constructor(sName,cName,sScores,pScores) {
        this.studentName = sName;
        this.className = cName;
        this.studentScores = sScores;
        this.possibleScores = pScores;
    }
    getSname(){
        return this.studentName;
    }
    getCname(){
        return this.className;
    }
    getTotalScores(){
        return this.studentScores.reduce((prevValue,currValue) => prevValue + currValue);
    }
    getPossibleScores(){
        return this.possibleScores.reduce((prevValue,currValue) => prevValue + currValue);
    }
    getGrade() {
        return this.getTotalScores() / this.getPossibleScores() *100;
    }
    getLetterGrade(){
        if(this.getGrade() >= 90) return "A";
        if(this.getGrade() >= 85) return "B+";
        if(this.getGrade() >= 80) return "B";
        if(this.getGrade() >= 75) return "C+";
        if(this.getGrade() >= 70) return "C";
        if(this.getGrade() >= 60) return "D";
        return "F";
    }
}


// The class should also contain the following methods:
// - a method that adds up all the student's scores  (reduce)


    

// - a method that adds up all the possible scores  (reduce)


// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)