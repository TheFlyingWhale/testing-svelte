<script>
	import LessonLinks from './lessonLinks.svelte';
	import Title from './title.svelte';

	export let title = 'No title provided';
</script>

<Title size="xl">{title}</Title>

<LessonLinks />
