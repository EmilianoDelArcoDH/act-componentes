# Soluciones modelo - StreamFlix Actividades

Este documento reune una solucion posible para cada actividad. No es la unica forma correcta de resolverlas, pero cada ejemplo respeta la consigna, mantiene la progresion entre clases y apunta a pasar las validaciones del proyecto.

## Clase 1 - Pensar la web en componentes

### Actividad 1 - Detectar componentes de StreamFlix

```html
<header>
  <h1>StreamFlix</h1>
  <nav>
    <a href="index.html">Inicio</a>
    <a href="peliculas.html">Peliculas</a>
  </nav>
</header>

<main>
  <section class="movies">
    <h2>Peliculas destacadas</h2>
    <p>Seleccion de contenidos recomendados.</p>
  </section>
</main>

<footer>
  <p>StreamFlix Originals</p>
</footer>
```

### Actividad 2 - Crear cards duplicadas manualmente

```html
<main>
  <section class="movies-grid">
    <article class="movie-card">
      <h3>Neon Runner</h3>
      <p>2026 - 8.8/10</p>
      <button>Ver ahora</button>
    </article>

    <article class="movie-card">
      <h3>Codigo Lunar</h3>
      <p>2024 - 8.5/10</p>
      <button>Ver ahora</button>
    </article>

    <article class="movie-card">
      <h3>Pixel Noir</h3>
      <p>2025 - 9/10</p>
      <button>Ver ahora</button>
    </article>
  </section>
</main>
```

### Actividad 3 - Separar estructura, estilo y comportamiento

```html
<!-- HTML -->
<header>
  <h1>StreamFlix</h1>
</header>

<main>
  <article class="movie-card">
    <h3>Neon Runner</h3>
    <button class="play-button">Ver ahora</button>
  </article>
</main>

<footer>
  <p>StreamFlix Originals</p>
</footer>

/* CSS */
.movie-card {
  padding: 1rem;
  border-radius: 8px;
  background-color: #1a1a1a;
  color: white;
}

// JS
function playMovie() {
  console.log("Reproduciendo pelicula");
}

document.querySelector(".play-button").addEventListener("click", playMovie);
```

## Clase 2 - Uso de template en HTML

### Actividad 1 - Crear el molde de una card

```html
<template id="movie-card-template">
  <article class="movie-card">
    <h3 class="movie-title">Titulo de pelicula</h3>
    <p class="movie-rating">8.8/10</p>
    <button>Ver ahora</button>
  </article>
</template>
```

### Actividad 2 - Comprobar que template no se renderiza

```html
<header>
  <h1>StreamFlix</h1>
</header>

<main>
  <section class="movies-grid"></section>

  <template id="movie-card-template">
    <article class="movie-card">
      <h3 class="movie-title">Neon Runner</h3>
      <p class="movie-rating">8.8/10</p>
      <button>Ver ahora</button>
    </article>
  </template>
</main>

<footer>
  <p>StreamFlix Originals</p>
</footer>
```

### Actividad 3 - Preparar template para clonarlo despues

```html
<main>
  <section class="movies-grid"></section>

  <!-- JS clonara este template para crear cada pelicula -->
  <template id="movie-card-template">
    <article class="movie-card">
      <h3 class="movie-title"></h3>
      <p class="movie-rating"></p>
      <p class="movie-year"></p>
      <button>Ver ahora</button>
    </article>
  </template>
</main>
```

## Clase 3 - Includes simples en HTML

### Actividad 1 - Detectar el problema del header duplicado

```html
<!-- index.html -->
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StreamFlix</title>
  </head>
  <body>
    <header>StreamFlix nav</header>
    <main>Inicio</main>
    <footer>Contacto</footer>
  </body>
</html>

<!-- peliculas.html -->
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Peliculas - StreamFlix</title>
  </head>
  <body>
    <header>StreamFlix nav</header>
    <main>Peliculas</main>
    <footer>Contacto</footer>
  </body>
</html>

<!-- Analisis -->
El header esta repetido en index.html y peliculas.html.
El footer esta repetido en index.html y peliculas.html.
Duplicar header y footer dificulta el mantenimiento porque cada cambio debe hacerse en varias paginas.
```

### Actividad 2 - Separar header y footer

