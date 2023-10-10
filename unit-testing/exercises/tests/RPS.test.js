const RPS = require("../RPS.js");
describe("RPS", function() {
    test("returns 'TIE!' when two people tie", function() {
        //code here...
        let result = RPS.whoWon('rock','rock');
        expect(result).toEqual('TIE!');
     });
     test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
        let output = RPS.whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
     });
     
     test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = RPS.whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
     });
});