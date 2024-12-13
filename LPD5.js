/*
Crear un programa en Javascript que realice lo siguiente:
Debe pedirle al usuario que intente adivinar el número secreto por prompt o por input, dicho número será del 1 al 100.
Si el usuario no adivina el número secreto, debe mostrar un mensaje por consola o DOM diciendo: “Ups, el número secreto es incorrecto, vuelve a intentarlo. ” y volver a solicitarle que ingrese un número.
Si el usuario adivina el número secreto debe de mostrar un mensaje por consola o DOM diciendo: “Felicidades, adivinaste el número secreto”. Además debe imprimir por consola o DOM la lista de números introducidos antes de adivinar el número secreto.
El número secreto puede ser introducido manualmente o generar un número aleatorio, pero recuerda que debe ser del 1 al 100.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
*/

// declaro mi función adivinarNumero, en la cual declaro mi variable numeroSecreto para poder generar un numero aleatorio etre 0 y 1 (excluido) con mi método Math.random(), que incluye decimales pues este método genera un numero aleatorio de tipo float
//mi método Math.floor()entonces me ayuda a redondear los decimales generados pero hacia abajo, por lo que aunque se incluya el 100 va a faltar el 100 y es por eso que al final agrego un 1, porque mi número multiplicado por 100 nunca va a alcanzar el 100 por si solo
function adivinarNumero() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;

    // ahora declaro mivariable numerosIntroducidos que será un array vacío que servirá para guardar los números que el usuario va a introducir por medio del prompt() para adivinar el número
    let numerosIntroducidos = [];

    //en mi variable "numero" guardo el último numero ingresado por el usuario para adivinar
    let numero;

    // establezco un ciclo do while para solicitar un número hasta que sea válido por medio de mi promt() y convierto el string recibido a un número entero con mi método parseInt()
    do {
        numero = prompt("Ingresa un número entre 1 y 100:");
        numero = parseInt(numero);
        // ahora verifico si el número ingresado es válido con (NaN), de lo contrario se pide ingresar un número valido
        if (isNaN(numero)) {
            alert("Por favor, ingresa un número válido.");
        } else {
            // si el número es válido.se agrga a la lista de números ingresados, es decir, mi primer varuable declarada (16) y con mi método push() introduzco el número al array vacío 
            numerosIntroducidos.push(numero);
        }

    } while (isNaN(numero) || numero < 1 || numero > 100); // mi condición verifica 3 cosas: si el numero introducido no es un número, isNaN dará true, si en efecto es un nunero, dará false || se verifica que el numero no sea menor a 1 y por ultimo || verifico que mi numero no sea mayor a 100, si alguna es verdadera se sigue solcitando un número válido.

    // ahora se tiene que verificar si el número ingresado es igual al número secreto
    if (numero === numeroSecreto) {
        // Si el número es correcto se muestra el mensaje de éxito y los números ingresados
        alert(`¡Felicidades, adivinaste el número secreto! El número secreto es ${numeroSecreto}.`);
        console.log("Números ingresados antes de adivinar el número secreto:", numerosIntroducidos);
    } else {
        // si el número no es correcto se muestra un mensaje de error
        alert(`El número secreto es incorrecto. El número secreto era ${numeroSecreto}.`);
        console.log("Números ingresados antes de fallar:", numerosIntroducidos);
    }
}

// se llama a la función adivinarNumero para iniciar el juego
adivinarNumero();

/*
Math.random genera números aleatorios entre 0 y 1 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Math.floor redondea números hacia abajo al entero más cercano 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

parseInt() convierte cadenas de texto a números enteros 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

isNaN() comprueba si un valor no es un número 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

Array.push() agrega elementos a un array 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

Logical operators para comprender el uso de || y cómo combinarlos en condiciones 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators

if...else estructura condicional para la lógica de comparación 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

alert muestra mensajes al usuario en un cuadro de diálogo 
https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
*/