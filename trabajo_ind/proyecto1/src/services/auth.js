const apiUrl = 'https://tu-api-url.com/api'; // reemplaza con la URL de tu API

/**
 * Autentica un usuario en la API
 * @param {string} nombreUsuario - Nombre de usuario
 * @param {string} Contraseña - Contraseña
 * @param {string} rol - Rol del usuario (paciente, médico, administrador)
 * @returns {Promise<object|null>} Datos del usuario autenticado o null si hay un error
 */
const autenticar = async (username, password, role) => {
  try {
    const respuesta = await fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, role }),
    });
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default autenticar;