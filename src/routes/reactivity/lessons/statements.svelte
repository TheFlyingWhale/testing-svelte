<script>
	import Button from '../../../components/button.svelte';
	import Title from '../../../components/title.svelte';
	import Text from '../../../components/text.svelte';

	let count = 0;

	$: console.log(`\nThis is a single reactive statement, count: ${count}`);

	$: {
		console.log('This is a multiple reactive statement');
		console.log(`Count: ${count}`);
	}

	$: if (count === 5) {
		console.log('This will only log when the count equals 5');
	}

	const increment = () => {
		count = count + 1;
	};
</script>

<Title>Statements</Title>
<Text>When the count is incremented the count will be logged</Text>
<Button on:click={increment}>Count: {count}</Button>
