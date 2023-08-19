<script lang="ts">
	import Text from '../../../components/text.svelte';

	type EmojiList = {
		[key: string]: string;
	};

	const emojis: EmojiList = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};

	export let name: string;

	const emoji = emojis[name];
</script>

<Text>{emoji} = {name}</Text>
