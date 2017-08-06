var vm = new Vue({
  el: '#app',
  methods: {
    createTask: function()
    {
      this.tasks.push({
        description: this.new_task,
        pending: true,
        editing: false
      });

      this.new_task = '';
    }
  },
  data: {
    new_task: '',
    tasks: [
      {
        description: 'Aprender Vue js',
        pending: true,
        editing: false
      },
      {
        description: 'Suscribirse a Styde.net',
        pending: true,
        editing: true
      },
      {
        description: 'Grabar leccion',
        pending: false,
        editing: false
      }
    ]
  }
});
