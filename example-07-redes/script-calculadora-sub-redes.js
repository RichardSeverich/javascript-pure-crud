function handleCalcularSubRedes() {
    const direccionRedFinal = document.getElementById("ip").value;
    const mascaraNum = document.getElementById("mascara-number").value;
    const cantidadBitsPrestadosText = document.getElementById("cantidad-bits-prestados").value;
    const contenedorTabla0 = document.getElementById("contenedor-tabla-0");
    const contenedorTabla1 = document.getElementById("contenedor-tabla-1");
    const contenedorTabla2 = document.getElementById("contenedor-tabla-2");
    const contenedorTabla3 = document.getElementById("contenedor-tabla-3");
    const contenedorTabla4 = document.getElementById("contenedor-tabla-4");
    const cantidadDeBitsPrestados = {
        "1": { bitsPrestados: 1, subRedes: 2 },
        "2": { bitsPrestados: 2, subRedes: 4 },
        "3": { bitsPrestados: 3, subRedes: 8 },
        "4": { bitsPrestados: 4, subRedes: 16 },
        "5": { bitsPrestados: 5, subRedes: 32 },
        "6": { bitsPrestados: 6, subRedes: 64 },
        "7": { bitsPrestados: 7, subRedes: 128 },
        "8": { bitsPrestados: 8, subRedes: 256 },
    }
    const cantidadSubRedes = cantidadDeBitsPrestados[cantidadBitsPrestadosText].subRedes;
    const cantidadBitsPrestados = cantidadDeBitsPrestados[cantidadBitsPrestadosText].bitsPrestados;

    const direccionRedDecimalParts = direccionRedFinal.split('.');
    const direccionRedDecimal1 = direccionRedDecimalParts[0];
    const direccionRedDecimal2 = direccionRedDecimalParts[1];
    const direccionRedDecimal3 = direccionRedDecimalParts[2];
    const direccionRedDecimal4 = direccionRedDecimalParts[3];

    if (!isIpValid(
        direccionRedDecimalParts,
        direccionRedDecimal1,
        direccionRedDecimal2,
        direccionRedDecimal3,
        direccionRedDecimal4,
        mascaraNum,
    )) {
        alert("ip incorrecta o mascara incorrecta")
        return;
    }

    // Calcular mascara 1
    const mascaraNumero = parseInt(mascaraNum);
    const mascaraBinarioFinal = getMascaraFromNumberToBinary(mascaraNumero);
    const mascaraParts = mascaraBinarioFinal.split('.');
    const mascaraBinario1 = mascaraParts[0];
    const mascaraBinario2 = mascaraParts[1];
    const mascaraBinario3 = mascaraParts[2];
    const mascaraBinario4 = mascaraParts[3];
    // CONVERTIR MASCARA BINARIO A DECIMAL
    const mascaraDecimal1 = binaryToDecimal(mascaraBinario1);
    const mascaraDecimal2 = binaryToDecimal(mascaraBinario2);
    const mascaraDecimal3 = binaryToDecimal(mascaraBinario3);
    const mascaraDecimal4 = binaryToDecimal(mascaraBinario4);
    const mascaraDecimalFinal = mascaraDecimal1
        + "." + mascaraDecimal2
        + "." + mascaraDecimal3
        + "." + mascaraDecimal4;

    // Calcular nueva mascara
    const mascaraNumeroNew = parseInt(mascaraNumero + cantidadBitsPrestados);
    const mascaraBinarioFinalNew = getMascaraFromNumberToBinary(mascaraNumeroNew);
    const mascaraPartsNew = mascaraBinarioFinalNew.split('.');
    const mascaraBinarioNew1 = mascaraPartsNew[0];
    const mascaraBinarioNew2 = mascaraPartsNew[1];
    const mascaraBinarioNew3 = mascaraPartsNew[2];
    const mascaraBinarioNew4 = mascaraPartsNew[3];
    const mascaraBinarioTotal = mascaraBinarioNew1 + mascaraBinarioNew2 + mascaraBinarioNew3 + mascaraBinarioNew4;
    // CONVERTIR MASCARA BINARIO A DECIMAL
    const mascaraDecimalNew1 = binaryToDecimal(mascaraBinarioNew1);
    const mascaraDecimalNew2 = binaryToDecimal(mascaraBinarioNew2);
    const mascaraDecimalNew3 = binaryToDecimal(mascaraBinarioNew3);
    const mascaraDecimalNew4 = binaryToDecimal(mascaraBinarioNew4);
    const mascaraDecimalFinalNew = mascaraDecimalNew1
        + "." + mascaraDecimalNew2
        + "." + mascaraDecimalNew3
        + "." + mascaraDecimalNew4;

    const arraySubRedesBinario = encontrarSubRedes(
        cantidadSubRedes,
        cantidadBitsPrestados,
        direccionRedFinal,
        mascaraDecimalFinal
    );
    const arraySubRedesDecimal = arraySubRedesBinarioToDecimal(arraySubRedesBinario);
    contenedorTabla0.innerHTML = creteTableInformationSubRedes(
        direccionRedFinal,
        mascaraDecimalFinal,
        mascaraNumero,
        arraySubRedesDecimal,
        mascaraDecimalFinalNew,
        mascaraNumeroNew,
    );

    // CONVERTIR IP A BINARIO.
    const ipRedBinario1 = decimalToBinary8Bits(direccionRedDecimal1);
    const ipRedBinario2 = decimalToBinary8Bits(direccionRedDecimal2);
    const ipRedBinario3 = decimalToBinary8Bits(direccionRedDecimal3);
    const ipRedBinario4 = decimalToBinary8Bits(direccionRedDecimal4);
    contenedorTabla1.innerHTML = createTableSubRedes(ipRedBinario1, mascaraBinario1, mascaraBinarioNew1, arraySubRedesBinario, 0);
    contenedorTabla2.innerHTML = createTableSubRedes(ipRedBinario2, mascaraBinario2, mascaraBinarioNew2, arraySubRedesBinario, 1);
    contenedorTabla3.innerHTML = createTableSubRedes(ipRedBinario3, mascaraBinario3, mascaraBinarioNew3, arraySubRedesBinario, 2);
    contenedorTabla4.innerHTML = createTableSubRedes(ipRedBinario4, mascaraBinario4, mascaraBinarioNew4, arraySubRedesBinario, 3);
    console.log({ direccionRedFinal, mascaraNumero, arraySubRedesBinario, arraySubRedesDecimal });
}

