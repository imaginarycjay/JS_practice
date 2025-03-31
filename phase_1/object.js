// objects in js
/* 
const bike = {
    drivetrain: "Shimano",
    brand : "Giant",
    speed : 8,
    wheelCircumference : 700,
    displayInfo : function () {
        return `Brand: ${this.brand}\nSpeed: ${this.speed}s`;
    }
}

console.log(bike.displayInfo()); */

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
} //constuctor function that makes an object (so object parin sya)

Book.prototype.summary = function () {
    return `Book title: ${this.title}, Book author: ${this.author}, Year: ${this.year}`;
};

const book1 = new Book('Art Of War', 'Lapiz Lazuli', 2021);
const book2 = new Book('Programming 69', 'CJ', 2025);


console.log(book1);
console.log(book2.summary());

console.log(typeof(book1));


