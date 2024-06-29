function cargarDatosTabla(id) {
    var url = 'https://script.google.com/macros/s/AKfycbxJXhKQjwVXLOIskiVsCB3qXRVEUGpiwJgfPbz-8Lqc5uQumoY1OXz9fLcTrU9-94RdwA/exec?sheet=' + id;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Datos recibidos:', data); // Verifica qué datos estás recibiendo

            var tbody = document.getElementById('tabla' + id.charAt(0).toUpperCase() + id.slice(1) + 'Body');
            tbody.innerHTML = ''; // Limpiar tabla antes de llenar

            data.forEach(item => {
                var row = document.createElement('tr');
                if (id === 'facultad') {
                    console.log('Item de facultad:', item);
                    row.innerHTML = `
                        <td>${item.id}</td>
                        <td>${item.codigo_facultad}</td>
                        <td>${item.descripcion_facultad}</td>
                    `;
                } else if (id === 'materia') {
                    console.log('Item de materia:', item);
                    row.innerHTML = `
                        <td>${item.id}</td>
                        <td>${item.cod_materia}</td>
                        <td>${item.descripcion}</td>
                        <td>${item.credito}</td>
                    `;
                } else if (id === 'material') {
                    console.log('Item de material:', item);
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
