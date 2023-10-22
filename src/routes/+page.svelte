<script>
	import Game from "../lib/game.svelte";

</script>
<div id="main-container">
	<h1>Rock Paper Scissors</h1>
    <Game/>
</div>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:root {
		background-color: #04364a;
	}

    #main-container{
        padding: 24px 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
    }

	h1 {
		color: #64CCC5;
	}
</style>
