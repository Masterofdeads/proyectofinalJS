
const carritoDeCompras = document.getElementById("carritoDeCompras");

class Producto{
    constructor(id,marca,modelo,precio,talle,stock,imagen){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = parseFloat(precio);
        this.talle = parseFloat(talle);
        this.stock = stock;
        this.imagen = imagen;
    }
    restaStock(){
        this.stock = this.stock - 1;
        console.log("El stock de ${this.nombre} ha sido actualizado.")
    }
}
// Crear objetos manual
const producto0 = new Producto(0,"nike","air force 1 white",50000,"39",3,"air force 1 white.jpg");
const producto1 = new Producto(1,"nike","air force 1 white",50000,"40",3,"air force 1 white.jpg");
const producto2 = new Producto(2,"nike","air force 1 white",50000,"41",4,"air force 1 white.jpg");
const producto3 = new Producto(3,"nike","air force 1 white",50000,"42",5,"air force 1 white.jpg");
const producto4 = new Producto(4,"nike","air max 90 white",58000,"39",3,"air max 90 white.jpg");
const producto5 = new Producto(5,"nike","air max 90 white",58000,"40",4,"air max 90 white.jpg");
const producto6 = new Producto(6,"nike","air max 90 white",58000,"41",4,"air max 90 white.jpg");
const producto7 = new Producto(7,"air jordan","retro 3 hall of fame",50000,"39",4,"retro 3 hall of fame.jpg");
const producto8 = new Producto(8,"air jordan","retro 3 hall of fame",50000,"40",3,"retro 3 hall of fame.jpg");
const producto9 = new Producto(9,"air jordan","retro 3 hall of fame",50000,"41",3,"retro 3 hall of fame.jpg");
const producto10 = new Producto(10,"air jordan","retro 3 hall of fame",50000,"42",5,"retro 3 hall of fame.jpg");

const productos = [producto0,producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10]

function renderBase(){
    for(elem of productos){
        let card = document.createElement("div")

        card.innerHTML = `<h2>Comprá ${elem.modelo}</h2>
                            <input type = "button" value="comprar" onclick="elem.restaStock()">`
        document.body.append(card)
}
}

function renderBootStrap(){
    for(elem of productos){
        let card = document.createElement("div")

        card.innerHTML += `<div class="card" style="width: 18rem;">
                            <img src="./img/${elem.imagen}" class="card-img-top" alt="Imagen de ${elem.marca}">
                            <div class="card-body">
                            <h5 class="card-title">${elem.marca} - ${elem.modelo}</h5>
                            <p class="card-text">Llevalo </p>
                            <button onClick="agregaCarrito(${elem.id})" class="btn btn-primary" value="Comprá Ya!">Comprar!</button>
                            </div>
                        </div>`
        document.body.append(card)
}
}




// FINCION PARA AGREGAR PRODUCTOS... Se Puede agregar llenando formulario.
// function nuevoProd (id,marca,modelo,precio,talle,stock,imagen){
//     const prodNuevo = new Producto(id,marca,modelo,precio,talle,stock,imagen)
//     productos.push(prodNuevo)
// }


const arrayCarrito = []

class ObjCarrito{
    constructor(marca,modelo,cant){
        this.marca = marca;
        this.modelo = modelo;
        this.cantidad = cant;
    }
    sumaStock(){
        this.cantidad = this.cantidad +1
        swal.fire({
            title: `Ya tenias este producto en tu carrito`,
            text: `sumaste 1 unidad mas, en total tenes: ${this.cantidad}`,
            icon: "success",
        });
    }
}

function agregaCarrito(prod){
    let existeEnCarrito = arrayCarrito.find(e => e.producto == prod)
    if(existeEnCarrito != undefined){
        let posicion = arrayCarrito.findIndex(elem => elem.producto == existeEnCarrito.producto)
        arrayCarrito [posicion].sumaStock()
        localStorage.setItem("cart", arrayCarrito)
    }else{
        const zapa = productos.find((zapas)=> zapas.prod == prod);
        arrayCarrito.push({
            ...zapa,
            cantidad: 1
        })
        // const alCarrito = new ObjCarrito(prod,1)
        // arrayCarrito.push(alCarrito)
        console.table(arrayCarrito)
        localStorage.setItem("cart", arrayCarrito)
        swal.fire({
            title: "Agregado al carrito",
            text: "producto en carrito",
            icon: "success",
    })
    ComprasRealizadas()
    }
}  

function ComprasRealizadas(){
    carritoDeCompras.innerHTML = "";
    productos.forEach( elem => {
        carritoDeCompras.innerHTML +=`
        <tr>
            <th scope="row">${elem.id}</th>
            <td>${elem.marca}</td>
            <td>${elem.modelo}</td>
            <td>${elem.talle}</td>
            <td>${elem.precio}</td>
        </tr>
        `

        
    })
}

renderBootStrap()






// const zapatillaNike = new Producto("nike","air force 1",50000,"39",3);
// let zapatillas = [zapatillaNike];

// zapatillas.push(new Producto(0,"nike","air force 1 White",50000,"39",3));
// zapatillas.push(new Producto(1,"nike","air force 1 White",50000,"40",3));
// zapatillas.push(new Producto(2,"nike","air force 1 White",50000,"41",4));
// zapatillas.push(new Producto(3,"nike","air force 1 White",50000,"42",5));
// zapatillas.push(new Producto(4,"nike","air max 90 White",58000,"39",3));
// zapatillas.push(new Producto(5,"nike","air max 90 White",58000,"40",4));
// zapatillas.push(new Producto(6,"nike","air max 90 White",58000,"41",4));
// zapatillas.push(new Producto(7,"nike","air max 90 White",58000,"42",4));
// zapatillas.push(new Producto(8,"air jordan","retro 3 hall of fame",50000,"39",4));
// zapatillas.push(new Producto(9,"air jordan","retro 3 hall of fame",50000,"40",3));
// zapatillas.push(new Producto(10,"air jordan","retro 3 hall of fame",50000,"41",3));
// zapatillas.push(new Producto(11,"air jordan","retro 3 hall of fame",50000,"42",5));
// console.log(zapatillas);
// let marcaBuscado = prompt("Escriba la marca del producto deseado: Nike o Air Jordan");
// const resultado = zapatillas.filter((Producto) => Producto.marca== marcaBuscado);
// console.log(resultado);
// if(resultado == "NIKE"){
//     const elijeModelo = zapatillas.map((zapaModelo) => zapaModelo.modelo);
//     prompt("Elija el modelo")
// }

// // for(const zapatilla of zapatillas){
// //     zapatilla.sumaIva();
// //     //console.log(zapatilla);
// }





