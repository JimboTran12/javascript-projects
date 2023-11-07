//TODO: Add Your Code Below
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        const json = response.json();
        json.then(function(json) {
            const h1 = document.querySelector("h1");
            h1.innerHTML += ` Count: ${json.length}`;
            const container = document.getElementById("container");
            let arr1 = [];
            for(let i = 0; i < json.length; i++) {
                arr1.push(json[i].hoursInSpace);
            }
            arr1.sort().reverse();

            for(let j = 0; j < arr1.length; j++) {
                for(let i = 0; i < json.length; i++) {
                    if (json[i].hoursInSpace === arr1[j]) {
                        if(json[i].active) {
                            container.innerHTML += `
                            <div class="astronaut">
                                <div class="bio">
                                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                    <ul>
                                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                                    <li style="color:green;" >Active: ${json[i].active}</li>
                                    <li>Skills: ${json[i].skills.join(", ")}</li>
                                    </ul>
                                </div>
                                <img class="avatar" src="${json[i].picture}">
                            </div>
                            `;
                        }
                        else {
                            container.innerHTML += `
                            <div class="astronaut">
                                <div class="bio">
                                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                    <ul>
                                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                                    <li>Active: ${json[i].active}</li>
                                    <li>Skills: ${json[i].skills.join(", ")}</li>
                                    </ul>
                                </div>
                                <img class="avatar" src="${json[i].picture}">
                            </div>
                        `;
                        }
                        
                    }
                }
                
            }
        });
    });
});
