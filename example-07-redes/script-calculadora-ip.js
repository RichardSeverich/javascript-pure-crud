function handleClick() {
  const ipDecimalFinal = document.getElementById("ip").value;
  const mascaraNum = document.getElementById("mascara-number").value;
  const contenedorTabla0 = document.getElementById("contenedor-tabla-0");
  const contenedorTabla1 = document.getElementById("contenedor-tabla-1");
  const contenedorTabla2 = document.getElementById("contenedor-tabla-2");
  const contenedorTabla3 = document.getElementById("contenedor-tabla-3");
  const contenedorTabla4 = document.getElementById("contenedor-tabla-4");

  const ipDecimalParts = ipDecimalFinal.split('.');
  const ipDecimal1 = ipDecimalParts[0];
  const ipDecimal2 = ipDecimalParts[1];
  const ipDecimal3 = ipDecimalParts[2];
  const ipDecimal4 = ipDecimalParts[3];

  if (!isIpValid(
    ipDecimalParts,
    ipDecimal1,
    ipDecimal2,
    ipDecimal3,
    ipDecimal4,
    mascaraNum,
  )) {
    alert("ip incorrecta o mascara incorrecta")
    return;
  }

  // CONVERTIR MASCARA NUMERO A BINARIO
  const mascaraNumero = parseInt(mascaraNum);
  // mascaraNumer = 24, mascaraBinario = 11111111.11111111.11111111.00000000
  const mascaraBinarioTotal = getMascaraFromNumberToBinary(mascaraNumero);
  // mascaraParts = [11111111.11111111.11111111.00000000]
  const mascaraParts = mascaraBinarioTotal.split('.');
  const mascaraBinario1 = mascaraParts[0];
  const mascaraBinario2 = mascaraParts[1];
  const mascaraBinario3 = mascaraParts[2];
  const mascaraBinario4 = mascaraParts[3];
  const mascaraTotal = mascaraBinario1 + mascaraBinario2 + mascaraBinario3 + mascaraBinario4;
  // CONVERTIR MASCARA BINARIO A DECIMAL
  const mascaraDecimal1 = binaryToDecimal(mascaraBinario1);
  const mascaraDecimal2 = binaryToDecimal(mascaraBinario2);
  const mascaraDecimal3 = binaryToDecimal(mascaraBinario3);
  const mascaraDecimal4 = binaryToDecimal(mascaraBinario4);
  const mascaraDecimalFinal = mascaraDecimal1
    + "." + mascaraDecimal2
    + "." + mascaraDecimal3
    + "." + mascaraDecimal4;

  // CONVERTIR IP A BINARIO.
  const ipRedBinario1 = decimalToBinary8Bits(ipDecimal1);
  const ipRedBinario2 = decimalToBinary8Bits(ipDecimal2);
  const ipRedBinario3 = decimalToBinary8Bits(ipDecimal3);
  const ipRedBinario4 = decimalToBinary8Bits(ipDecimal4);
  const ipRedBinarioTotal = ipRedBinario1 + ipRedBinario2 + ipRedBinario3 + ipRedBinario4;

  // DATOS
  const {
    direccionRedBinario,
    primeraDireccionBinario,
    ultimaDireccionBinario,
    broadcastBinario,
    cantidadBitsHosts
  } = encontrarDatosBinarios(ipRedBinarioTotal, mascaraTotal);

  // DIRECCION DE RED
  const direccionDeRedBinarioParts = direccionRedBinario.split('.');
  const direccionDeRedBinario1 = direccionDeRedBinarioParts[0];
  const direccionDeRedBinario2 = direccionDeRedBinarioParts[1];
  const direccionDeRedBinario3 = direccionDeRedBinarioParts[2];
  const direccionDeRedBinario4 = direccionDeRedBinarioParts[3];
  const direccionDeRedDecimal1 = binaryToDecimal(direccionDeRedBinario1);
  const direccionDeRedDecimal2 = binaryToDecimal(direccionDeRedBinario2);
  const direccionDeRedDecimal3 = binaryToDecimal(direccionDeRedBinario3);
  const direccionDeRedDecimal4 = binaryToDecimal(direccionDeRedBinario4);
  const direccionDeRedDecimalFinal = direccionDeRedDecimal1
    + "." + direccionDeRedDecimal2
    + "." + direccionDeRedDecimal3
    + "." + direccionDeRedDecimal4;

  // PRIMERA DIRECCION ASIGNABLE
  const primeraDireccionBinarioParts = primeraDireccionBinario.split('.');
  const primeraDireccionBinario1 = primeraDireccionBinarioParts[0];
  const primeraDireccionBinario2 = primeraDireccionBinarioParts[1];
  const primeraDireccionBinario3 = primeraDireccionBinarioParts[2];
  const primeraDireccionBinario4 = primeraDireccionBinarioParts[3];
  const primeraDireccionDecimal1 = binaryToDecimal(primeraDireccionBinario1);
  const primeraDireccionDecimal2 = binaryToDecimal(primeraDireccionBinario2);
  const primeraDireccionDecimal3 = binaryToDecimal(primeraDireccionBinario3);
  const primeraDireccionDecimal4 = binaryToDecimal(primeraDireccionBinario4);
  const primeraDireccionDecimalFinal = primeraDireccionDecimal1
    + "." + primeraDireccionDecimal2
    + "." + primeraDireccionDecimal3
    + "." + primeraDireccionDecimal4;

  // ULTIMA DIRECCION ASIGNABLE
  const ultimaDireccionBinarioParts = ultimaDireccionBinario.split('.');
  const ultimaDireccionBinario1 = ultimaDireccionBinarioParts[0];
  const ultimaDireccionBinario2 = ultimaDireccionBinarioParts[1];
  const ultimaDireccionBinario3 = ultimaDireccionBinarioParts[2];
  const ultimaDireccionBinario4 = ultimaDireccionBinarioParts[3];
  const ultimaDireccionDecimal1 = binaryToDecimal(ultimaDireccionBinario1);
  const ultimaDireccionDecimal2 = binaryToDecimal(ultimaDireccionBinario2);
  const ultimaDireccionDecimal3 = binaryToDecimal(ultimaDireccionBinario3);
  const ultimaDireccionDecimal4 = binaryToDecimal(ultimaDireccionBinario4);
  const ultimaDireccionDecimalFinal = ultimaDireccionDecimal1
    + "." + ultimaDireccionDecimal2
    + "." + ultimaDireccionDecimal3
    + "." + ultimaDireccionDecimal4;

  // BROADCAST
  const broadcastBinarioParts = broadcastBinario.split('.');
  const broadcastBinario1 = broadcastBinarioParts[0];
  const broadcastBinario2 = broadcastBinarioParts[1];
  const broadcastBinario3 = broadcastBinarioParts[2];
  const broadcastBinario4 = broadcastBinarioParts[3];
  const broadcastDecimal1 = binaryToDecimal(broadcastBinario1);
  const broadcastDecimal2 = binaryToDecimal(broadcastBinario2);
  const broadcastDecimal3 = binaryToDecimal(broadcastBinario3);
  const broadcastDecimal4 = binaryToDecimal(broadcastBinario4);
  const broadcastDecimalFinal = broadcastDecimal1
    + "." + broadcastDecimal2
    + "." + broadcastDecimal3
    + "." + broadcastDecimal4;

  // CREAR LAS TABLAS.
  contenedorTabla1.innerHTML = createTable(ipRedBinario1, mascaraBinario1, direccionDeRedBinario1, primeraDireccionBinario1, ultimaDireccionBinario1, broadcastBinario1);
  contenedorTabla2.innerHTML = createTable(ipRedBinario2, mascaraBinario2, direccionDeRedBinario2, primeraDireccionBinario2, ultimaDireccionBinario2, broadcastBinario2);
  contenedorTabla3.innerHTML = createTable(ipRedBinario3, mascaraBinario3, direccionDeRedBinario3, primeraDireccionBinario3, ultimaDireccionBinario3, broadcastBinario3);
  contenedorTabla4.innerHTML = createTable(ipRedBinario4, mascaraBinario4, direccionDeRedBinario4, primeraDireccionBinario4, ultimaDireccionBinario4, broadcastBinario4);
  contenedorTabla0.innerHTML = creteTableInformation(
    ipDecimalFinal,
    direccionDeRedDecimalFinal,
    mascaraDecimalFinal,
    mascaraNumero,
    primeraDireccionDecimalFinal,
    ultimaDireccionDecimalFinal,
    broadcastDecimalFinal,
    cantidadBitsHosts
  );
}


