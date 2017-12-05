<template>
	<div>
		<h2 :class="$style.subtitle">Tareas</h2>
		<ul class="list-group tasks-list">
      		<app-task v-for="(task, index) in tasks" :tasks="tasks" :task="task" :index="index" @remove="deleteTask" :key="task.id"></app-task>
    	</ul>
	</div>
	


</template>

<script>
	import Task from './Task.vue'

	export default {
		components: {
			'app-task': Task
		},
		props: ['tasks'],
		methods: {
			deleteTask(index) {
      			this.tasks.splice(index, 1);
    		},
		}
	}

</script>

<style lang="scss">
	.tasks-list {
	    margin-bottom: 40px;
	}

</style>

<style lang="sass">
	.subtitle {
		color: blue;
	}
</style>