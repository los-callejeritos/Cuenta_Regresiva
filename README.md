# *** CUENTA REGRESIVA ***
## DESCRIPCIÓN: 
El programa creado tiene la finalidad de proyectar un contador regresivo de tiempo. Dicho contador se basado en cuatro casillas: DIAS, HORAS, SEG Y MIN. La cuenta culminara el 25 de diciembre a horas 00:00, al finalizar el tiempo transcurrido la página señalara un mensaje manifestando la llegada de la Navidad.
## CLONACION DEL REPOSITORIO
Se inició creando una carpeta, con el nombre del programa a trabajar, se realizó los pasos respectivos para luego clonar el repositorio dentro de la misma carpeta
1. En GitHub.com, navegue a la página principal del repositorio.
2. Encima de la lista de archivos, haga clic en  Código.
3. Encima de la lista de archivos, haga clic en  Código.
4. Abra Git Bash.
5. Cambia el directorio de trabajo actual a la ubicación en donde quieres clonar el directorio.
6. Escriba git clone y pegue la dirección URL que ha copiado antes.
```bash
$ git clone https://github.com/los-callejeritos/Cuenta_Regresiva.git
```
7. Presione Entrar para crear el clon local.
```bash
$ git clone https://github.com/los-callejeritos/Cuenta_Regresiva.git
> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
## CREACIÓN DEL PROYECTO
Proseguimos a crear archivos en Visual Studio Code con los siguientes denominaciones:
* index.html*
* estilo.css*
* funci.js *
## Index.html*
En el archivo index, se creo la estructura básica del proyecto, la mayor parte del index esta hecho con la etiqueta DIV los cuales cuentan con una clase especifica que identifique el contenido que abarca dicha sección. Esto se realizo con la finalidad de que, al momento de hacer algunas modificaciones en el CSS o en JS tengamos facilidades.  Se enlazo el html con los otros archivos <link rel="stylesheet" href="estilo.css"> para el CSS y <script src="funci.js"></script> para el JS para su respectivo diseño y su funcionalidad del programa. Se hizo uso de enlaces para las fuentes de letras a usar.
## Estilo.css*
En el archivo CSS, se trabajó las diferentes clases y secciones ya antes enlasadas con el html, dando a cada etiqueta y clase un diseño representativo, como el tamaño de las letras, el color de las fuentes, la separacion de las letras, separacion de los contenedores, modificacion del tamaño de la imagen al igual que su posición y para el contador se dispuso un color y espacio específico.
## Javascript.js*
En el archivo JS, se realizó las diferentes programaciones que el trabajo requeria, en este caso, era un contador regresivo estableciendo como fecha límite el 25 de diciembre, correspondiente a la Navidad. Para su desarrollo se hizo uso del metodo DOM al igual que algunas funciones, variables y condiciones.
Este es el link hacia la visualización del [Countdown] (blank:#http://127.0.0.1:5500/index.html)
<!-- Bueno con esto hemos concluído con el trabajo. -->