function isIpValid(
  ipDecimalParts,
  ipDecimal1,
  ipDecimal2,
  ipDecimal3,
  ipDecimal4,
  mascaraNum,
) {
  if (ipDecimalParts.length !== 4) {
    return false;
  } else if (!(/^\d*$/.test(ipDecimal1))) {
    return false;
  } else if (!(/^\d*$/.test(ipDecimal2))) {
    return false;
  } else if (!(/^\d*$/.test(ipDecimal3))) {
    return false;
  } else if (!(/^\d*$/.test(ipDecimal4))) {
    return false;
  } else if (!(/^\d*$/.test(mascaraNum))) {
    return false;
  } else if (parseInt(mascaraNum) > 30) {
    return false;
  }
  return true;
}

/**
 * 
 * @param {*} ipRed   
 * @param {*} mascara 
 * @returns 
 */
function encontrarDatosBinarios(ipRed, mascara) {
  let direccionRedBinario = "";
  let primeraDireccionBinario = "";
  let ultimaDireccionBinario = "";
  let broadcastBinario = "";
  let contadorPorcionDeRed = 0;
  let cantidadBitsHosts = 0;
  for (let index = 0; index < ipRed.length; index++) {
    if (mascara[index] === "1") {
      direccionRedBinario = direccionRedBinario + ipRed[index];
      primeraDireccionBinario = primeraDireccionBinario + ipRed[index];
      ultimaDireccionBinario = ultimaDireccionBinario + ipRed[index];
      broadcastBinario = broadcastBinario + ipRed[index];
    } else if (mascara[index] === "0") {
      cantidadBitsHosts++;
      direccionRedBinario = direccionRedBinario + "0";
      broadcastBinario = broadcastBinario + "1";
      if (index === ipRed.length - 1) {
        primeraDireccionBinario = primeraDireccionBinario + "1";
        ultimaDireccionBinario = ultimaDireccionBinario + "0";
      } else {
        primeraDireccionBinario = primeraDireccionBinario + "0";
        ultimaDireccionBinario = ultimaDireccionBinario + "1";
      }
    }
    contadorPorcionDeRed++;
    if (contadorPorcionDeRed === 8 && index !== ipRed.length - 1) {
      direccionRedBinario = direccionRedBinario + ".";
      primeraDireccionBinario = primeraDireccionBinario + ".";
      ultimaDireccionBinario = ultimaDireccionBinario + ".";
      broadcastBinario = broadcastBinario + ".";
      contadorPorcionDeRed = 0;
    }
  }
  return { direccionRedBinario, primeraDireccionBinario, ultimaDireccionBinario, broadcastBinario, cantidadBitsHosts };
}

