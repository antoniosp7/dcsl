## Proyeco teléfono

### REACT-APP
En mi caso he realizado una pequeña aplicación siguiendo el stack MERN.

- MongoDB: MongoDB es una de las bases de datos NoSQL más conocidas y está orientada en documentos.
- Express JS: Express JS es un marco que se ha superpuesto en la parte superior de Node JS y se puede utilizar para crear el backend del sitio web con la ayuda de las estructuras y funciones de Node JS. Sin embargo, como Node JS está destinado a ejecutar JavaScript del lado servidor, pero no para desarrollar sitios web, Express JS está destinado justo a esto, a crear sitios web.
- React JS: React JS es básicamente una biblioteca creada por Facebook que se está utilizando ampliamente para crear componentes de interfaz de usuario en la actualidad. Esto puede ayudarnos a crear interfaces de usuario atractivas para nuestras aplicaciones web de una sola página.
- Node JS: Este es un entorno de ejecución para JavaScript que puede permitirle ejecutar JavaScript del lado servidor y no en un navegador. Un interesante concepto a tener en cuenta en Node.js es el concepto de módulo, recursos que pueden ser más o menos simples o complejos en funcionalidad y que contiene un código JavaScript que podemos reutilizar en toda nuestra aplicación.

En esta aplicación hemos integrado las funciones de crear un teléfono, listarlo y borrarlo.

El despligue es sencillo al haber integrado docker, nos bastará con realizar tres comandos en la ruta superior de la carpeta:

1. docker build -t "react-app" ./client/
2. docker build -t "api-server" ./server/
3. docker-compose up

Esto no desplegará la aplicación en la dirección **localhost:3000**

