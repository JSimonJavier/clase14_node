/* 
?presentacion
  -> nuestra primer clase de backend 
  -> backend: es la parte de un sitio o app que se encarga de la logica, la gestion de  datos y a comunicacion del servidor
  -> JS también se puede utilizar en el backend y lo haremos gracias a Node.js que permite ejecutar este lenguaje en el servidor

?objetivos:
  -> http
  -> modelo cliente-servidor
  -> base de datos - servidor
  -> node.js
  -> git - github

?Protocolo http
  *modelo cliente-servidor:
    -> cliente: es un programa o dispostivo que solicita y consume servicios o recursos proporcionados por otro programa llamado servidor
    -> cliente hace un pedido(REQUEST) al servidor de lo que necesita y el servidor (programa que recibe solicituddes y proporciona servicios o recursos) las escucha y responde esos pedido (RESPONSE)

    *protocolo http => hypertext transfer protocol
     -> es el protocolo de comuniciacion que se utiliza para transfirir informacion la www.
     -> conexion entre cliente y servidor (REQUEST - RESPONSE)
     !-> http vs https:
      - con S -> hypertext transfer protocol secure: es una version segura de http que utiliza una capa de seguira adicional para proteger la informa que se transmite

    *estructura request y response
    !-> request (pedido)
      -> metodos: get, post, put, delete
      -> url: a donde se va a enviar el request
      -> headers: traen informacion acerde del request. Por ejm: content-type, header le dice al servido el formato de la informacion contenido en el body
      -> protocolo: http1 también http2
      -> body: en algunos casos dependiendo del metodo puede también haber un body del request que contenga infomación a enviar al servidor

    !-> response (respuesta)
      -> status code: un numero que nos da informacion acerca de que ocurrio en el proceso request-reponse
      -> status message: una descripcion que nos da informacion acerdca de de si la solicitu http fue satifactoria o no
      -> headers: le da mas inf al cliente acerca de la respuesta
      -> protocolo: http1 como http2
      -> body:opcional. contiene la inf correspondiente a la respues del servidor

? metodos http
  *-> GET => es utilizado para solicitar datos o recursos del servidor.
    
  *-> POST => es utilizado apra enviar datos al servidor, generalmente para crear un recurso.

  *-> PUT => es utlizado para actualizar o reemplazar complementamente un recurso en el serividor.

  *-> DELETE => eliminar un recurso

? status code -> un numero de 3 digitos que nos da informacion acerca de que ocurrio en el proceso request-reponse
  *-> 1xx - codigos de estado informaticos
    indican que la solicitud ha sido recibida y se esta procesando

  *-> 2xx - codigos de estados satifactorios (200 ok, la solicitud a sido exitosa y devuelva la respuesta)
    indican que la solicutd del cliente ha sido procesada con exito por el servidor

  *-> 3xx - codigos de estados de redireccion (302 found, el recursol solicitdao ha sido movido temporalmente a una nueva url)
    indican que el cliente necesita realizar mas acciones para completa la solicitud. Se utilizan cuando el recurso que queresmo ha sido movido o se encuentra en una ubicacion diferente. El cliente puede ser redirigod a una nueva url para obtener recurso

  *-> 4xx - codigos de estado de error del cliente (404 not found,el recurso solicitado no se encuentra en el servidor)
    indican que ha ocurrido un error por parte del CLIENTE, ya se que la solicitud realizad es incorrecta, no es valida, o no puede ser procesada por el servidor

  *-> 5xx - codigos de estado de error del servidor (500 internal server error: ha ocurrido un error interno en el servidor al procesar la solicitud)

? Conexion entre front y back
  el protoclo http es el medio por el cual el frontend y el backend de una app web se comunican entre si, permitiendo que el navegador del usuaruio y el servidor web interacuen para procesar solicitudes y enviar respuestas

? servidores vs base de datos
  *-> base de datos => es donde se almacenan y organizan los datos
  *-> sevidor => es el equipo, sistema o programa que permite que los usuarios accedan y manipulen la informacion almacenada en la base de datos

? node
  *Js en el back end
    -> se puede usar tanto del lado del cliente como del servidor. Para el lado del servidor necesitamos node
    -> Node.js => es un entorno de ejecución de JS de codigo abierto que utilizael mismo motor que google Chrome, y nos va a permitir escribir codgio en js en el backend
    -> librerias node: node.js también incluye una amplia variedad de librerías que facilitan el desarrollo de app web, tales como EXPRESS.js
    -> que es una librería? conjunto de funciones y metodos predefinidos agrupados en un paquete, que usar cuando escribimos nuestro codigo en diferentes programas

    ? instalando node -> node -v => la version que intales
      !-> npm (node package manager) -> gestor de paquetes para node.js
        - permite a los desarrolles instalarm administrar y compartir modulos de codigo y biblioecas de terceros en sus proyectos de node.js de manera sencilla

      !inicializar un proyecto de node.js => npm init
        - se crea un archivo package.json => contiene informacion sobre el proyecto y sus dependencias
        - al ejecutarlo por primera vez va a pedir:
          -> detalles sobre el proyecto,
          -> nombre,
          -> version,
          -> descripcion
          -> otros metadatos relevantes

      !instalar librerias -> npm install nombreDeLalibreria - npm i nombreDeLaLibreria

? Git - Github
  *-> git : sistema de control de versiones que permite a los desarrolladores realizar un seguimineto a las versiones antiguas del codgio, trabajar en paralelo en diferentes ramas y fusionar los cambios en una unica linea princial 
  ! instalar git
  -> comandos de git
    -> git init
    -> 
*/

