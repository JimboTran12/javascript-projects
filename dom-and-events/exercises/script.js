function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");
  
    

    // Put your code for the exercises here.
 
    button.addEventListener("click", function(event ){paragraph.innerHTML = "Houston, we have liftoff!";});
    missionAbort.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "red";
    });
    missionAbort.addEventListener("mouseout", function(event) {
        event.target.style.backgroundColor = "";
    });
    missionAbort.addEventListener("click", function(event) {
        let confirm = window.confirm("Are you sure you want to abort the mission?");
        if (confirm) {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
        }
    });

    
}

window.addEventListener("load", init);
