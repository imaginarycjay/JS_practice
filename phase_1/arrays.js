// arrays in js

/* const listOfFoods = ['Tinapay', 'Tenola', 'Burger'];
console.log(listOfFoods[0]);
console.log(listOfFoods[1]);
console.log(listOfFoods[2]);

for (let i = 0; i < listOfFoods.length; i++){
    console.log(listOfFoods[i]);
} */

const prompt = require('prompt-sync')();


function manageBooks(){

    let books = [];
    let input;

    console.log("Book manager");

    function displayInfo(){
        for(let i = 0; i < books.length; i++){
            console.log(books[i]);
            
        }
    }

    function addBook(){
        const title = prompt('Book title: ')
        books.push(title);
        console.log('Book pushed!');
    }

    function removeBook(){
        books.pop();
    }

    while(true){

        input = Number(prompt(`1 = add, 2 = delete, 3 = display, 4 = stop: `));

        if(input == 4){
            break;
        }

        switch(input){
            case 1:
                addBook();
                break;
            case 2:
                removeBook();
                break;
            case 3:
                displayInfo()
                break;
            default:
                console.log('error');
        }
        
    }

}


manageBooks();
