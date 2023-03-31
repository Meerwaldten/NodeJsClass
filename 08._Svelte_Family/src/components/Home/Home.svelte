<script>
    import { fridgeMessages } from "../../store/fridgeMessages.js"

    function eraseFridgeMessages() {
        fridgeMessages.set([]);
    }
</script>

<h4>{$fridgeMessages}</h4>
<button on:click={eraseFridgeMessages}>Erase fridge messages</button>

<slot></slot> 
<!-- Injecter data ind i <Home></Home>, så vi kan skrive hvad vi vil inde i App.svelte som importer.
 Det er det samme som children i react? -->

 <p>-----------------------</p>
 <p> Welcome </p>
 <p>-----------------------</p>
