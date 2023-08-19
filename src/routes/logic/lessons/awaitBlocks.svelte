<script>
	import Button from '../../../components/button.svelte';
	import Title from '../../../components/title.svelte';
	import Text from '../../../components/text.svelte';

	const getRandomNumber = async () => {
		console.log('Getting random number');
		const res = await fetch(
			'https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new'
		);

		if (res.ok) {
			console.log(res);
			return await res.text();
		}

		throw new Error('Request failed');
	};

	let promise = getRandomNumber();

	const handleClick = () => {
		promise = getRandomNumber();
	};
</script>

<Title>Await Blocks</Title>

<Button on:click={handleClick}>Generate Random number</Button>

{#await promise}
	<Text>Waiting for random number...</Text>
{:then number}
	<Text>The number is {number}</Text>
{:catch error}
	<Text>{error}</Text>
{/await}
