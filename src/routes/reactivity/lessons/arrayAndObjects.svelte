<script>
	import Title from '../../../components/title.svelte';
	import Text from '../../../components/text.svelte';
	import Button from '../../../components/button.svelte';

	let numbers = [1, 2, 3, 4, 5];

	const information = {
		lastAddedNumber: 0,
		addedNumber: 0
	};

	const addNumberWithPush = () => {
		information.lastAddedNumber = numbers.length;
		information.addedNumber = numbers.length + 1;
		numbers.push(numbers.length + 1);
		numbers = numbers;
	};

	const addWithoutPush = () => {
		information.lastAddedNumber = numbers.length;
		information.addedNumber = numbers.length + 1;
		numbers = [...numbers, numbers.length + 1];
	};
</script>

<Title>Updating arrays and objects</Title>
<Text>Numbers in array: [{numbers.join(',')}]</Text>
<Text>Last added number: {information.lastAddedNumber}</Text>
<Text>AddedNumber: {information.addedNumber}</Text>
<Button on:click={addNumberWithPush}>With push</Button>
<Button on:click={addWithoutPush}>Without push</Button>
