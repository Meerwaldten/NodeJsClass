<script>
    import Nibling from "../Nibling/Nibling.svelte";

    export let name;
    export let niblings = [];

    let cookies = ["🍪", "🍪", "🍪", "🍪", "🍪"];

    function handeShowLove(message) {
        console.log(message);
    }

    function handleGiveAllowance(message1){
        niblings[0].money =+ 10;
        niblings[1].money =+ 10;
        niblings[2].money =+ 10;
        console.log(message1);
    }

    function handleEatCookie(){
        if (cookies.length === 0){
            console.log("No more cookies to eat");
        }else {
            cookies.pop();
            cookies = cookies;
            console.log("Have a cookie");
        }
    }
</script>

<h3>{name}</h3>
<p>Cookie jar {cookies}</p>

{#each niblings as nibling (nibling.id)}
    <Nibling nibling={nibling} 
    onShowLove={handeShowLove} 
    piblingName={name} 
    onGiveAllowance={handleGiveAllowance} 
    onEatCookie={handleEatCookie} />
{/each}
