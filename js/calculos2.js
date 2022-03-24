// Definir variables
// var n = 0;

// Funcion para leer numeros Reales
function leerNumero() {
    num = parseInt(
        prompt("Porfi, escribe un número")
    );
    return num;
}

function mostrarMultiplo(n, m) {
    document.getElementById('td11').innerHTML = n;
    document.getElementById('td12').innerHTML = m;
    document.getElementById('td13').innerHTML = multiplosDeHasta(n, m);
}


function mostrarFactorial( n ) {
    document.getElementById('td21').innerHTML = n;
    document.getElementById('td22').innerHTML = factorial( n );
}


function mostrarResultados( op, n, m = 0 ) {

    switch (op) {
        case 'multiplo':
            document.getElementById('td11').innerHTML = n;
            document.getElementById('td12').innerHTML = m;
            document.getElementById('td13').innerHTML = multiplosDeHasta(n, m);
        break;

        case 'factorial' :
            document.getElementById('td21').innerHTML = n;
            document.getElementById('td22').innerHTML = factorial( n );
        break;
        default:
    }
}



function multiplosDeHasta(n, m) {
    mensaje = "Los múltiplo de " +
        n +
        " hasta " + m +
        " son: ";

    multiplo = 0;

    // for (i = 1; multiplo < m; i++) {
    //     multiplo = n * i;
    //     mensaje = mensaje + multiplo + " ";
    // }

    // Inicialización de la variable contador
    i = 1;

    // Condición
    while ( multiplo < m ) {
        multiplo = n * i;
        mensaje = mensaje + multiplo + " ";

        // Incremento
        i++;
    }



    return mensaje;
}

function factorial( n ) {
    var factorial = 1;
    for ( i=1; i <= n; i++ ) {
        factorial = factorial * i;
    }
    return factorial;
}
function sumar(s1, s2) {
    var suma = s1 + s2;
    return suma;
}
function multiplicar(f1, f2) {
    var producto = f1*f2;
    return producto;
}
function leerNome() {
    nome = prompt("escribe un nombre");
    return nome;
    }


function leerTexto() {
    texto = prompt("escribe un texto");
    return texto;
   // if (!isNaN(tex)) {
     //   return "Escribe un texto, Gañán";
       // leerTexto();
    }

function mostrarTexts(nome,texto) {
    var nombre=nome;
    var tess=texto;
    toertexto = "Tu muñeco se llama: " + nombre + " " + tess;
    alert (toertexto);
}
function mostrarInfo(){    
    var nombre=nome;
    var tess=texto;
    toertexto = "Tu muñeco se llama: " + nombre + " " + tess;
    var PorPantalla=toertexto;
    PorPantalla.innerHTML=toertexto;
}