function createTableSubRedes(
    porcionDeRedBinario,
    mascaraPorcionRedBinario,
    mascaraPorcionRedBinarioNew,
    arraySubRedesBinario,
    arraySubRedesBinarioPorcionIndex,
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

    for (let columna = 0; columna < porcionDeRedBinario.length; columna++) {
        const classNameHost = "class-porcion-host";
        const classNameNet = "class-porcion-red";
        let nombreDeClase = classNameHost;
        if (mascaraPorcionRedBinario[columna] === "1") {
            nombreDeClase = classNameNet;
        }
        tableRow1 += "<td>" + Math.pow(2, bitsPorPorcionDeRed - columna - 1) + "</td>"
        tableRow2 += "<td class=\"" + nombreDeClase + "\">" + porcionDeRedBinario[columna] + "</td>";
        tableRow3 += "<td class=\"" + nombreDeClase + "\">" + mascaraPorcionRedBinario[columna] + "</td>";
    }
    tableRow1 += tableRowsFinal;
    tableRow2 += tableRowsFinal;
    tableRow3 += tableRowsFinal;
    let tableRows = tableRow1 + tableRow2 + tableRow3;

    for (let columna = 0; columna < mascaraPorcionRedBinarioNew.length; columna++) {
        const classNameHost = "class-porcion-host";
        const classNameNet = "class-porcion-red";
        let nombreDeClase = classNameHost;
        if (mascaraPorcionRedBinarioNew[columna] === "1") {
            nombreDeClase = classNameNet;
        }
        tableRow4 += "<td class=\"" + nombreDeClase + "\">" + mascaraPorcionRedBinarioNew[columna] + "</td>";
    }

    tableRows += tableRow4;

    // PRINT SUB REDES
    let subRedPorcionBinario = "ValorSubRedPorcion";
    for (let indexSubRed = 0; indexSubRed < arraySubRedesBinario.length; indexSubRed++) {
        let tableRowX = tableRowsInicio;
        const subRedBinario = arraySubRedesBinario[indexSubRed];
        const subRedBinarioParts = subRedBinario.split('.');
        subRedPorcionBinario = subRedBinarioParts[arraySubRedesBinarioPorcionIndex];
        for (let columna = 0; columna < mascaraPorcionRedBinarioNew.length; columna++) {
            const classNameHost = "class-porcion-host";
            const classNameNet = "class-porcion-red";
            let nombreDeClase = classNameHost;
            if (mascaraPorcionRedBinarioNew[columna] === "1") {
                nombreDeClase = classNameNet;
            }
            tableRowX += "<td class=\"" + nombreDeClase + "\">" + subRedPorcionBinario[columna] + "</td>";
        }
        tableRowX += tableRowsFinal;
        tableRows += tableRowX;
    }

    return tablaInicio + tableHeaders + tableRows + tablaFinal;
}

