<template>
	
	<ul class="list-group tasks">
      <app-task v-for="(task, index) in tasks" :tasks="tasks" :task="task" :index="index" @remove="deleteTask" :key="task.id"></app-task>
    </ul>


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