```html
<!-- index.html -->
<main>
  <section class="movies-grid">
    <h2>Peliculas destacadas</h2>
  </section>
</main>

<!-- components/header.html -->
<header class="site-header">
  <div class="container">
    <h1>StreamFlix</h1>
    <nav>
      <a href="index.html">Inicio</a>
      <a href="peliculas.html">Peliculas</a>
    </nav>
  </div>
</header>

<!-- components/footer.html -->
<footer class="site-footer">
  <p>&copy; 2026 StreamFlix</p>
</footer>
```

### Actividad 3 - Preparar placeholders para includes

```html
<!-- index.html -->
<div id="header-placeholder"></div>

<main>
  <section class="movies-grid">
    <h2>Peliculas destacadas</h2>
  </section>
</main>

<div id="footer-placeholder"></div>
<script src="app.js"></script>
```

## Clase 4 - Utilidades CSS para diseno reutilizable

### Actividad 1 - Crear utilidades de espaciado

```css
.m-1 { margin: 0.25rem; }
.m-2 { margin: 0.5rem; }
.m-3 { margin: 1rem; }

.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 1rem; }
```

### Actividad 2 - Crear utilidades visuales

```css
.bg-primary { background-color: #0d9488; }
.bg-dark { background-color: #1a1a1a; }

.text-white { color: #ffffff; }
.text-center { text-align: center; }

.bold { font-weight: bold; }
.rounded { border-radius: 8px; }
```

### Actividad 3 - Aplicar utilidades en StreamFlix

```html
<!-- index.html -->
<header class="p-3 bg-dark text-white">
  <h1 class="text-center bold">StreamFlix</h1>
</header>

<main>
  <section class="movies-grid">
    <article class="movie-card p-3 rounded bg-dark text-white">
      <h3 class="text-center bold">Neon Runner</h3>
      <button class="p-2 bg-primary text-white rounded bold">Ver ahora</button>
    </article>
  </section>
</main>

<footer class="p-2 text-center">
  StreamFlix Originals
</footer>

<!-- styles.css -->
.bg-primary { background-color: #0d9488; }
.bg-dark { background-color: #1a1a1a; }
.text-white { color: white; }
.text-center { text-align: center; }
.bold { font-weight: bold; }
.rounded { border-radius: 8px; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 1rem; }
```

## Clase 5 - Insertar plantillas con JS minimo

### Actividad 1 - Crear funcion loadInclude

```html
<!-- index.html -->
<div id="header-placeholder"></div>

<main>
  <section class="movies-grid"></section>
</main>

<div id="footer-placeholder"></div>
<script src="app.js"></script>

<!-- components/header.html -->
<header class="site-header">
  <h1>StreamFlix</h1>
  <nav>
    <a href="index.html">Inicio</a>
    <a href="peliculas.html">Peliculas</a>
  </nav>
</header>

<!-- components/footer.html -->
<footer class="site-footer">
  <p>StreamFlix Originals</p>
</footer>

<!-- app.js -->
function loadInclude(path, placeholderId) {
  fetch(path)
    .then((res) => res.text())
    .then((html) => {
      document.querySelector(placeholderId).innerHTML = html;
    });
}

loadInclude("components/header.html", "#header-placeholder");
loadInclude("components/footer.html", "#footer-placeholder");
```

### Actividad 2 - Clonar template de pelicula

```html
<!-- index.html -->
<main>
  <section class="movies-grid"></section>

  <template id="movie-card-template">
    <article class="movie-card">
      <h3 class="movie-title"></h3>
      <p class="movie-rating"></p>
      <p class="movie-year"></p>
      <button>Ver ahora</button>
    </article>
  </template>
</main>

<!-- app.js -->
function createMovieCard(title, rating, year) {
  const template = document.querySelector("#movie-card-template");
  const clone = template.content.cloneNode(true);

  clone.querySelector(".movie-title").textContent = title;
  clone.querySelector(".movie-rating").textContent = rating;
  clone.querySelector(".movie-year").textContent = year;

  document.querySelector(".movies-grid").appendChild(clone);
}

createMovieCard("Neon Runner", "8.8/10", "2026");
```

### Actividad 3 - Generar varias cards desde datos

