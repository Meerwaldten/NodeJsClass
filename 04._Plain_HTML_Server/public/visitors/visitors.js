fetch("/api/visitors")
.then(response => response.json())
.then(result => {
    updateVisitor(result.data)
    console.log(result);
})

function updateVisitor(visitorCount){
    const visitorCountDiv = document.getElementById("visitor-count");
    visitorCountDiv.innerText = visitorCount;
}



function writeInVisitorLog(){
    fetch("/api/visitors", {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(result => updateVisitor(result.data))
};