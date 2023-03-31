<script>
  import { onMount } from "svelte";

  import { BASE_URL } from "./store/urlDomain.js";

  import Home from "./components/Home/Home.svelte";
  import Pibling from "./components/Pibling/Pibling.svelte";

  onMount(async () => {
    const response = await fetch("localhost:8080/piblings");
    const piblingsResponse = await response.json;
    console.log(piblingsResponse);
  });


  const piblings =  ["John", "Mark"];
  const niblings = [
    {
      id: 1,
      name: "Ann",
      isGirl: true,
      money: 0,
      cookies: []
    },
    {
      id: 2,
      name: "Amely",
      isGirl: true,
      blackSheep: "medium-black-sheep",
      money: 0,
      cookies: []
    },
    {
      id: 3,
      name: "Peter",
      blackSheep: "ultra-black-sheep",
      money: 0,
      cookies: []
    }
  ];

</script>

<Home>
    <h3>This is the svelte family</h3>
    <Pibling name={piblings[0]} niblings={niblings}/>
    <Pibling name={piblings[1]} niblings={niblings}/>
</Home>
