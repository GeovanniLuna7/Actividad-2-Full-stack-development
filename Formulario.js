// Formulario.js
import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre === '') {
      setError('El nombre es obligatorio');
    } else {
      setError('');
      // Aquí podrías hacer algo como enviar los datos a una API
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
