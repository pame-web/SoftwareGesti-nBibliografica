// Función para cargar y mostrar los datos según la hoja seleccionada
function cargarDatosTabla(id) {
    var url = 'https://script.google.com/macros/s/AKfycbxSqi5cRv_08OABOdvsc3QGrm6xvmV4yF6fw2P2Fs51ax31839NQ2V80E5l7ggXz_FlyA/exec?sheet=' + id;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var tbody = document.getElementById('tabla' + id.charAt(0).toUpperCase() + id.slice(1) + 'Body'); // Ejemplo: 'tablaFacultadBody'
            tbody.innerHTML = ''; // Limpiar tabla antes de llenar

            data.forEach(item => {
                var row = document.createElement('tr');
                if (id === 'facultad') {
                    row.innerHTML = `
                        <td>${item.id}</td>
                        <td>${item.codigo_facultad}</td>
                        <td>${item.descripcion_facultad}</td>
                    `;
                } else if (id === 'materia') {
                    row.innerHTML = `
                        <td>${item.id}</td>
                        <td>${item.cod_materia}</td>
                        <td>${item.descripcion}</td>
                        <td>${item.credito}</td>
                    `;
                } else if (id === 'material') {
                    row.innerHTML = `
                        <td>${item.id}</td>
                        <td>${item.edición}</td>
                        <td>${item.autor}</td>
                        <td>${item.fecha}</td>
                        <td>${item.descripcion}</td>
                    `;
                }
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener datos:', error));
}
