# PROYECTO FINAL INTEGRADOR

## TRAMO 3

### Plataforma Interactiva de Viajes con Registro y Login

#

_Aplicacion compuesta por Backend y Frontend que propone un sistema de posteos y comentarios para interactuar entre usuarios registrados y al mismo tiempo ofrecer los frutos de esa interaccion a los visitantes_

**para su puesta en marcha requiere los siguientes pasos:**

- Una vez descargado el repositorio navegar hacia la carpeta de backend:

  - Con git bash usar:

    > cd backend

  - Luego instalar las dependencias ejecutando:

    > npm i

  - Ademas recomiendo instalar _nodemon_ como dependencia de desarrollador:

    > npm install --save-dev nodemon
    > npm i

  - Por ultimo debemos configurar el archivo _.env_:

    > crear dicho archivo usando como referencia ".env.example" y completar los campos "PORT" y "JWT_SECRET"

  - Ahora ya podemos correr el servidor con los comandos:

    > npm run dev

- Para usar el frontend debemos navegar hacia la carpeta con ese nombre

  - Con git bash usar:

    > cd ..

    > cd frontend

  - Luego instalar las dependencias ejecutando:

    > npm i

  - Acá no hace falta configurar nada mas, ya podemos ejecutar

    > npm run dev

_Hasta la fecha de éste último comit se encuentra funcionando el backend y la gestion de usuarios del frontend, resta realizar los cruds:_

- Posteos
- Comentarios
