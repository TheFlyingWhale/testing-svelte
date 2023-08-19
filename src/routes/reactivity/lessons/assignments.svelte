<script>
	import Button from '../../../components/button.svelte';

	let count = 0;

	const increment = () => {
		count = count + 1;
	};
</script>

<Button on:click={increment}>Clicked {count}</Button>
