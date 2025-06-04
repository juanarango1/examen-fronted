import { createRouter, createWebHistory } from 'vue-router';
import Roles from '../components/Roles.vue'
import Usuarios from '../components/Usuarios.vue';
import VistaGeneral from '../components/VistaGeneral.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/roles',
      name: 'roles',
      component: Roles
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: Usuarios
    },
    {
      path: '/',
      name: 'vista-general',
      component: VistaGeneral
    }
  ]
});

export default router;