<script lang="ts">
    import { requestHandler } from '../request_handler.svelte'
    
    function requestToken() {
        let date : Date = new Date(requestHandler.getExpireTime() * 1000);
        window.alert(date + "\n" + requestHandler.getAccessToken());
    }
</script>


<svelte:head>
    <title>Gamelog</title>
</svelte:head>
<h1 class="title">Gamelog</h1>
<button on:click={requestToken}>Home</button>
