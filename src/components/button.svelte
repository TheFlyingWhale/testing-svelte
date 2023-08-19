<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export const text = '';

	function click() {
		dispatch('click', () => {});
	}
</script>

<button on:click={click}><slot /></button>

<style>
	button {
		background-color: #e0e0e0;
		min-width: 10rem;
		flex: 1 1 0px;
		text-align: center;
		padding: 0.5rem;
		border-radius: 0.5rem;
		font-family: var(--font-family-primary);
	}

	button:hover {
		cursor: pointer;
	}
</style>
