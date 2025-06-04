<template>
  <div class="vista-general-container">
    <h2>Vista General del Sistema</h2>
    
    <div class="grid-container">
      <div class="usuarios-section">
        <h3>Lista de Usuarios</h3>
        <ul class="list-container">
          <li v-for="usuario in usuarios" :key="usuario.id" class="list-item">
            <div class="item-content">
              <span class="nombre">{{ usuario.nombres }} {{ usuario.apellidos }}</span>
              <span class="rol">{{ getRolNombre(usuario.rolId) }}</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="roles-section">
        <h3>Lista de Roles</h3>
        <ul class="list-container">
          <li v-for="role in roles" :key="role.id" class="list-item">
            <div class="item-content">
              <span class="nombre">{{ role.nombre }}</span>
              <span class="descripcion">{{ role.descripcion || 'Sin descripción' }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getUsuarios, getRoles, Usuario, Role } from '../services/api';

const usuarios = ref<Usuario[]>([]);
const roles = ref<Role[]>([]);

const fetchData = async () => {
  usuarios.value = await getUsuarios();
  roles.value = await getRoles();
};

const getRolNombre = (rolId: number) => {
  const rol = roles.value.find(r => r.id === rolId);
  return rol ? rol.nombre : 'Rol no encontrado';
};

onMounted(fetchData);
</script>

<style scoped>
.vista-general-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.usuarios-section,
.roles-section {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}

.list-container {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  background: white;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nombre {
  font-weight: bold;
}

.rol,
.descripcion {
  color: #666;
  font-size: 0.9em;
}

h3 {
  margin-top: 0;
  color: #333;
  border-bottom: 2px solid #4CAF50;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
</style> 