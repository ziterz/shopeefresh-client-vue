import { createMemoryHistory, createRouter } from 'vue-router'

import TableView from '@/views/TableView.vue'
import FormAdd from '@/views/FormAdd.vue'
import FormEdit from '@/views/FormEdit.vue'

const routes = [
  { path: '/', name: 'home', component: TableView },
  { path: '/add', name: 'add', component: FormAdd },
  { path: '/edit/:id', name: 'edit', component: FormEdit }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
