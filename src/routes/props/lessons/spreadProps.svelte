<script>
	import Text from '../../../components/text.svelte';
	import Title from '../../../components/title.svelte';

	export let thirdTextProp = 'This is the default third text prop';
	export let fourthTextProp = 'This is the default fourth text prop';
</script>

<Title>Spread props</Title>
<Text>This is the third text prop: {thirdTextProp}</Text>
<Text>This is the fourth text prop: {fourthTextProp}</Text>
