//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(score) {
        this.scores.push(score);
    }
    average() {
        let sum = 0;
        let average = -1;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        average = Math.round(sum / this.scores.length * 10) /10;
        return average;
    }
    status() {
        let avg = this.average();
        let str = "";
        if (avg >= 90) {
            str = "Accepted";
        }
        else if (avg >= 80) {
            str = "Reserve";
        }
        else if(avg >= 70) {
            str = "Probationary";
        }
        else {
            str = "Rejected";
        }
        return str;
    }
    print() {
        console.log(`${this.name} earned an average test score of ${this.average()}% and has a status of ${this.status()}.`);
    }
    improve() {
        let avg = this.average();
        let reserveTakes = 0;
        let acceptTakes = 0;
        if (avg < 80) {
            while(avg < 90) {
                this.scores.push(100);
                avg = this.average();
                acceptTakes++;
                if(avg < 80) {
                    reserveTakes++;
                }
            }
        }
        console.log(`${this.name} needs ${reserveTakes} exams to be Reserve and ${acceptTakes} to be accepted.`);
    }
}

let bear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let maltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
console.log(bear);
console.log(maltese);
console.log(gator);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

bear.addScore(83);
console.log(bear.scores);
console.log(maltese.average());
bear.print();
maltese.print();
gator.print();
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
gator.improve();