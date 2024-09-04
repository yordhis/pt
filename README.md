# API REST FULL
## Api de gestión de contenido multimedia
Esta API está enfocada en el concepto de biblioteca para manejar el contenido multimedia, ordenando la información pro tipos y por temas. 

Y por otra parte permite tres tipos de usuarios para el manejo de permisos:
- Reader ( Lector )
  - Permisos: R (Leer)
- Creator ( Creador )
  - Permisos: CRU (Crear, Leer, Editar)
- Admin ( Administrador )
  - Permisos: CRUD (Crear, Leer, Editar, Eliminar)

## Rols
- El rol **Admin** tiene acceso a todos los modulos (endpoint)
- El rol **Reader** tiene acceso a el módulo (endpoint) libreries
- El rol **Creator** tiene acceso a el módulo (endpoint) libreries

## Prerequisitos
- Nodejs v20.3.1
- Database Mongodb

## Despliegue:
1. Clonar el repositorio donde deseé en su equipo 
~~~
   git clone https://github.com/yordhis/pt.git
~~~

2. Ejecutar los siguientes comandos:
   1. Instalar los paquetes de nodejs
    ~~~
        npm install
    ~~~ 
   2. Correr la api
    ~~~
        npm start
    ~~~
   3. Punto de acceso a la api:
    [punto_de_acceso] http://localhost:3000/api/

## Enpoints (Rutas de acceso)
- [auth] http://localhost:3000/api/auth
- [rols] http://localhost:3000/api/rols
- [profiles] http://localhost:3000/api/profiles
- [categories] http://localhost:3000/api/categories
- [themes] http://localhost:3000/api/themes
- [libraries] http://localhost:3000/api/libraries

## ¿Comó usar la api?
### ¡Pasos iniciales!
1. Crear el usuario administrador con la ruta [auth] http://localhost:3000/api/auth/registerAdmin y envias el siguiente cuerpo json:
~~~
  {
    "username": "admin",
    "email": "admin@admin.com",
    "password": "12345678",
    "rol": "admin"
  }
~~~

2. Registrar las categorias de contenidos (Permisos de contenido) con la ruta [categories] http://localhost:3000/api/categories y envias el siguiente cuerpo json:
~~~
  {
    "name":"video",
    "status": 1
  }
~~~

3. Registrar los temas para la biblioteca, con la ruta [themes] http://localhost:3000/api/themes y envias el siguiente cuerpo json:
~~~
  {
    "name": "matemáticas",
    "image": "url-image",
    "contentPermission": [
      "image",
      "video",
      "audio"
    ],
    "status": 1
  }
~~~

4. Registrar las librerias (recursos multimedia), con la ruta [libraries] http://localhost:3000/api/libraries y envias el siguiente cuerpo json:
~~~
  {
    "theme":"ciencias",
    "title":"Game of trone",
    "description": "El juego de los reinos",
    "links": { 
        "image":["url-imagen-1"], 
        "video":["url-video-temp-cap-1"]
    },
    "views": 0,
    "author": "Netflix",
    "credit": "username"
  }
~~~

¡Ya estas listo! puedes seguir disfrutando de la api para manejar el contenido multimeida de tu web.

## Documentación detalla de los endPoint
  [linkSwatch]

## Conclusión
Con esta API REST FULL podrás manejar los permisos de usuarios para acceder a la información, te permite categorizar tus recursos por tipo y por temas y tambien permite que los usuario se registren como lector o creador de contenido.