function createTable(
  porcionDeRedBinario,
  mascaraPorcionRedBinario,
  direccionDeRedBinario,
  primeraDireccionBinario,
  ultimaDireccionBinario,
  broadcastBinario
) {
  const bitsPorPorcionDeRed = 8;
  const tablaInicio = "<table>";
  const tablaFinal = "</table >";
  const tableRowsInicio = "<tr>";
  const tableRowsFinal = "</tr>";
  let tableHeaders = tableRowsInicio;
  for (let index = 0; index < bitsPorPorcionDeRed; index++) {
    tableHeaders += "<th>bit " + (bitsPorPorcionDeRed - index) + " </th>";
  }
  tableHeaders += tableRowsFinal;

  let tableRow1 = tableRowsInicio;
  let tableRow2 = tableRowsInicio;
  let tableRow3 = tableRowsInicio;
  let tableRow4 = tableRowsInicio;

  let tableRow5 = tableRowsInicio;
  let tableRow6 = tableRowsInicio;
  let tableRow7 = tableRowsInicio;

  for (let columna = 0; columna < porcionDeRedBinario.length; columna++) {
    const classNameHost = "class-porcion-host";
    const classNameNet = "class-porcion-red";
    let nombreDeClase = classNameHost;
    if (mascaraPorcionRedBinario[columna] === "1") {
      nombreDeClase = classNameNet;
    }
    tableRow1 += "<td>" + Math.pow(2, bitsPorPorcionDeRed - columna - 1) + "</td>"
    tableRow2 += "<td class=\"" + nombreDeClase + "\">" + porcionDeRedBinario[columna] + "</td>";
    tableRow3 += "<td class=\"" + nombreDeClase + "\">" + direccionDeRedBinario[columna] + "</td>";
    tableRow4 += "<td class=\"" + nombreDeClase + "\">" + mascaraPorcionRedBinario[columna] + "</td>";
    tableRow5 += "<td class=\"" + nombreDeClase + "\">" + primeraDireccionBinario[columna] + "</td>";
    tableRow6 += "<td class=\"" + nombreDeClase + "\">" + ultimaDireccionBinario[columna] + "</td>";
    tableRow7 += "<td class=\"" + nombreDeClase + "\">" + broadcastBinario[columna] + "</td>";
  }
  tableRow1 += tableRowsFinal;
  tableRow2 += tableRowsFinal;
  tableRow3 += tableRowsFinal;
  tableRow4 += tableRowsFinal;
  tableRow5 += tableRowsFinal;
  tableRow6 += tableRowsFinal;
  tableRow7 += tableRowsFinal;
  const tableRows = tableRow1 + tableRow2 + tableRow3 + tableRow4 + tableRow5 + tableRow6 + tableRow7;
  return tablaInicio + tableHeaders + tableRows + tablaFinal;
}

