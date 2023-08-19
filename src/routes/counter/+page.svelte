<script lang="ts">
	import Button from '../../components/button.svelte';
	import Text from '../../components/text.svelte';
	import Title from '../../components/title.svelte';

	let count = 0;

	const incCount = () => {
		count = count + 1;
	};

	const decCount = () => {
		count = count - 1;
	};
</script>

<div class="main">
	<div class="container">
		<Title level={1} size="xl">Counter application</Title>
		<Text size="sm">Count: {count}</Text>
		<div class="button-container">
			<Button on:click={decCount}>Decrease</Button>
			<Button on:click={incCount}>Increase</Button>
		</div>
	</div>
</div>

<style>
	.main {
		background-color: var(--color-background-primary);

		width: 100%;
		height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container {
		background-color: white;

		width: 50%;

		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 1rem;

		padding: 2.5rem;
		border-radius: 1rem;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

		text-align: center;
	}

	.button-container {
		display: flex;
		gap: 1rem;
	}
</style>
