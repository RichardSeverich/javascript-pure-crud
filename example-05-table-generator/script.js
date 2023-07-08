function handleClick() {
  const numFilas = document.getElementById("filas").value;
  const numColumnas = document.getElementById("columnas").value;
  const contenedorTabla = document.getElementById("contenedor-tabla");
  let tablaHeader = "<table>";
  let tablaFooter = "</table >";
  let tableRows = "<tr>";
  let tableColumns = "";
  for (let i = 0; i < numColumnas; i++) {
    tableColumns += "<th>Columna" + i + "</th>";
  }
  tableColumns = tableColumns + "</tr>";
  for (let fila = 0; fila < numFilas; fila++) {
    tableRows += "<tr>";
    for (let columna = 0; columna < numColumnas; columna++) {
      tableRows += "<td>Fila - Columna " + fila + "-" + columna + "</td>";
    }
    tableRows += "</tr>";
  }
  contenedorTabla.innerHTML = tablaHeader + tableColumns + tableRows + tablaFooter;
}