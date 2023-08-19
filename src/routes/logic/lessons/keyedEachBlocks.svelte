<script>
	import Button from '../../../components/button.svelte';
	import Title from '../../../components/title.svelte';
	import FoodComp from './foodComp.svelte';

	let foods = [
		{
			id: 1,
			name: 'apple'
		},
		{
			id: 2,
			name: 'banana'
		},
		{
			id: 3,
			name: 'carrot'
		},
		{
			id: 4,
			name: 'doughnut'
		},
		{
			id: 5,
			name: 'egg'
		}
	];

	const handleClick = () => {
		foods = foods.slice(1);
	};
</script>

<Title>Keyed Each Blocks</Title>

<Button on:click={handleClick}>Remove first thing</Button>

{#each foods as food (food.id)}
	<FoodComp name={food.name} />
{/each}
