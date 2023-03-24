<script>
    export let name = "Simonse";
    export let greeting = "Skr dr"
  
    function changeGreeting() {
      if(greeting === "Hello"){
        greeting = "Goodbye"
      }else{
        greeting = "Hello"
      }
    }
  </script>
  
  <h1 on:click={changeGreeting} on:keydown={changeGreeting}>{greeting} {name}!</h1>
  
  
  
  <style>
    h1 {
      color: burlywood;
      user-select: none;
    }
    p {
      color: yellowgreen
    }
  </style>