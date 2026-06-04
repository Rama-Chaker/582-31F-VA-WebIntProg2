// 1.
// Create a Book class with:
//  title
//  pages
//  getter summary
//  getter/setter for pages
//  static method isValidPageCount()
class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    get summary() {
        return `${this.title} has ${this.__pages} pages.`;
    }

    get pages() {
        return this.__pages;
    }

    set pages(value) {
        if (Book.isValidPageCount(value)) {
            this.__pages = value;
        } else {
            throw new Error("Invalid page count.");
        }
    }

    static isValidPageCount(pages) {
        return typeof pages === "number" && pages > 0 && Number.isInteger(pages);
    }
}
const myBook = new Book("The Great Gatsby", 180);
console.log(myBook.summary);
// const anotherBook = new Book("Invalid Book", -50); 
// console.log(anotherBook.summary);

// 2.
// Create a BankAccount class with:
//  owner
//  balance
//  getter for balance
//  setter that rejects negative balances
//  static method isValidAmount()
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    get balance() { 
        return this.__balance;
    }
    static isValidAmount(amount) {
        return typeof amount === "number" && amount >= 0;
    }
    set balance(value) {
        if (BankAccount.isValidAmount(value)) {
            this.__balance = value;
        } else {
            throw new Error("Invalid balance amount.");
        }
    }
    
}

const myAccount = new BankAccount("Alice", 1000);
console.log(myAccount.balance);
// const myAccount2 = new BankAccount("Bob", -500); 
// console.log(myAccount2.balance);
// 3.
// Create a Course class with:
//  title
//  credits
//  getter label
//  getter/setter for credits
//  static property for schoolName

class Course {
    static schoolName = "University of Learning";

    constructor(title, credits) {
        this.title = title;
        this.credits = credits;
    }
    get label() {
        return `${this.title} (${this.__credits} credits)`;
    }
    get credits() {
        return this.__credits;
    }
    set credits(value) {
        if (typeof value === "number" && value > 0) {
            this.__credits = value;  
        } else {
            throw new Error("Invalid credit value.");
        }
    }
}

const myCourse = new Course("Introduction to Programming", 3);
console.log(myCourse.label);
// const myCourse2 = new Course("Advanced Mathematics", -2); 
// console.log(myCourse2.label);
// 4.
// Create a class called Movie.

// Code the following:
//  constructor with title and rating
//  getter description that returns something like:
//  "Inception has a rating of 9"
//  getter/setter for rating
//  setter must reject values outside 0–10
//  static method isValidRating(value)

class Movie {
    constructor(title, rating) {
        this.title = title;
        this.rating = rating;
    }
    get description() {
        return `${this.title} has a rating of ${this.__rating}`;
    }

    get rating() {
        return this.__rating;
    }

    set rating(value) {
        if (Movie.isValidRating(value)) {
            this.__rating = value;
        } else {
            throw new Error("Invalid rating. Please enter a value between 0 and 10.");
        }
    }

    static isValidRating(rating) {
        return typeof rating === "number" && rating >= 0 && rating <= 10;
    }
}
const myMovie = new Movie("Inception", 9);
console.log(myMovie.description);
// const myMovie2 = new Movie("The Room", 11);
// console.log(myMovie2.description);