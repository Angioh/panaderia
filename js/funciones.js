let productos = [
  ["Chapata", 0.65],
  ["Baguette", 0.55],
  ["Pistola", 0.45],
  ["Pan de masa madre", 0.75],
];

function mostrarProductos() {
  let productoss = document.getElementById("producto");
  for (const element of productos) {
    let producto = new Option(element[0], element[0]);
    productoss.options.add(producto);
  }
}

function cargarPrecio() {
  let listaProductos = document.getElementById("producto");
  let precio = document.getElementById("precio");
  let productSelect =
    listaProductos.options[listaProductos.selectedIndex].value;

  for (const element of productos) {
    if (productSelect == element[0]) {
      precio.value = element[1] + " €";
      precio.text = element[1];
      console.log(precio.text);
    }
  }
}

function addProducto() {
  let listaProductos = document.getElementById("producto");
  let cantidad = document.getElementById("cantidad").value;
  let tabla = document.getElementById("tablaProductos");
  let productSelect =
    listaProductos.options[listaProductos.selectedIndex].value;
  let precio = document.getElementById("precio").text;
  let total = cantidad * precio;

  if (cantidad.length < 1) {
    listaProductos.style.background = "red";
  } else {
    let fila = document.createElement("tr");
    fila.innerHTML = `<td>${productSelect}</td>
    <td value="${precio}" >${precio}€</td>
    <td>${cantidad}</td>
    <td value="${total.toFixed(2)}" >${total.toFixed(2)}€</td>
    <td>
      <input type="checkbox" name="" class="borrar" />
    </td>`;
    tabla.appendChild(fila);
    tabla.removeAttribute("hidden");
    listaProductos.style.background = "none";
  }
  console.log(tabla);
}
