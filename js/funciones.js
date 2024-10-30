let productos = [
  ["Chapata", 0.65],
  ["Baguette", 0.55],
  ["Pistola", 0.45],
];

function mostrarProductos() {
  let productoss = document.getElementById("producto");
  for (let i = 0; i < productos.length; i++) {
    let producto = new Option(productos[i][0], productos[i][0]);
    productoss.options.add(producto);
  }
}

function cargarPrecio() {
 let listaProductos = document.getElementById("producto");
 let listaPrecios = document.getElementById("precio");
 let productSelect = listaProductos.options[listaProductos.selectedIndex].value;

while (listaPrecios.options.length) {
  listaPrecios.remove(0)
}

for (let i = 0; i < productos.length; i++) {
  if(productSelect == productos[i][0]){
    let producto = new Option(productos[i][1]+' €',parseFloat(productos[i][1]))
    listaPrecios.options.add(producto)
    console.log(producto)
  }
}
}

function addProducto(){
  let cantidad = document.getElementById("cantidad").value
  let listaPrecios = document.getElementById('precio');
  let precioSelect = listaPrecios.options[listaPrecios.selectedIndex].value;
  total = cantidad*precioSelect
  console.log(total.toFixed(2))
 



}
