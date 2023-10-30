// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!\
  test("value of 'organization' is 'nonprofit'", function() {
    let output = launchcode.organization;
    expect(output).toBe("nonprofit");
  });

  test("value of 'executiveDirector' is 'Jeff'", function() {
    let output = launchcode.executiveDirector;
    expect(output).toBe("Jeff");
  });

  test("value of 'percentageCoolEmployees' is 100", function() {
    let output = launchcode.percentageCoolEmployees;
    expect(output).toBe(100);
  });

  test("value of 'programsOffered' is ['Web Development', 'Data Analysis', 'Liftoff']", function() {
    let output = launchcode.programsOffered;
    let arr = ['Web Development', 'Data Analysis', 'Liftoff'];
    expect(output).toEqual(arr);
  });
  test("When passed a number that is ONLY divisible by 2, launchOutput() returns 'Launch!'", function() {
    let output = launchcode.launchOuput(4);
    expect(output).toBe("'Launch!'");
  })
});