function creteTableInformationSubRedes(
    direccionRedFinal,
    mascaraRed,
    mascaraRedNumero,
    arraySubRedesDecimal,
    mascaraDecimalFinalNew,
    mascaraNumeroNew,
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
    let tableRows1 = tableRowsInicio + "<td>RED PADRE</td>" + "<td>" + direccionRedFinal + " / " + mascaraRedNumero + "</td>" + tableRowsFinal;
    let tableRows2 = tableRowsInicio + "<td>MASCARA PADRE</td>" + "<td>" + mascaraRed + "</td>" + tableRowsFinal;
    let tableRows3 = tableRowsInicio + "<td>MASCARA HIJOS</td>" + "<td>" + mascaraDecimalFinalNew + "</td>" + tableRowsFinal;

    tableRows = tableRows0 + tableRows1 + tableRows2 + tableRows3;
    for (let index = 0; index < arraySubRedesDecimal.length; index++) {
        let tableRowsX = tableRowsInicio + "<td>SUB RED: " + (index + 1) + " </td>" + "<td>" + arraySubRedesDecimal[index] + " / " + mascaraNumeroNew + "</td>" + tableRowsFinal;
        tableRows = tableRows + tableRowsX;
    }
    return tablaInicio + tableHeaders + tableRows + tablaFinal;
}

/**
 * 
 * @param {*} arraySubRedesBinario ["11000000.10101000.00100000.00000000", "11000000.10101000.00100000.10000000"]
 * @returns ["192.168.32.0", "192.168.32.128"]
 */
function arraySubRedesBinarioToDecimal(arraySubRedesBinario) {
    const arraySubRedesDecimal = [];
    for (let index = 0; index < arraySubRedesBinario.length; index++) {
        const subRedBinario = arraySubRedesBinario[index];
        const subRedBinarioParts = subRedBinario.split('.');
        const arraySubRedesDecimalParts = [];
        for (let index2 = 0; index2 < subRedBinarioParts.length; index2++) {
            arraySubRedesDecimalParts.push(binaryToDecimal(subRedBinarioParts[index2]));
        }
        const subRedDecimalNew = arraySubRedesDecimalParts.toString().replace(/,/g, ".");
        arraySubRedesDecimal.push(subRedDecimalNew);
    }
    return arraySubRedesDecimal;
}

/**
 * 
 * @param {*} cantidadSubRedes  2
 * @param {*} cantidadBitsPrestados 1
 * @param {*} ipRed 192.168.32.0 // IP DE RED
 * @param {*} mascara 255.255.255.0 // Mascara antigua
 */
function encontrarSubRedes(
    cantidadSubRedes,
    cantidadBitsPrestados,
    ipRed,
    mascara
) {
    const mascaraParts = mascara.split('.');
    const ipRedParts = ipRed.split('.');
    const arraySubRedesBinario = [];
    let combinacionBit = "0";
    for (let numeroSubRed = 0; numeroSubRed < cantidadSubRedes; numeroSubRed++) {
        const subRed = [];
        for (let index1 = 0; index1 < mascaraParts.length; index1++) {
            const mascaraPorcionBinario = decimalToBinary8Bits(mascaraParts[index1]);
            const ipRedPorcionBinario = decimalToBinary8Bits(ipRedParts[index1]);
            let cantidadBitsPrestadosCounter = 0;
            let subRedPorcion = "";
            for (let bit = 0; bit < mascaraPorcionBinario.length; bit++) {
                if (mascaraPorcionBinario[bit] === "1") {
                    subRedPorcion = subRedPorcion + ipRedPorcionBinario[bit]
                } else if (mascaraPorcionBinario[bit] === "0" && cantidadBitsPrestadosCounter < cantidadBitsPrestados) {
                    subRedPorcion = subRedPorcion + combinacionBit;
                    // TODO: SOLO FUNCIONA PARA 1 BIT PRESTADO.
                    combinacionBit = combinacionBit === "1" ? "0" : "1";
                    cantidadBitsPrestadosCounter++;
                } else if (mascaraPorcionBinario[bit] === "0") {
                    subRedPorcion = subRedPorcion + "0";
                }
            }
            subRed.push(subRedPorcion);
        }
        const subRedNew = subRed.toString().replace(/,/g, ".");
        arraySubRedesBinario.push(subRedNew);
    }
    return arraySubRedesBinario;
}
