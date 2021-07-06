# Infopueblo-Frontend

Desarrollo de código de la parte backend del Proyecto de Infopueblo.

Para ello, se ha hecho uso de [Angular](https://angular.io/), un framework que facilitar la creación y programación de aplicaciones web de una sola página.

## Configurar entorno

Este proyecto se ha generado con [Angular CLI](https://github.com/angular/angular-cli) versión 11.1.4.

Instalación de Angular:

```sh
npm install -g @angular/cli
```

Creación del proyecto:

```sh
ng new nombre-del-proyecto
```

Una vez creado el proyecto, Previamente a ejecutar cualquiera de los siguientes comandos, habrá que navegar a la carpeta en la que se encuentra el proyecto con `cd nombre-del-proyecto`.

Ejecutar el proyecto:

```sh
ng serve -o
```

Crear componente:

```sh
ng generate component nombre-del-componente
```

Compilar el proyecto (usar la etiqueta `--prod` para una compilación en producción):

```sh
ng build
```

Para más ayuda, visitar la página [Angular CLI Overview and Command Reference](https://angular.io/cli).

## Herramientas utlizadas

- **Bootstrap**: Librería de estilos web.
- **Bootstrap icons**: Paquete de iconos de la librería Bootstrap.
- **Carousel for Angular**: Paquete que incluye un carousel optimizado para Angular.
- **Angular Material**: Paquete de Material Design optimizado para Angular.
- **Angular Highcharts**: Paquete de gráficas HighCharts optimizado para Angular.
- **Angular Full Page**: Paquete para adaptar a la pantalla completa optimizado para Angular.
- **Google Maps**: Paquete para incluir un mapa de Google Maps.
- **Skeleton**: Paquete para usar un método de carga de resultados moderno.


## Comandos de instalación

Bootstrap v5:

```sh
npm install bootstrap@next
```

Bootstrap icons:

```sh
npm install bootstrap-icons
```

Carousel for Angular:

```sh
npm i angular-responsive-carousel
```

Angular Material:

```sh
ng add @angular/material
```

Angular Highcharts:

```sh
npm install highcharts-angular --save
```

Angular Full Page:

```sh
npm install @fullpage/angular-fullpage
```

Google Maps:

```sh
npm install --save @types/googlemaps
```

Skeleton:

```sh
npm install ngx-skeleton-loader
```