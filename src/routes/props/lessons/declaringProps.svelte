<script>
	import Title from '../../../components/title.svelte';
	import Text from '../../../components/text.svelte';

	export let someTextProp = '';
</script>

<Title>Declaring props</Title>

<Text>Some Text Prop: {someTextProp}</Text>
