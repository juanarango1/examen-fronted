# Sistema de Gestión de Usuarios y Roles

Este es un sistema web desarrollado con Vue.js para la gestión de usuarios y roles. El sistema permite crear roles, asignar usuarios a roles y visualizar la información de manera organizada.

## Características

- Gestión de Roles
  - Crear roles con nombre y descripción
  - Listar roles existentes
  - Validación de campos requeridos

- Gestión de Usuarios
  - Crear usuarios con información personal
  - Asignar roles a usuarios
  - Validación de campos requeridos
  - Restricción: Solo se pueden crear usuarios si existen roles

- Vista General
  - Visualización combinada de usuarios y roles
  - Interfaz dividida en dos secciones
  - Información detallada de cada elemento

## Tecnologías Utilizadas

- Frontend:
  - Vue.js 3
  - TypeScript
  - Vue Router
  - Axios
  - Vite

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/juanarango1/examen-fronted.git
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── Roles.vue         # Componente para gestión de roles
│   ├── Usuarios.vue      # Componente para gestión de usuarios
│   └── VistaGeneral.vue  # Componente para vista combinada
├── services/
│   └── api.ts           # Servicios de API
├── router/
│   └── index.ts         # Configuración de rutas
└── App.vue              # Componente principal
```

## Uso

1. **Gestión de Roles**
   - Navega a la sección "Roles"
   - Completa el formulario con el nombre del rol
   - Opcionalmente agrega una descripción
   - Haz clic en "Agregar Rol"

2. **Gestión de Usuarios**
   - Navega a la sección "Usuarios"
   - Completa el formulario con los datos del usuario
   - Selecciona un rol de la lista desplegable
   - Haz clic en "Agregar Usuario"

3. **Vista General**
   - Navega a la página principal
   - Visualiza la lista de usuarios y sus roles
   - Visualiza la lista de roles existentes

## API Endpoints

El sistema se comunica con un backend que proporciona los siguientes endpoints:

- Roles:
  - GET /roles - Obtener todos los roles
  - POST /roles - Crear un nuevo rol

- Usuarios:
  - GET /usuarios - Obtener todos los usuarios
  - POST /usuarios - Crear un nuevo usuario

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia ISC.

## Contacto

Juan Diego Patiño - juan.patino02@unicatolica.edu.co

