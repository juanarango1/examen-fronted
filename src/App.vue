<template>
  <div class="app-container">
    <nav class="nav-menu">
      <router-link to="/" class="nav-link">Vista General</router-link>
      <router-link to="/roles" class="nav-link">Roles</router-link>
      <router-link to="/usuarios" class="nav-link">Usuarios</router-link>
    </nav>
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
// No necesitas lógica aquí por ahora
</script>

<style>
.app-container {
  min-height: 100vh;
  background-color: #f0f2f5;
}

.nav-menu {
  background-color: #4CAF50;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255,255,255,0.1);
}

.nav-link.router-link-active {
  background-color: rgba(255,255,255,0.2);
}

.main-content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

nav {
  padding: 1rem;
  background: #2d3e50;
  margin-bottom: 2rem;
}
nav a {
  margin-right: 1rem;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
nav a.router-link-active {
  font-weight: bold;
  color: #ffd700;
}
nav a:hover {
  color: #ffd700;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 2rem;
}

form {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  margin-bottom: 2rem;
}

input, select, button {
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #bbb;
  margin-bottom: 1rem;
  width: 100%;
  box-sizing: border-box;
}

button {
  background: #2d3e50;
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}
button:hover {
  background: #1a2533;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #fff;
  margin-bottom: 0.5rem;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
</style>