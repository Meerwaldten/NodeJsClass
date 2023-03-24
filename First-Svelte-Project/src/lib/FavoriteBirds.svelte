<script>
    import Bird from "./Bird.svelte";

    const birds = ["Dodo","Eagle", "Owl"];
    const birdEmoji = ["🦤","🦅","🦉"]

    let birdIndex = 0;
    let favoriteBird = birds[birdIndex];
    let favoriteBirdEmoji = birdEmoji[birdIndex];

    function changeFavoriteBird () {
        birdIndex = (birdIndex + 1) % birds.length;
        favoriteBird = birds[birdIndex];
        favoriteBirdEmoji = birdEmoji[birdIndex];
    }
</script>

<h1> Favorite bird!</h1>
<div on:click={changeFavoriteBird} on:keydown={changeFavoriteBird}>
<Bird 
    name={favoriteBird} 
    emoji={favoriteBirdEmoji}>
</Bird> 
</div>

<h2>All the birds I know of!</h2>
{#each birds as bird}
    <Bird name={bird}/>
{/each}

