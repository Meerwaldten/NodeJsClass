<script>
    import io from "socket.io-client";

    const socket = io("localhost:8080");

    let chosenColor = "#000000";
  
    function handleColorChosen() {
        socket.emit("a client chose a color", { data: chosenColor });
        console.log("Button clicked", chosenColor);
    }

    socket.on("a new color just dropped", (data) => {
        // Brug ikke denne til svelte normalt, gør det med "store" og lad app.Svelte subscribe til det.
        // Det er ikek smart fordi det bypasser alt det smarte ved webframeworks, som er lavet for at gøre det mere effektivt
        document.body.style.backgroundColor = data.data; 
    });

  </script>
  
  <input type="color" bind:value={chosenColor}>
  <button on:click={handleColorChosen}>Send color</button>