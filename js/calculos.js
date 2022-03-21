// Definir variables
var n = 0;
// Funcion para leer numeros Reales
function leerNumero() {
    num = parseInt(
        prompt("Porfi, escribe un número")
    );
    return num;
}
function mostrarResultados() {
    document.getElementById('td1').innerHTML = n;
    document.getElementById('td2').innerHTML = factorial();
    document.getElementById('td11').innerHTML = n;
    document.getElementById('td12').innerHTML = m;
    document.getElementById('td13').innerHTML = multiplosDeHasta();
}
function factorial() {
    var factorial = 1;
    for ( i=1; i <= n; i++ ) {
        factorial = factorial * i;
    }
    return factorial;
}
function multiplosDeHasta() {
    mensaje = "Los múltiplo de " +
        n +
        " hasta " + m +
        " son: ";
    multiplo = 0;
    //for (i = 1; multiplo < m ; i++) {
    //    multiplo = n * i;
    //    if (multiplo > m) break;
    //    mensaje = mensaje + multiplo + " ";}
    
    // Con While en vez de For
    i=1;
    while (multiplo < m) {
        multiplo = n*i;
        mensaje = mensaje + multiplo + " ";
        i++;if (multiplo > m) break;
        }    
    // hasta aqui lo del while / for

    return mensaje;
    
}
