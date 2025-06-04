<template>
  <div class="roles-container">
    <h2>Gestión de Roles</h2>
    <div class="form-container">
      <form @submit.prevent="addRole">
        <input 
          v-model="form.nombre" 
          placeholder="Nombre del rol" 
          required 
          class="form-input"
        />
        <input 
          v-model="form.descripcion" 
          placeholder="Descripción (opcional)" 
          class="form-input"
        />
        <button type="submit" class="btn-primary">Agregar Rol</button>
      </form>
    </div>
    <div class="roles-list">
      <h3>Roles Existentes</h3>
      <ul>
        <li v-for="role in roles" :key="role.id" class="role-item">
          {{ role.nombre }} - {{ role.descripcion || 'Sin descripción' }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getRoles, createRole, Role } from '../services/api';

const roles = ref<Role[]>([]);
const form = ref({ nombre: '', descripcion: '' });

const fetchRoles = async () => {
  roles.value = await getRoles();
};

const addRole = async () => {
  await createRole(form.value);
  form.value = { nombre: '', descripcion: '' };
  fetchRoles();
};

onMounted(fetchRoles);
</script>

<style scoped>
.roles-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.form-container {
  margin-bottom: 30px;
}

.form-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn-primary {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #45a049;
}

.roles-list {
  margin-top: 20px;
}

.role-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style> 