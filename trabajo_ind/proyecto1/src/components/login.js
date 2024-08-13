import React, { useState } from 'react';
import autenticar from '../services/auth';

const Login = () => {
  const [nombreUsuario, setnombreUsuario] = useState('');
  const [Contraseña, setContraseña] = useState('');
  const [rol, setRol] = useState(''); // paciente, médico, administrador
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const datos = await autenticar(nombreUsuario, Contraseña, rol);
      if (datos) {
        // Autenticación exitosa, redirigir al dashboard correspondiente
        if (rol === 'paciente') {
          // Redirigir al dashboard del paciente
        } else if (rol === 'médico') {
          // Redirigir al dashboard del médico
        } else if (rol === 'administrador') {
          // Redirigir al dashboard del administrador
        }
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (error) {
      setError('Error al autenticar');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de usuario:
          <input type="text" value={nombreUsuario} onChange={(e) => setnombreUsuario(e.target.value)} />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="contraseña" value={Contraseña} onChange={(e) => setContraseña(e.target.value)} />
        </label>
        <br />
        <label>
          Rol:
          <select value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value="paciente">Paciente</option>
            <option value="médico">Médico</option>
            <option value="administrador">Administrador</option>
          </select>
        </label>
        <br />
        <button type="submit">Iniciar sesión</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  );
};

export default Login;