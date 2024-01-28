// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("organization key has value of 'nonprofit'", () => {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("executiveDirector key has value of 'Jeff'", () => {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("percentageCoolEmpoyees key has value of 100", () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("programsOffered key has value of ['Web Development', 'Data Analysis', 'Liftoff'", () => {
    expect(launchcode.programsOffered).toEqual(["Web Development", "Data Analysis", "Liftoff"]);
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("launchOutput() method returns different string value based on divisibility", () => {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
    expect(launchcode.launchOutput(3)).toBe("Code!");
    expect(launchcode.launchOutput(5)).toBe("Rocks!")
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
    expect(launchcode.launchOutput(1)).toBe("Rutabagas! That doesn't work.");

  });

});