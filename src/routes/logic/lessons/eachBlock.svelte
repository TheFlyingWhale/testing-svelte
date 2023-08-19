<script>
	import Text from '../../../components/text.svelte';
	import Title from '../../../components/title.svelte';

	const people = [
		{
			name: 'Ole',
			age: 27
		},
		{
			name: 'Eric',
			age: 27
		},
		{
			name: 'Nicolas',
			age: 23
		}
	];
</script>

<Title>Each blocks</Title>

{#each people as person}
	<Text>Name: {person.name}</Text>
	<Text>Age: {person.age}</Text>
{/each}
