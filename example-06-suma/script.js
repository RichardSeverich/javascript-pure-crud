function handleClick() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const suma = parseInt(numero1) + parseInt(numero2);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "La suma es: " + suma;
    console.log("La suma es: " + suma);
    alert("La suma es: " + suma)
}
