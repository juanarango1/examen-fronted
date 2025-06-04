<template>
  <div class="usuarios-container">
    <h2>Gestión de Usuarios</h2>
    <div class="form-container">
      <form @submit.prevent="addUsuario">
        <input 
          v-model="form.nombres" 
          placeholder="Nombres" 
          required 
          class="form-input"
        />
        <input 
          v-model="form.apellidos" 
          placeholder="Apellidos" 
          required 
          class="form-input"
        />
        <input 
          v-model="form.identificacion" 
          placeholder="Identificación" 
          required 
          class="form-input"
        />
        <input 
          v-model="form.correo" 
          type="email" 
          placeholder="Correo electrónico" 
          required 
          class="form-input"
        />
        <select 
          v-model="form.rolId" 
          required 
          class="form-input"
          :disabled="roles.length === 0"
        >
          <option value="">Seleccione un rol</option>
          <option v-for="role in roles" :key="role.id" :value="role.id">
            {{ role.nombre }}
          </option>
        </select>
        <button 
          type="submit" 
          class="btn-primary"
          :disabled="roles.length === 0"
        >
          Agregar Usuario
        </button>
      </form>
    </div>
    <div class="usuarios-list">
      <h3>Usuarios Registrados</h3>
      <ul>
        <li v-for="usuario in usuarios" :key="usuario.id" class="usuario-item">
          {{ usuario.nombres }} {{ usuario.apellidos }} - 
          {{ getRolNombre(usuario.rolId) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getUsuarios, createUsuario, getRoles, Usuario, Role } from '../services/api';

const usuarios = ref<Usuario[]>([]);
const roles = ref<Role[]>([]);
const form = ref({
  nombres: '',
  apellidos: '',
  identificacion: '',
  correo: '',
  rolId: ''
});

const fetchUsuarios = async () => {
  usuarios.value = await getUsuarios();
};

const fetchRoles = async () => {
  roles.value = await getRoles();
};

const getRolNombre = (rolId: number) => {
  const rol = roles.value.find(r => r.id === rolId);
  return rol ? rol.nombre : 'Rol no encontrado';
};

const addUsuario = async () => {
  await createUsuario(form.value);
  form.value = {
    nombres: '',
    apellidos: '',
    identificacion: '',
    correo: '',
    rolId: ''
  };
  fetchUsuarios();
};

onMounted(() => {
  fetchRoles();
  fetchUsuarios();
});
</script>

<style scoped>
.usuarios-container {
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

.btn-primary:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.btn-primary:hover:not(:disabled) {
  background-color: #45a049;
}

.usuarios-list {
  margin-top: 20px;
}

.usuario-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style> 