# Creación de una API (interfaz de programación de aplicaciones) y una interfaz web con el objetivo de gestionar datos de albaranes en cooperativa.

# Inicio
- La idea de la creación de este proyecto surgió a partir de la realización del TFG (https://github.com/josprimen/TFG) en el que usé inteligencia artificial sobre grandes volúmenes de datos de albaranes. Una API nos permitiría tratar con estos y facilitar futuros proyectos propios o ajenos con estos datos. La interfaz web permitiría, haciendo uso de esta API, el manejo y creación de datos a personas no familiarizadas con la programación de manera intuitiva y visual.

# Entorno y lenguajes
- Se ha usado **Goorm** para el desarrollo del proyecto, se trata de un IDE online basado en contenedores. El proyecto ha sido desarrollado en lenguaje **JavaScript**. El contenedor del proyecto fue preparado con el entorno **Node.js**, en este se ha usado **Express** para levantar un servidor con todas las funcionalidades. Para la base de datos se ha usado **Mlab**, que utiliza la tecnología **MongoDB** para base de datos en la nube. En la interfaz web se ha usado **Angular.js** para el modelo vista-controlador y **Bootstrap** para vista y estilo. Algunos retoques visuales han sido hechos en **CSS** y para la peronalizacion de algunas funciones ha tenido que usarse **jQuery**. Las pruebas automáticas hechas sobre BackEnd se realizaron con **Postman**.

# Cronología
El proyecto está dividido en carpetas o bloques de conocimiento. Estas carpetas corresponden al aprendizaje y desarrollo necesarios para poder avanzar en el proyecto:
- El primer bloque es una pequeña familiarización con el lenguaje JavaScript, viendo el funcionamiento de las variables, iteradores y creación de funciones y objetos.
- El segundo bloque consiste en aprender a usar Express para desplegar un pequeño servidor de ejemplo. Inicio de conexión, puerto de escucha, etc.
- En el tercer bloque se aprenden los métodos básicos de petición HTTP get y post.
- En el cuarto bloque se profundiza en el conocimiento de estos métodos y implementan todos los métodos HTTP necesarios.
- El quinto y sexto bloques están orientados a añadir una persistencia para los datos con los que trabajamos en la API. En el primero se hace uso de nedb, que nos prepara para entender e implementar persistencia en MongoDB en el segundo.
- El séptimo bloque es el BackEnd de nuestro proyecto ya terminado. La API completa está en este bloque y también desplegada en (https://apijosprimen.herokuapp.com/josprimenapi/v1/olive).
- El octavo bloque contiene todo lo referente a la interfaz web. En este punto se empezó a trabajar con ramas, puede verse en la rama devbranch del proyecto el proceso de relización de esta parte.

# Ejemplos de llamadas a BackEnd
Toda la documentación y pruebas automáticas hechas sobre BackEnd puede encontrarlas en (https://documenter.getpostman.com/view/3950150/SzYdRw3B?version=latest).
- (Recurso general) https://deliverynote-manager.herokuapp.com/josprimenapi/v1/olive
- (Subconjuntos) https://deliverynote-manager.herokuapp.com/josprimenapi/v1/olive/2015
- (Subconjuntos) https://deliverynote-manager.herokuapp.com/josprimenapi/v1/olive/2015/10
- (Subconjuntos) https://deliverynote-manager.herokuapp.com/josprimenapi/v1/olive/2015/10/2
- (Recurso específico) https://deliverynote-manager.herokuapp.com/josprimenapi/v1/olive/2015/10/23/11
- (Para cargar unos pocos datos por defecto) https://deliverynote-manager.herokuapp.com/josprimenapi/v1/olive/loadInitialData
- (Para cargar una gran cantidad de datos por defecto) https://deliverynote-manager.herokuapp.com/josprimenapi/v1/olive/loadAllData
- (Búsqueda de un intervalo de rendimiento, acidez o humedad) https://deliverynote-manager.herokuapp.com/josprimenapi/v1/olive?RDTO=true&from=15&to=20

# FrontEnd
- El FrontEnd del proyecto (interfaz web) se encuentra en (https://deliverynote-manager.herokuapp.com/josprimenapi/v1/#!/).
