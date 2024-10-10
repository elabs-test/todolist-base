# To-Do List App (MVP)

Este es un proyecto sencillo de una aplicación de lista de tareas (To-Do List) desarrollado con **React** y **Vite**, y configurado para ejecutarse en un entorno **Docker** utilizando **Docker Compose**.

## Tabla de Contenidos

-   [Requisitos Previos](#requisitos-previos)
-   [Instalación](#instalaci%C3%B3n)
-   [Levantar el Proyecto](#levantar-el-proyecto)
-   [Ejecución de Pruebas](#ejecuci%C3%B3n-de-pruebas)
-   [Tecnologías Utilizadas](#tecnolog%C3%ADas-utilizadas)
-   [Estructura del Proyecto](#estructura-del-proyecto)
-   [Contribuir](#contribuir)
-   [Licencia](#licencia)

## Requisitos Previos

Asegúrate de tener las siguientes herramientas instaladas en tu sistema antes de proceder:

-   Docker >= 20.x
-   Docker Compose >= 1.29.x

## Instalación

Sigue los siguientes pasos para clonar y preparar el proyecto en tu entorno local:

1.  Clona el repositorio:
	```bash
	git clone https://github.com/[usuario]/[nombre-proyecto]
    cd [nombre-proyecto]
	```
       

## Levantar el Proyecto

Para iniciar el proyecto utilizando **Docker Compose**, sigue estos pasos:

1.  Construye y levanta los contenedores de Docker:
	```bash
	docker-compose up --build
	```
    
2.  Abre tu navegador y accede a la aplicación en `http://localhost:5173` o donde te especifique docker.
    
Si quieres ejecutar los contenedores en segundo plano, usa el flag `-d`:
```bash
docker-compose up -d
``` 

### Detener el Proyecto

Para detener y eliminar los contenedores, ejecuta:
```bash
docker-compose down
```


## Ejecución de Pruebas

Si el proyecto incluye pruebas unitarias o de integración, puedes ejecutar los siguientes comandos dentro del contenedor o localmente.

Por ejemplo, si utilizas **Vitest** para pruebas:
```bash
docker-compose run app npm test
```

## Tecnologías Utilizadas

-   **React** - Librería para construir interfaces de usuario.
-   **Vite** - Un build tool rápido para proyectos modernos.
-   **Docker** - Para contenerizar la aplicación.
-   **Redux Toolkit** 
-   **Tailwind** - Para orquestar los contenedores de Docker.

## Estructura del Proyecto

```bash
todo-list-app/
├── src/                # Código fuente de la aplicación
├── public/             # Archivos estáticos
├── Dockerfile          # Configuración de Docker para el contenedor de la app
├── docker-compose.yml  # Configuración de Docker Compose para el proyecto
├── package.json        # Dependencias y scripts de npm
├── README.md           # Este archivo :)
└── .env.example        # Ejemplo de archivo de variables de entorno
```

## Contribuir

Las contribuciones son bienvenidas. Si deseas contribuir:

1.  Haz un fork del repositorio.
2.  Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3.  Realiza tus cambios y haz un commit (`git commit -m 'Añadir nueva funcionalidad'`).
4.  Sube tu rama (`git push origin feature/nueva-funcionalidad`).
5.  Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.