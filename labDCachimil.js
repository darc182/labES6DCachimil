let totalProductos = 1500;
let itemsEnCarrito = 8;
let nombreUsuario = "Darwin";
let codigoDescuento = "SHOP2024";
const enviogratis = false;

//Variables compuestas
let productosDestacados = ["Chaquetas", "Botas", 30, 85.99];
let vendedor = {
    nombre: "Tienda Temu [oficial]",
    numEstrellas: 4.8
};

//String - cadena de caracteres
let codDescuento = "SHOP2024";
console.log(codDescuento.length);

//Metodos
console.log(codDescuento.trim());//elimina espacios
console.log(codDescuento.includes("SHOP[oficial]"));//devuelve un booleano si hay coincidencia
console.log(codDescuento.toUpperCase());//todo a mayusculas
console.log(codDescuento.toLowerCase());//todo a minusculas

//Template string
console.log(`Codigo de descuento: ${codDescuento}`);

let precioProducto = "10.50";
let precioProd = 45.99;

//Conversion de tipo ES6
console.log(+precioProducto + precioProd);

//Operadores ternarios
let puntosUsuario = 1200;
let puntosRequeridos = 1000;

puntosUsuario >= puntosRequeridos 
  ? console.log("Tienes suficientes puntos para el descuento") 
  : console.log("Sigue acumulando puntos");

//Valores verdaderos - truthy
let nivelMembresia = 2;
nivelMembresia === 3 
  ? console.log("Membresia premium activada") 
  : console.log("Actualiza tu membresia");

//Valores falses falsy
let usuario = "Darwin";
!usuario 
  ? console.log("No existe usuario") 
  : console.log("Usuario registrado");

//Comparacion
let codProd = "222567";
codProd === "222567" 
  ? console.log("Codigo encontrado") 
  : console.log("Codigo no registrado");

//Loops
const productosRecomendados = ["Laptop", "Reloj", "Tablet", "Teclado"];
productosRecomendados.forEach(producto => {
    console.log(producto);
});

console.log(productosDestacados);

//Funciones declaradas
function mostrarBanner() {
    console.log("Bienvenido a la campaña de descuentos de Temu!");
}
mostrarBanner();

//Funciones con argumentos
const validarCupon = function (cupon, descuento) {
    console.log(`El cupon ${cupon} te ha otorgado un ${descuento}% de descuento`);
};
validarCupon("SHOP10", 10);

//Argumentos opcionales
const validarEnvioGratis = function (envio = "sin costo") {
    console.log(`El envio ${envio} está disponible para tu compra`);
};
validarEnvioGratis();

//Arrow function
const mostrarProducto = () => {
    console.log("Nuevos productos agregados al catálogo");
};
mostrarProducto();

const registrarCompra = (monto = 300) => {
    console.log("Compra registrada por un total de: $" + monto);
};
registrarCompra();

//Objetos
const datosClientes = {
    nombre: "Carlos Mejía",
    edad: "25",
    direccion: {
        ciudad: "Guayaquil",
        telefono: "0991234567"
    },
    miembroVIP: true,
    favoritos: ["Ropa", "Accesorios", "Tecnología"]
};

//JSON
const datosClientes1 = {
    "nombre": "Carlos Mejía",
    "edad": "25",
    "direccion": {
        "ciudad": "Guayaquil",
        "telefono": "0991234567"
    },
    "miembroVIP": true,
    "favoritos": ["Ropa", "Accesorios", "Tecnología"]
};

console.log(datosClientes1.nombre);
console.log(datosClientes1.edad);
console.log(datosClientes1.direccion);
console.log(datosClientes1.miembroVIP);
console.log(datosClientes1.favoritos);

//Desestructuración
const { nombre, edad, direccion, miembroVIP, favoritos: best } = datosClientes;

//Propiedades
datosClientes.producto = "Bolso.jpg";
console.log(datosClientes);

delete datosClientes.miembroVIP;
console.log(datosClientes);

//Datos sin contenido
Object.values(datosClientes).includes("") 
  ? console.log("error") 
  : console.log("OK");

//Formularios
const carritoCompra = {
    nameC: "Bolso",
    priceC: 50.00
};

const usuarioC = {
    nameCl: "Carlos",
    telf: "0991234567"
};

//Union de los formularios
const ordenCompra = { ...usuarioC, ...carritoCompra };
console.log(ordenCompra);
