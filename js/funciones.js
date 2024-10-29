var productos = [
  ["Chapata", 0.65],
  ["Baguette", 0.55],
  ["Pistola", 0.45],
];

function mostrarLista() {
  var productoss = document.getElementById("producto");
  for (let i = 0; i < productos.length; i++) {
    var producto = new Option(productos[i][0], productos[i][0]);
    productoss.options.add(producto);
    console.log(productos[i]);
  }
}

function cargarProductos() {}
