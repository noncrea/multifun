// Definir variables
// var n = 0;

// Funcion para leer numeros Reales
function leerNumero() {
    num = parseInt(
        prompt("Porfi, escribe un número")
    );
    return num;
}

// Función para leer texto
function leerTexto() {
    texto = prompt("Porfi, escribe el nombre de tu personaje");
    return texto;
}

// Función para insertar texto en el HTML

function mostrarTexto( id, texto ){
    var elemento = document.getElementById(id);

    // Insertamos el texto pasado por parámetro
    // al elemento con id pasado por parámetro
    elemento.innerHTML = texto;
}


function mostrarInfo(id, tag, info, texto){
    var contenido = "<" + tag + ">";
    contenido += info;
    contenido += "</" + tag + "> ";
    contenido += texto;


    mostrarTexto( id, contenido );
}

// function dameInfo(tag, info, texto){
//     var contenido = "<" + tag + ">";
//     contenido += info;
//     contenido += "</" + tag + "> ";
//     contenido += texto;
//
//     return contenido;
// }


function mostrarTodo(id, personaje, aldea, clan, poder, vidas) {

    var personaje = "<strong>Personaje: </strong>" + personaje;
    var aldea = "<strong>Aldea: </strong>" + aldea;
    var clan = "<strong>Clan: </strong>" + clan;
    var poder = "<strong>Superpoder: </strong>" + poder;
    var vidas = "<strong>Vidas: </strong>" + vidas;

    var lis = "<li>" + personaje + "</li>";
    lis += "<li>" + aldea + "</li>";
    lis += "<li>" + clan + "</li>";
    lis += "<li>" + poder + "</li>";
    lis += "<li>" + vidas + "</li>";

    var elemento = document.getElementById(id);

    // Insertamos el texto pasado por parámetro
    // al elemento con id pasado por parámetro
    elemento.innerHTML = lis;
}

function mostrarLinea(id, personaje, aldea, clan, poder, vidas) {

    var personaje = "<strong>Personaje: </strong>" + personaje;
    var aldea = "<strong>Aldea: </strong>" + aldea;
    var clan = "<strong>Clan: </strong>" + clan;
    var poder = "<strong>Superpoder: </strong>" + poder;
    var vidas = "<strong>Vidas: </strong>" + vidas;

    var lista=document.createElement("li");

    lista.innerHTML=personaje + ", " + aldea + ", " + clan + ", " + poder + ", " + vidas;
    //con el inner lo mete en el html

    var cajadatos=document.getElementById(id); 
    //este id es el que tu le mandes llamar desde html

    cajadatos.appendChild(lista);


/*     var lis = "<li>" + personaje + "</li>";
    lis += "<li>" + aldea + "</li>";
    lis += "<li>" + clan + "</li>";
    lis += "<li>" + poder + "</li>";
    lis += "<li>" + vidas + "</li>";

    var elemento = document.getElementById(id);

    // Insertamos el texto pasado por parámetro
    // al elemento con id pasado por parámetro
    elemento.innerHTML = lis; */
}
function mostrarLista(id, personaje, aldea, clan, poder, vidas) {

    var personaje = "<strong>Personaje: </strong>" + personaje;
    var aldea = "<strong>Aldea: </strong>" + aldea;
    var clan = "<strong>Clan: </strong>" + clan;
    var poder = "<strong>Superpoder: </strong>" + poder;
    var vidas = "<strong>Vidas: </strong>" + vidas;

    var lista=document.createElement("li");

    lista.innerHTML=personaje;
    //con el inner lo mete en el html

    var cajadatos=document.getElementById(id); 
    //este id es el que tu le mandes llamar desde html

    cajadatos.appendChild(lista);

    lista=document.createElement("li");
    lista.innerHTML=aldea;
    cajadatos.appendChild(lista);

    lista=document.createElement("li");
    lista.innerHTML=clan;
    cajadatos.appendChild(lista);

    lista=document.createElement("li");
    lista.innerHTML=poder;
    cajadatos.appendChild(lista);

    lista=document.createElement("li");
    lista.innerHTML=vidas;
    cajadatos.appendChild(lista);
    
    var fondo = document.getElementById('datos');
    fondo.style.backgroundColor = "lightblue";
    fondo.style.color = "black";

}
function meteUno(elemento, tag, contenido) {
    objeto = document.createElement (tag);
    objeto.innerHTML=contenido;
    elemento.appendChild (objeto);
}

function mostrarDeuna(id, personaje, aldea, clan, poder, vidas) {
    var personaje = "<strong>Personaje: </strong>" + personaje;
    var aldea = "<strong>Aldea: </strong>" + aldea;
    var clan = "<strong>Clan: </strong>" + clan;
    var poder = "<strong>Superpoder: </strong>" + poder;
    var vidas = "<strong>Vidas: </strong>" + vidas;
    var lista=document.getElementById(id);
//este meteUno es la funcion de arriba
    meteUno (lista, "li", personaje);
    meteUno (lista, "li", aldea);
    meteUno (lista, "li", clan);
    meteUno (lista, "li", poder);
    meteUno (lista, "li", vidas);
}
function strongIncluido (id, personaje, aldea, clan, poder, vidas) {
    var negrita=document.createElement("strong");
    negrita.innerHTML="Personaje: ";
    var personaje = negrita.outerHTML + personaje;
//outerHTML transforma el "objeto" en "editable"
    negrita.innerHTML="Aldea: ";
    var aldea = negrita.outerHTML + aldea;
    var lista=document.getElementById(id);
    negrita.innerHTML="Clan: ";
    var clan = negrita.outerHTML + clan;
    var lista=document.getElementById(id);
    negrita.innerHTML="Poder: ";
    var poder = negrita.outerHTML + poder;
    var lista=document.getElementById(id);
    negrita.innerHTML="Vidas: ";
    var vidas = negrita.outerHTML + vidas;
    var lista=document.getElementById(id);
//este meteUno es la funcion de arriba
    meteUno (lista, "li", personaje);
    meteUno (lista, "li", aldea);
    meteUno (lista, "li", clan);
    meteUno (lista, "li", poder);
    meteUno (lista, "li", vidas);
}


function CrearSubelemento (tag1, tag2, prefijo, sufijo){
    var subelemento=document.createElement(tag1);
    subelemento.innerHTML=prefijo;
    var elemento=document.createElement(tag2);
    elemento.appendChild(subelemento);
    elemento.innerHTML=sufijo;
    return elemento;//aqui devuelve el elemento final con el sufijo incluido
}
//funcion Tojunto llama a crearsubelemento
function ToJunto (id, personaje, aldea, clan, poder, vidas) {


    list=CrearSubelemento("strong", "li", "Personaje: ", personaje);
    lista.appendChild(list);
    list=CrearSubelemento("strong", "li", "Aldea: ", aldea);
    lista.appendChild(list);
    list=CrearSubelemento("strong", "li", "Clan: ", clan);
    lista.appendChild(list);
    list=CrearSubelemento("strong", "li", "Poder: ", poder);
    lista.appendChild(list);
    list=CrearSubelemento("strong", "li", "Vidas: ", vidas);
    lista.appendChild(list);

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
            var td11 =document.getElementById('td11');
            td11.innerHTML = n;
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

function sumar( s1, s2 ) {
    var suma = s1 + s2;
    return suma;
}


function multiplicar( f1, f2 ){
    var producto = f1 * f2;
    return producto;
}
