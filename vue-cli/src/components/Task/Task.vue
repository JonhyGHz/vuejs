<template>
	<div>
		<task-list :tasks="tasks"></task-list>
    <p><a @click="deleteCompleted">Eliminar tareas completadas</a></p>
    <task-form @created="createTask"></task-form>
	</div>
</template>

<script>
	import TaskList from './List.vue'
  	import TaskForm from './CreateForm.vue'
	export default {
		created() {
    this.tasks.forEach((task, index) => {
      this.$set(task, 'id', index + 1);
    })
  },
  data() {
    return {
      new_task: '',
      tasks: [{
          description: 'Aprender Vue js',
          pending: true,
        },
        {
          description: 'Suscribirse a zarate.com',
          pending: true,
        },
        {
          description: 'Grabar leccion',
          pending: false,
        }
      ]
    }
  },
  components: {
    'task-list': TaskList,
    'task-form': TaskForm
  },
  methods: {
    createTask( task ){
      this.tasks.push(task)
    },
    deleteCompleted() {
      this.tasks = this.tasks.filter(task => task.pending)
    },
    alertTask( task ) {
      alert( task.description )
    }
  }
	}
</script>