<script>
	import LessonLinks from '../../components/lessonLinks.svelte';
	import Navbar from '../../components/navbar.svelte';
	import Title from '../../components/title.svelte';
	import ArrayAndObjects from './lessons/arrayAndObjects.svelte';
	import Assignments from './lessons/assignments.svelte';
	import Declarations from './lessons/declarations.svelte';
	import Statements from './lessons/statements.svelte';
</script>

<Navbar title="Reactivity" />

<Title>Assignment</Title>

<Assignments />

<Declarations />

<Statements />

<ArrayAndObjects />
