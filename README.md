Básicamente, para explicar el funcionamiento de mi código podria decir que es como un conjunto de herramientas que pueden hablar con la API de Rick and Morty. Y hay dos formas diferentes de hacerlo, como tener dos tipos de 
teléfonos para llamar a la API.

Primero, hay una especie de contrato llamado HttpCliente.interface.ts que le dice a cualquiera que quiera hacer un teléfono para la API qué botones debe tener.

Entonces, tengo dos teléfonos reales: axios-http-client.ts y fetch-http-client.ts. Uno usa Axios, que es como un smartphone para hacer peticiones , y el otro usa un módulo llamado 'node-fetch', que es como otro tipo de smartphone.

En el archivo principal app.ts, básicamente estoy tomando estos dos teléfonos y llamando a la API de Rick and Morty para obtener información, como la lista de personajes. Solo que estoy probando ambos teléfonos .

Lo interesante aquí es que si quisiera cambiar a otro teléfono despues, podría hacerlo fácilmente sin tener que cambiar todo mi código. Eso es gracias a la "inyección de dependencias", que es como decirle a mi aplicación que telefono quisiera usar.

En resumen, el código proporciona una estructura modular para realizar peticiones HTTP utilizando dos implementaciones diferentes: una con Axios y otra con 'node-fetch'. Se utiliza TypeScript para aprovechar las ventajas del tipado estático, 
y se emplea ts-node para ejecutar directamente archivos TypeScript en Node.js sin necesidad de compilar a JavaScript previamente. La inyección de dependencias permite alternar fácilmente entre las implementaciones de clientes HTTP.