function creteTableInformation(
  ipCualquiera,
  ipDeRed,
  mascaraRed,
  mascaraRedNumero,
  primeraDireccionDecimalFinal,
  ultimaDireccionDecimalFinal,
  broadcastDecimalFinal,
  cantidadBitsHosts
) {
  const tablaInicio = "<table>";
  const tablaFinal = "</table >";
  const tableRowsInicio = "<tr>";
  const tableRowsFinal = "</tr>";
  // Headers
  let tableHeaders = tableRowsInicio
  tableHeaders += "<th>Descripcion</th>" + "<th>Valor</th>";
  tableHeaders += tableRowsFinal;
  // Valores
  let tableRows = "";
  let tableRows0 = tableRowsInicio + "<td>CONVERSION</td>  <td></td>" + tableRowsFinal;
  let tableRows1 = tableRowsInicio + "<td>IP</td>" + "<td>" + ipCualquiera + "</td>" + tableRowsFinal;
  let tableRows2 = tableRowsInicio + "<td>DIRECCION RED</td>" + "<td>" + ipDeRed + " / " + mascaraRedNumero + "</td>" + tableRowsFinal;
  let tableRows3 = tableRowsInicio + "<td>MASCARA RED</td>" + "<td>" + mascaraRed + "</td>" + tableRowsFinal;
  let tableRows4 = tableRowsInicio + "<td>PRIMER HOST</td>" + "<td>" + primeraDireccionDecimalFinal + "</td>" + tableRowsFinal;
  let tableRows5 = tableRowsInicio + "<td>ULTIMO HOST</td>" + "<td>" + ultimaDireccionDecimalFinal + "</td>" + tableRowsFinal;
  let tableRows6 = tableRowsInicio + "<td>BROADCAST</td>" + "<td>" + broadcastDecimalFinal + "</td>" + tableRowsFinal;
  let tableRows7 = tableRowsInicio + "<td>CANTIDAD HOSTS</td>" + "<td>" + (Math.pow(2, cantidadBitsHosts) - 2) + "</td>" + tableRowsFinal;
  tableRows = tableRows0 + tableRows1 + tableRows2 + tableRows3 + tableRows4 + tableRows5 + tableRows6 + tableRows7;
  return tablaInicio + tableHeaders + tableRows + tablaFinal;
}

/**
 * 
 * @param {*} binary 11000000
 * @returns 192
 */
function binaryToDecimal(binary) {
  var array = binary.split('');
  var sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + Math.pow(2, array.length - 1 - i) * array[i];
  }
  return sum;
};

// input: 24
// output: 11111111.11111111.11111111.0000
function getMascaraFromNumberToBinary(mascaraNumer) {
  const totalBits = 32;
  let result = "";
  let contadorPorcionDeRed = 0;
  let mascaraNumerAux = mascaraNumer;
  for (let index = 0; index < totalBits; index++) {
    if (mascaraNumerAux > 0) {
      result = result + "1";
    } else {
      result = result + "0";
    }
    mascaraNumerAux--;
    contadorPorcionDeRed++;
    if (contadorPorcionDeRed === 8 && index !== totalBits - 1) {
      result = result + ".";
      contadorPorcionDeRed = 0;
    }
  }
  return result;
}

/**
 * 
 * @param {*} decimal 192
 * @returns 11000000
 */
function decimalToBinary8Bits(decimal) {
  let binario = "";
  if (decimal == 0) {
    return "00000000";
  }
  while (decimal > 0) {
    // if modulo of number with 2 is ‘1’,
    // append 1 in front of binario string.
    // Otherwise append 0.
    if (decimal % 2 == 1) {
      binario = "1" + binario;
    } else {
      binario = "0" + binario;
    }
    // divide number by 2.
    decimal = Math.floor(decimal / 2);
  }
  while (binario.length < 8) {
    binario = "0" + binario;
  }
  return binario;
}
