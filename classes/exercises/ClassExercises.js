// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, ISBN, numPages, numChecks, isDiscarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.numChecks = numPages;
        this.numChecks = numChecks;
        this.isDiscarded = isDiscarded;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, ISBN, numPages, numChecks, isDiscarded)  {
        super(title, author, copyrightDate, ISBN, numPages, numChecks, isDiscarded);
    }
    update () {
        if (2023 - this.copyrightDate > 5) {
            this.isDiscarded = true;
            console.log(`${this.title} is discarded.`)
        }
    }
    
}

class Novel extends Book {
    constructor(title, author, copyrightDate, ISBN, numPages, numChecks, isDiscarded) {
        super(title, author, copyrightDate, ISBN, numPages, numChecks, isDiscarded);
    }
    update() {
        if (this.numChecks > 100) {
            this.isDiscarded = true;
            console.log(`${this.title} is discarded.`)
        }
    }
}



// Declare the objects for exercises 2 and 3 here:
let PaP = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, false);
let buildingManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, false)
// Code exercises 4 & 5 here:

PaP.update();
buildingManual.update();
console.log(PaP.numChecks);
PaP.numChecks += 5;
console.log(PaP.numChecks);