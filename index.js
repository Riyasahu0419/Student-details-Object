function Student(name, roll_no, class_, section, marks) {
    this.name = name;
    this.roll_no = roll_no;
    this.class_ = class_;
    this.section = section;
    this.marks = marks;
    this.printTop3Subjects = function () {
       
        
        const subjects = Object.keys(this.marks);
        subjects.sort(function (a, b) {
            return this.marks[b] - this.marks[a];
        }
        .bind(this));

        console.log("Top 3 Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(`${i+1}. ${subjects[i]}`);
        }
    }; 
    this.printReportCard = function () {
        const totalMarks = Object.values(this.marks).reduce(function (acc, curr) {
            return acc + curr;
        }, 0);
        const percentage = (totalMarks / (Object.keys(this.marks).length * 100)) * 100;

        console.log("     REPORT CARD    ");
        console.log(" Name     - " + this.name);
        console.log(" Roll no. - " + this.roll_no);
        console.log(" Class    - " + this.class_);
        console.log(" Section  - " + this.section);
      
        Object.keys(this.marks).forEach(function (subject) {
            console.log(" " + subject.charAt(0).toUpperCase() + subject.slice(1) + "  - " + this.marks[subject]);
        }.bind(this));

        console.log(" Percentage - " + percentage.toFixed(1) + " %");
    };
}

const student1 = new Student("Riya sahu","41", "X", "A", {
    science: 82,
    maths: 92,
    social_science: 72,
    english: 87,
    hindi: 87
});

student1.printTop3Subjects();
student1.printReportCard();
