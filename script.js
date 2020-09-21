// Write your JavaScript code here!

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const missionTarger = document.getElementById("missionTarget");

            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>   
            <li>Name: ${json[3].name}</li>
            <li>Diameter: ${json[3].diameter}</li>
            <li>Star: ${json[3].star}</li>
            <li>Distance from Earth: ${json[3].distance}</li>
            <li>Number of Moons: ${json[3].moons}</li>
         </ol>
         <img src="${json[3].image}">

            `;
         ;
      });
             });

function myFunction() {
   document.getElementById("faultyItems").style.visibility = "visible";
 }
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      const v = "value"
      const pilotV= pilotNameInput[v]
      const copilotV = copilotNameInput[v]
      const fuelV = fuelLevelInput[v];
      const cargoV = cargoMassInput[v];

      let pilotMsg = pilotV;
      let copilotMsg = copilotV;
      let notEnoughFuelMsg = "Not enough fuel for the journey"
      let notReadyForLaunch = "Shuttle not ready for launch"
      let shuttleReadyForLaunch = "Shuttle is ready for launch"
     
      if (pilotV === "" || copilotV === "" || fuelV === "" || cargoV === "") {
         alert("All fields are required!");
      }
      else if (isNaN(pilotV) === false || isNaN(copilotV) === false || isNaN(fuelV) === true || isNaN(cargoV) === true) {
       alert("Invalid input");         
      }
      else if (fuelV < 10000) {
         myFunction();
         const fuelStatus = document.querySelector("#fuelStatus");
         fuelStatus.innerHTML = notEnoughFuelMsg;
         const launchStatus = document.querySelector("#launchStatus");
         launchStatus.innerHTML = notReadyForLaunch;
         document.getElementById("launchStatus").style.color = "red";

         
      }
      else {
         document.getElementById("launchStatus").style.color = "green"
         const launchStatus = document.querySelector("#launchStatus");
         launchStatus.innerHTML = shuttleReadyForLaunch;
      }

      




      const pilotStatus = document.querySelector("#pilotStatus");

      pilotStatus.innerHTML = pilotMsg;

      const copilotStatus = document.querySelector("#copilotStatus");

      copilotStatus.innerHTML = copilotMsg;

   });
});