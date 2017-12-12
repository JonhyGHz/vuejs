<template>
	<div>
		<h2>Tareas</h2>
		<ul class="list-group tasks-list">
      		<app-task v-for="(task, index) in tasks" :tasks="tasks" :task="task" :index="index" @remove="deleteTask" :key="task.id"></app-task>
    	</ul>
	</div>
	


</template>

<script>
	import Task from './ListItem.vue'

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
	@import "src/sass/variable";
	.tasks-list {
	    margin-bottom: 40px;
	}
</style>