const input = require("prompt-sync")();

function Student() {
  console.log(`Adding student... \n`);

  this.studentID = Number(input("Enter studentID: "));
  this.name = String(input("Enter name: "));
  this.age = Number(input("Enter age: "));
  this.grade = Number(input("Enter year: "));
}

function School() {
  this.students = [];
  this.addStudent = (stud) => {
    this.students.push(stud);
    console.log(`added student: ${stud.name}`);
    console.log("");
  };

  this.listStudent = () => {
    if (this.students.length === 0) {
      console.log(`There are no students in this school.`);
    } else {
      console.log("List of students: ");

      this.students.forEach((list, index) => {
        console.log(
          `${index + 1}. Student ID: ${list.studentID}\tName: ${
            list.name
          }\tAge: ${list.age}\t\tYear level: ${list.grade}`
        );
      });
      console.log("");
    }
  };

  this.deleteStudent = () => {
    this.find = String(input("Search to delete: "));

    this.index = this.students.findIndex((key) => {
      return key.name == this.find;
    });

    if (this.index !== -1) {
      console.log(`Student removed: ${this.students[this.index].name}`);
      this.students.splice(this.index, 1);
    } else {
      console.log("not found. try checking your spelling");
    }
  };
}

//main object instance
const USM = new School();

console.log(
  `\n\tWelcome to USM 
  \n[1] = add student\n[2] = list student\n[3] = delete student\n[4] = quit`
);

while (true) {
  userInput = Number(input(`Enter a value: `));

  if (userInput == 4) {
    console.log("You exited the program.");

    return;
  }

  switch (userInput) {
    case 1:
      USM.addStudent(new Student());
      break;
    case 2:
      USM.listStudent();
      break;
    case 3:
      USM.deleteStudent();
  }
}
