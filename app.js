// Función para obtener y mostrar datos de Facultad
async function obtenerFacultades() {
  const url = 'https://script.google.com/macros/s/AKfycbyrJyJ0mz3OkS4UNSoGN5f-rxX9MTj24ffyBL2o4sQ5H29LExgECo-oqJTA03FGLfSBYg/exec?tipo=facultad';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener datos de Facultades');
    }
    const data = await response.json();
    console.log('Facultades:', data);
    // Aquí puedes procesar los datos recibidos
  } catch (error) {
    console.error('Error:', error);
  }
}

// Función para obtener y mostrar datos de Materia
async function obtenerMaterias() {
  const url = 'https://script.google.com/macros/s/AKfycbyrJyJ0mz3OkS4UNSoGN5f-rxX9MTj24ffyBL2o4sQ5H29LExgECo-oqJTA03FGLfSBYg/exec?tipo=materia';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener datos de Materias');
    }
    const data = await response.json();
    console.log('Materias:', data);
    // Aquí puedes procesar los datos recibidos
  } catch (error) {
    console.error('Error:', error);
  }
}

// Función para obtener y mostrar datos de Material
async function obtenerMateriales() {
  const url = 'https://script.google.com/macros/s/AKfycbyrJyJ0mz3OkS4UNSoGN5f-rxX9MTj24ffyBL2o4sQ5H29LExgECo-oqJTA03FGLfSBYg/exec?tipo=material';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener datos de Materiales');
    }
    const data = await response.json();
    console.log('Materiales:', data);
    // Aquí puedes procesar los datos recibidos
  } catch (error) {
    console.error('Error:', error);
  }
}

// Llamar a las funciones para obtener y mostrar los datos
obtenerFacultades();
obtenerMaterias();
obtenerMateriales();
