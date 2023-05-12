<script>
  import { onMount } from "svelte";
  import { BASE_URL, myUsername } from "./stores/globalStore";
  import Colors from "./pages/Colors/Colors.svelte";
  import Register from "./pages/Register/Register.svelte";

  onMount(async () => { 
    // onMount sker en gang i lifecycle, så det kan gøre data-breach sværer da fetch'en kun sker en gang og ikke hver gang den bliver opdateret.
    const response = await fetch($BASE_URL + "/users/me",
    {
      credentials: "include"
    });
    const result = await response.json();
    myUsername.set(result.data);
  });
</script>

{#if $myUsername}
  <Colors/>
{:else}
  <Register/>
{/if}


