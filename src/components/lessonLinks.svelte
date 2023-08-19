<script lang="ts">
	import Title from './title.svelte';

	type LessonLink = {
		name: string;
		url: string;
	};
	const lessons: LessonLink[] = [
		{
			name: 'Reactivity',
			url: '/reactivity'
		},
		{
			name: 'Props',
			url: '/props'
		},
		{
			name: 'Logic',
			url: '/logic'
		}
	];
</script>

<Title>Lessons:</Title>
<ul>
	{#each lessons as lesson}
		<li>
			<a href={lesson.url}>{lesson.name}</a>
		</li>
	{/each}
</ul>
