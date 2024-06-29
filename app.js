// Ejemplo de cómo consumir la API desde app.js
async function obtenerFacultades() {
  const url = 'URL_DE_TU_WEB_APP'; // Reemplaza con la URL de tu web app generada

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener datos');
    }
    const data = await response.json();
    console.log('Facultades:', data);
    // Aquí puedes procesar los datos recibidos
  } catch (error) {
    console.error('Error:', error);
  }
}

// Llama a la función para obtener datos de Facultad
obtenerFacultades();
