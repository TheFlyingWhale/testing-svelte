<script>
	import Button from '../../../components/button.svelte';
	import Text from '../../../components/text.svelte';
	import Title from '../../../components/title.svelte';

	let count = 0;

	const increment = () => {
		count = count + 1;
	};
</script>

<Title>Else blocks</Title>
<Text>Count: {count}</Text>
<Button on:click={increment}>Increment</Button>

{#if count % 3 == 0}
	<Text>Count is dividable by 3</Text>
{:else}
	<Text>Count is not dividable by 3</Text>
{/if}
