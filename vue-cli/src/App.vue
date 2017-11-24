<template>
  <div id="app" class="container">
    <h2>Tareas</h2>

    <ul class="list-group tasks">
      <app-task v-for="(task, index) in tasks" :tasks="tasks" :task="task" :index="index" @remove="deleteTask" :key="task.id"></app-task>
    </ul>

    <p><a @click="deleteCompleted">Eliminar tareas completadas</a></p>
    <form @submit.prevent="createTask" class="new-task-form">
      <input v-model="new_task" type="text" class="form-control">
      <button class="btn btn-primary">Crear tarea</button>
    </form>

    <footer class="footer">
      <p>&copy; 2017 zaratedev.com</p>
    </footer>
  </div>
</template>

<script>
  import Task from './Task.vue'
export default {
  created() {
    this.tasks.forEach((task, index) => {
      this.$set(task, 'id', index + 1);
    })
    /*this.tasks.forEach(function (task, index) {
      this.$set(task, 'id', index + 1);
    }.bind(this))*/
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
    'app-task': Task
  },
  methods: {
    createTask() {
      this.tasks.push({
        description: this.new_task,
        pending: true,
        editing: false
      });

      this.new_task = '';
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    deleteCompleted() {
      this.tasks = this.tasks.filter(task => task.pending)
    }
  }
}
</script>