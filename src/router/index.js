import { createMemoryHistory, createRouter } from 'vue-router'

import TableView from '@/views/TableView.vue'
import FormView from '@/views/FormView.vue'

const routes = [
  { path: '/', component: TableView },
  { path: '/product', component: FormView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
