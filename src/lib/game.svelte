<script>
	let currentRound = 1;
	let playerScore = 0;
	let computerScore = 0;
</script>

<div id="game-frame">
	<h2>Round {currentRound}</h2>
	<p>Player: {playerScore} - Computer: {computerScore}</p>
</div>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	#game-frame {
		background-color: #176b87;
        padding: 12px;
		width: 800px;
		height: 600px;
		border-radius: 12%;
		box-shadow: 10px 5px 5px #072028;
		border: 2px solid black;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	h2 {
		color: #64ccc5;
        margin-bottom: 24px;
	}

    p{
        color: #DAFFFB
    }
</style>
