<template>
	<div>
		<h2>Tareas</h2>
		<ul class="list-group tasks-list">
      		<list-item v-for="(task, index) in tasks" :tasks="tasks" :task="task" :index="index" @remove="deleteTask" :key="task.id"></list-item>
    	</ul>
	</div>
	


</template>

<script>
	import ListItem from './ListItem.vue'

	export default {
		components: {
			'list-item': ListItem
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