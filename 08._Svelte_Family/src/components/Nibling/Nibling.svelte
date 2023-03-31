<script>
    export let nibling;
    export let onShowLove;
    export let piblingName;
    export let onGiveAllowance;
    export let onEatCookie;

    import { fridgeMessages } from "../../store/fridgeMessages.js";

    let fridgeMessage = "";

    function handleWriteFridgeMessage(){
        //fridgeMessages.set([fridgeMessage]);

        //$fridgeMessages.push(fridgeMessage);
        //fridgeMessages.set($fridgeMessages);

        fridgeMessages.update((currentFridgeMessages) => {
            console.log(currentFridgeMessages);
            currentFridgeMessages.push(fridgeMessage);
            return currentFridgeMessages;
        });

        fridgeMessage = "";
    }
</script>

<div class:is-girl={nibling.isGirl}
     class:is-boy={!nibling.isGirl}
     class={nibling.blackSheep || "not-a-black-sheep"}>
{#if nibling.isGirl}
    <p>Niece: {nibling.name}</p>
{:else}                 <!-- kan laves til else if ved: else if !nibling.isGirl -->
    <p>Nephew: {nibling.name}</p>
{/if}
<p>Money: {nibling.money}</p>
</div>

<button on:click={() => onShowLove(`Hey ${piblingName}. It's me ${nibling.name} and I love you`)}>Show love</button>

<button on:click={() => onGiveAllowance(`${nibling.name} asks ${piblingName} for some allowance. ${piblingName} gave 100 DKK to the niblings.`)}>Ask for allowance</button>

<button on:click={() => onEatCookie()}>Eat a cookie</button>

<p>There are {$fridgeMessages.length} messages on the fridge.</p>
<input bind:value={fridgeMessage}>
<button on:click={() => handleWriteFridgeMessage()}> Write a message on the fridge</button>

<!-- Nedenunder er "inscope"-styling. Det kan vi godt li' -->
<style> 
    .is-girl {
        border: 2px solid blue;
    }
    .is-boy {
        border: 3px solid yellowgreen;
    }
    .not-a-black-sheep {
        background-color: aliceblue;
        color: black;
    }
    .medium-black-sheep {
        background-color: burlywood;
    }
    .ultra-black-sheep {
        background-color: brown;
    }
</style>