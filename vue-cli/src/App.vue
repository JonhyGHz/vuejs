<template>
  <div id="app" class="container">

    <app-task-list :tasks="tasks"></app-task-list>


    <p><a @click="deleteCompleted">Eliminar tareas completadas</a></p>
    
    <app-task-form @created="createTask"></app-task-form>

    <footer class="footer">
      <p>&copy; 2017 zaratedev.com</p>
    </footer>
  </div>
</template>

<script>
  import TaskList from './TaskList.vue'
  import TaskForm from './TaskForm.vue'
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
      ],
      tasks2: [{
          description: 'Aprender Vue js',
          pending: true,
        },
        {
          description: 'Suscribirse a www.zarate.com',
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
    'app-task-list': TaskList,
    'app-task-form': TaskForm
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


<style lang="scss">
  body {
    margin: 10px;
}

.container {
    max-width: 650px;
    h2 {
      margin-bottom: 20px;
    }
    footer {
      margin: 40px 0;
      padding-top: 20px;
      border-top: 1px solid #ccc;
      color: #999;
    }
}

</style>





