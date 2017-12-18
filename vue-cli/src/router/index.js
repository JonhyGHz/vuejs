import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'components/Dashboard.vue'
import Tasks from 'components/Task/Task.vue'
import TaskDetails from 'components/Task/Details.vue'

Vue.use(Router)

var router = new Router({
	routes: [
		{
			path: '/',
			component: Dashboard
		},
		{
			path: '/tasks',
			component: Tasks
		},
		{
			path: '/tasks/:id',
			component: TaskDetails,
			props: true
		}
	]
});

export default router