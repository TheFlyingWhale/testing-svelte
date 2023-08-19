<script>
	import Text from '../../../components/text.svelte';
	import Title from '../../../components/title.svelte';

	export let propWithDefaultValue = 'This is the default value';
</script>

<Title>Using default props</Title>
<Text>Default prop: {propWithDefaultValue}</Text>
