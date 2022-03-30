<!DOCTYPE html>
<html lang="es" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>El mayor de 2 num</title>
    <script>
        // Definir variables
        var n1 = 0;
        var n2 = 0;

        // Funcion para leer numeros Reales
        function leerNumero() {
            num = parseFloat(prompt("Porfi, escribe un número"));
            return num;
        }

        // Función que devuelve el mayor de
        // dos número

        function mayorMenor () {
            resultado = ( n1 > n2 )
                ? n1 + " es mayor que " + n2
                : n2 + " es mayor que " + n1;

            return resultado;
        }
    </script>
</head>

<body>
    <header>
        <h1>Devolver el mayor de 2 números Reales</h1>
    </header>
    <nav></nav>
    <main>
        <p>
            <input
                type="button"
                onclick="n1 = leerNumero()"
                value="Primer número" />
            <input
                type="button"
                onclick="n2 = leerNumero()"
                value="Segundo número" />
            <input
                type="button"
                onclick="alert( mayorMenor() )"
                value="El mayor es ..." />
        </p>
    </main>
    <footer></footer>
</body>

</html>
