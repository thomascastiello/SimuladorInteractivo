
let cantidad;
let precio;
let descuento;
let compra;
let total;

precio = parseFloat(prompt('Ingrese el precio de la Hamburguesa que desee aplicarle el descuento :)'));
cantidad = parseFloat(prompt('Ingrese la cantidad de Hamburguesas que desea comprar'));

compra = precio * cantidad;
descuento = compra * 0.15;
pagar = compra - descuento;

console.log("El descuento en total es de: $" + descuento);
document.write("El descuento en total es de: $" + descuento + ".");
document.write("\n El total a pagar es de $" + pagar);

//sumar de iva
let precioConIva = parseInt(pagar*1.21);
document.write('<h4> El precio del descuento más el IVA es de $'+precioConIva);

alert("Gracias por confiar en nosotros, hasta pronto!");




//sumar iva a los precios de los productos y ver resultado en consola

class Productos {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseInt(precio);
        this.vendido = false;
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}

const producto1 = new Productos('Hamburguesa Double Cheedar', 800);
const producto2 = new Productos('Hamburguesa Triple Bomba', 1000);
const producto3 = new Productos('Doble Onion Rings', 900);

producto1.sumarIva();
producto2.sumarIva();
producto3.sumarIva();

console.log('El precio de ' + producto1.nombre + ' es ' + producto1.precio);
console.log('El precio de ' + producto2.nombre + ' es ' + producto2.precio);
console.log('El precio de ' + producto3.nombre + ' es ' + producto3.precio);