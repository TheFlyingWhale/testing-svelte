<script>
	import Button from '../../../components/button.svelte';
	import Text from '../../../components/text.svelte';
	import Title from '../../../components/title.svelte';

	let count = 0;
	$: doubled = count * 2;

	const increment = () => {
		count = count + 1;
	};
</script>

<Title>Declarations</Title>
<Button on:click={increment}>Increment</Button>
<Text>Current count: {count}</Text>
<Text>Doubled count: {doubled}</Text>
