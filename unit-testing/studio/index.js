
let launchcode = {
  organization: 'nonprofit',
  executiveDirector: 'Jeff',
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOuput: function(num) {
    if(num % 2 === 0) {
        if (num % 3 === 0) {
            if (num % 5 === 0) {
                return 'LaunchCode Rocks!';
            }
            return 'LaunchCode!';
        }
        if (num % 5 === 0) {
            return 'Launch Rocks!';
        }
        return 'Launch!';
    }
    if (num % 3 === 0) {
        return 'Launch';
    }
  },
}

module.exports = launchcode;

