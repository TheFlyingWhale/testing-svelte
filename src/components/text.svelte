<script lang="ts">
	import type { TextSize } from '../styles/determineTextSize';
	import determineTextSize from '../styles/determineTextSize';

	export let size: TextSize = 'sm';
</script>

<p style="--text-size:{determineTextSize(size)};">
	<slot />
</p>

<style>
	p {
		color: var(--color-text-primary);
		font-family: var(--font-family-primary);
		font-size: var(--text-size);
	}
</style>
