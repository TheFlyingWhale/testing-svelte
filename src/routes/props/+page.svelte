<script>
	import Navbar from '../../components/navbar.svelte';
	import DeclaringProps from './lessons/declaringProps.svelte';
	import DefaultProp from './lessons/defaultProp.svelte';
	import SpreadProps from './lessons/spreadProps.svelte';

	const spreadableProps = {
		thirdTextProp: 'Some text for the third prop',
		fourthTextProp: 'Some text for the forth prop'
	};
</script>

<Navbar title="Props" />

<DeclaringProps someTextProp="This is some text prop" />

<DefaultProp />

<SpreadProps {...spreadableProps} />