```html
<!-- index.html -->
<main>
  <section class="movies-grid"></section>

  <template id="movie-card-template">
    <article class="movie-card">
      <h3 class="movie-title"></h3>
      <p class="movie-rating"></p>
      <p class="movie-year"></p>
      <button>Ver ahora</button>
    </article>
  </template>
</main>

<!-- app.js -->
function createMovieCard(title, rating, year) {
  const template = document.querySelector("#movie-card-template");
  const clone = template.content.cloneNode(true);

  clone.querySelector(".movie-title").textContent = title;
  clone.querySelector(".movie-rating").textContent = rating;
  clone.querySelector(".movie-year").textContent = year;

  document.querySelector(".movies-grid").appendChild(clone);
}

const movies = [
  { title: "Neon Runner", rating: "8.8/10", year: "2026" },
  { title: "Codigo Lunar", rating: "8.5/10", year: "2024" },
  { title: "Pixel Noir", rating: "9/10", year: "2025" },
];

movies.forEach((movie) => {
  createMovieCard(movie.title, movie.rating, movie.year);
});
```

## Clase 6 - UI reutilizable: integracion final

### Actividad 1 - Checklist de arquitectura reutilizable

```html
<!-- index.html -->
<link rel="stylesheet" href="utilities.css">

<div id="header-placeholder"></div>

<main>
  <section class="movies-grid"></section>

  <template id="movie-card-template">
    <article class="movie-card p-3 rounded">
      <h3 class="movie-title"></h3>
      <p class="movie-rating"></p>
      <p class="movie-year"></p>
      <button class="p-2 bg-primary text-white rounded">Ver ahora</button>
    </article>
  </template>
</main>

<div id="footer-placeholder"></div>
<script src="app.js"></script>
```

### Actividad 2 - Aplicar tres mejoras

Esta solucion aplica cinco mejoras: agrega 5 peliculas, suma seccion Series, crea `.shadow`, mejora hover y personaliza colores.

```html
<!-- index.html -->
<section class="series">
  <h2>Series</h2>
  <p>Tambien recomendamos series originales de StreamFlix.</p>
</section>

<!-- styles.css -->
:root {
  --primary: #0d9488;
  --accent: #f97316;
}

.shadow {
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25);
}

.movie-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
}

<!-- app.js -->
const movies = [
  { title: "Neon Runner", rating: "8.8/10", year: "2026" },
  { title: "Codigo Lunar", rating: "8.5/10", year: "2024" },
  { title: "Pixel Noir", rating: "9/10", year: "2025" },
  { title: "Ruta Cero", rating: "8.2/10", year: "2023" },
  { title: "Ciudad Prisma", rating: "8.7/10", year: "2026" },
];

movies.forEach((movie) => {
  createMovieCard(movie.title, movie.rating, movie.year);
});
```

### Actividad 3 - Convertir StreamFlix en portfolio

```html
<!-- index.html -->
<div id="header-placeholder"></div>

<main class="p-3">
  <h1>Portfolio de Ana Dev</h1>

  <section class="movies-grid">
    <article class="project-card movie-card p-3 rounded shadow">
      <h3>Proyecto web</h3>
      <p>Sitio responsive para una marca personal.</p>
    </article>

    <article class="project-card movie-card p-3 rounded shadow">
      <h3>Dashboard</h3>
      <p>Panel de metricas con componentes reutilizables.</p>
    </article>

    <article class="project-card movie-card p-3 rounded shadow">
      <h3>App JS</h3>
      <p>Aplicacion interactiva creada con JavaScript.</p>
    </article>
  </section>

  <template id="movie-card-template">
    <article class="project-card movie-card p-3 rounded">
      <h3 class="project-title"></h3>
      <p class="project-description"></p>
      <button class="bg-primary text-white rounded">Ver proyecto</button>
    </article>
  </template>
</main>

<div id="footer-placeholder"></div>

<!-- components/header.html -->
<header class="p-3 bg-primary text-white">
  <h1>Ana Dev</h1>
  <nav>
    <a href="index.html">Proyectos</a>
    <a href="contacto.html">Contacto</a>
  </nav>
</header>

<!-- components/footer.html -->
<footer class="p-3">
  <p>Contacto: ana@example.com - Redes: @anadev</p>
</footer>
```
