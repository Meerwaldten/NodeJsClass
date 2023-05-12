<script>
    import { BASE_URL, myUsername, colorsList} from "../../stores/globalStore.js";

    let username = "";

    async function handleRegistration() {
        fetch($BASE_URL + "/register", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({ username }),
            headers: {
                "Content-Type": "application/json"
            },
        });
        myUsername.set(username);
    }
</script>


<h1>Please sign up</h1>
<input placeholder="username..." bind:value={username}>
<button on:click={handleRegistration}>Register now</button>