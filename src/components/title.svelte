<script lang="ts">
	import type { TextSize } from '../styles/determineTextSize';
	import determineTextSize from '../styles/determineTextSize';

	type Level = 1 | 2 | 3 | 4 | 5 | 6;
	export let level: Level = 1;
	export let size: TextSize = 'md';
</script>

<svelte:element this={`h${level}`} style="--text-size:{determineTextSize(size)};">
	<slot />
</svelte:element>

<style>
	* {
		font-family: var(--font-family-primary);
		font-size: var(--text-size);
		font-weight: 500;
		color: var(--text-primary);
	}
</style>
