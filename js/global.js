/////////////////////////// GLOBAL ///////////////////////////

let carrito = []
const mainSec = document.querySelector(".SecMain");
const contadorCarrito = document.querySelector('#contadorCarrito');
const contItemsCarrito = document.querySelector("#contItemsCarrito");
const carritoBody = document.querySelector('.offcanvas-body');
const miLocalStorage = window.localStorage;
const imagenCarrito = document.querySelector('#contenedorCarrito');
const wrapper = document.querySelector('#wrapper');

/////////////////////////// CLASES ///////////////////////////

class Producto {
    constructor(id, title, category, price, image , codeproduct , brand) {
        this.id = id;
        this.title = title.toUpperCase();
        this.category = category;
        this.price = parseFloat(price);
        this.image = image;
        this.codeproduct = codeproduct;
        this.brand = brand;
    }
}

/////////////////////////// OBJETOS ///////////////////////////


// Funciones para traer los objetos desde listaProd.json

async function obtenerDatos(url) {
    return fetch(url).then(response => response.json());
}

async function traerProductos() {
    const Lista = await obtenerDatos('./js/mockData.json');
    let productos = []
    Lista.forEach(prod => {
        productos.push(new Producto(prod.idprod, prod.title, prod.category, prod.price, prod.image , prod.codeproduct , prod.brand))
    });
    return productos;
}

async function traerYmostrarProductos() {
    let productos = await traerProductos()
    mostrarProductos(productos)
}


const cantidadProductos = document.querySelector(".subtSeccion2")



function actualizarProductos() {
    fetch ('./js/mockData.json')
    .then(response => response.json())
    .then(data => cantidadProductos.textContent = data.length);
    }

actualizarProductos ()