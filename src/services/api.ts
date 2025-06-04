import axios from 'axios';

const API_URL = 'https://examen-backend-eight.vercel.app';

export interface Role {
  id: number;
  nombre: string;
  descripcion?: string;
}

export interface Usuario {
  id: number;
  nombres: string;
  apellidos: string;
  identificacion: string;
  correo: string;
  rolId: number;
}

// Roles
export const getRoles = async (): Promise<Role[]> => {
  const response = await axios.get(`${API_URL}/roles`);
  return response.data;
};

export const createRole = async (role: Partial<Role>): Promise<Role> => {
  const response = await axios.post(`${API_URL}/roles`, role);
  return response.data;
};

// Usuarios
export const getUsuarios = async (): Promise<Usuario[]> => {
  const response = await axios.get(`${API_URL}/usuarios`);
  return response.data;
};

export const createUsuario = async (usuario: Partial<Usuario>): Promise<Usuario> => {
  const response = await axios.post(`${API_URL}/usuarios`, usuario);
  return response.data;
}; 