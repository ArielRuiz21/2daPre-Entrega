let edadIngresada = prompt("Ingrese su edad por favor:");

                      //Verificar la elección del usuario
   if(edadIngresada >= 18){
     alert("su edad es de " +  edadIngresada + " años, usted es  mayor de edad");

   }else if (edadIngresada >0 &&  edadIngresada <18){ 
     alert("su edad es de " + edadIngresada + " años, usted  es menor de edad ");
   }else if(edadIngresada <= 0){
     alert("La edad ingresada debe ser mayor a 0 !!")
   }else{
     alert("La edad ingresada es incorrecta !!")
   }
 const NOMBRE= prompt ("Ingrese su nombre por favor:");

 alert("su nombre  es " + NOMBRE + " y tiene " + edadIngresada + " años "); 



  // Función para preguntar al usuario sobre su preferencia de procesador
  function elegirProcesador() {
    
    let elegir = prompt(NOMBRE + ", ¿prefiere Ryzen o Intel?");

        // Verificar la elección del usuario
    if (elegir === "ryzen" || elegir === "intel") {
     

         // Mostrar un mensaje indicando la elección del usuario
      alert("¡Excelente elección! Ha elegido " + elegir + ".");

      // Solicitar al usuario que especifique el modelo del procesador
      let modeloProcesador;
      if (elegir === "ryzen") {
        modeloProcesador = prompt("Elija un modelo de Ryzen (7, 5 o 3):");
      } else {
        modeloProcesador = prompt("Elija un modelo de Intel (i7, i5 o i3):");
      }

      // Elegir el modelo de procesador ingresado
      switch (modeloProcesador) {

        case "7":
          
        case "5":
          
        case "3":
          
        case "i7":
          
        case "i5":
          
        case "i3":
          
          let procesadorElegido = elegir + " " + modeloProcesador;
          let tipoProcesador = elegir;

          alert("Ha elegido " + procesadorElegido + ". ¡Excelente elección!");

          mostrarMensajeFinal(edadIngresada, NOMBRE, procesadorElegido, tipoProcesador);
          break;
        default:
          // Si el modelo es incorrecto, mustra  un mensaje de error
          alert("El modelo de procesador ingresado no es válido. Por favor, elija entre las opciones disponibles.");
      }
    } else {
      // Si la elección es incorrecto, muentra un mensaje de error
      alert("No ha ingresado una opción válida. Por favor, elija entre Ryzen o Intel.");
    }
  }

  // Función para mostrar el mensaje final con todos los datos
  function mostrarMensajeFinal( nombre, procesador, tipo) {
    alert("¡Gracias por participar, " + NOMBRE + "!  Segun la información proporcionada has elegido un " + tipo + " "  );
  }

  // Llamar a la función para iniciar el proceso de elección de procesador
  elegirProcesador();

function Procesadores (nombre ,modelo , precio ){
    this.nombre = nombre;
    this.modelo = modelo;
    this.precio = precio;
    this.avisar = function(){
        console.log("Usted a elegido un: " + this.nombre  + " " +  this.modelo + " y cuesta " + this.precio)
    }

} 

const ryzen = new Procesadores("Ryzen", 5 , 50000);
ryzen.avisar();

const Intel = new Procesadores("Intel", "i9", 60000);
Intel.avisar();

class ArmarPc {
    constructor( gabinete,color, mother,procesador,ram, ssd ){
        this.gabinete = gabinete;
        this.color = color;
        this.mother = mother;
        this.procesador = procesador;
        this.ram = ram;
        this.ssd = ssd;
        
    }
    
}
   //Contruir la pc
const pc = new ArmarPc("Corsair ", "negro" ,"Aorus ","Ryzen 5 ", "32 ","1TB " );
console.log(pc);


class Productos {
    constructor( id,nombre, precio){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }
    sumarIva(){
        this.precio = this.precio * 1.21;
    }
}

const carrito = [];

carrito.push(new Productos(1,"Gabinete  ", 100000));
carrito.push(new Productos(2,"Mother  ", 75000));
carrito.push(new Productos(3,"Procesador ", 15000));
carrito.push(new Productos(4,"Ram ", 10000));
carrito.push(new Productos(5,"Ssd ", 50000));

console.log(carrito);

for(const porCadaProducto of carrito){
    porCadaProducto.sumarIva();
}

function porCadaElemento(myArray, myFuncion){
    for(const elemento of myArray){
        myFuncion(elemento);
    }
}

const precioFinalDelPorducto = [121000,90750,181500,12100,60500];

precioFinalDelPorducto.sort((a,b)=> a-b);

porCadaElemento(precioFinalDelPorducto, console.log);

let total= 0;
function acumuladora(numero){
    total+= numero;
}
porCadaElemento(precioFinalDelPorducto,acumuladora);
console.log("El precio total es:" + total); 

const DIACOMPRA = new Date (2024,5,5);

console.log("compra realizada el "+ DIACOMPRA.toLocaleDateString());

const PEDIDO_Listo =new Date(2024,5,20)
const DIFERENCIA = PEDIDO_Listo - DIACOMPRA ;
const MILISEGUNDOS_DIA = 60 * 60 * 24 * 1000;
const DIFERENCIA_EN_DIAS = (PEDIDO_Listo - DIACOMPRA) / MILISEGUNDOS_DIA;
console.log("Su pedido estara listo en: " + DIFERENCIA_EN_DIAS+ " Dias")


const tituloH1 = document.getElementById('titulo');
console.log(tituloH1.innerText);
tituloH1.innerText = "Hola comunidad gamer!!"
console.log(tituloH1.innerText);

const cuerpo = document.getElementById('cambiarColor');
cuerpo.style.backgroundColor= 'red';
cuerpo.style.color='black';

















