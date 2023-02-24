

const fetchedTanks = 
fetch("/api/tanks")
.then((response) => response.json())
.then(result => {
    const tanksWrapperDiv = document.getElementById("tanks-wrapper");

    result.data.forEach(tank => {
        const tankDiv = document.createElement("div");

        const tankName = document.createElement("p");
        const tankNationality = document.createElement("p");

        tankName.innerText = tank.name || "No name.";
        tankNationality.innerText = tank.nationality || "No Nationality";


        tankDiv.appendChild(tankName);
        tankDiv.appendChild(tankNationality);

        tanksWrapperDiv.appendChild(tankDiv);
    })
})

//console.log(result));

document.getElementsByName("tanks-wrapper").innerHTML = fetchedTanks;

console.log(fetchedTanks);
console.log("tanks er for vilde");