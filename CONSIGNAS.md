## Clase 1 - Pensar la web en componentes

#SCH_ES_C01_01
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Detectar componentes de StreamFlix</h2>

    <p class="contexto-consigna">
        Debes construir una página simple de StreamFlix para practicar cómo reconocer las partes principales de una interfaz.
    </p>

    <h3>Contexto</h3>
    <p>
        Antes de reutilizar componentes, primero necesitas identificar qué piezas forman una página: encabezado, navegación, contenido principal, sección y pie de página.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>Completa el archivo <code>index.html</code> con una estructura de StreamFlix.</li>
        <li>Dentro de <code>&lt;header&gt;</code>, conserva o agrega un <code>&lt;h1&gt;</code> con el texto <code>StreamFlix</code>.</li>
        <li>Dentro del mismo <code>&lt;header&gt;</code>, agrega una etiqueta <code>&lt;nav&gt;</code> con al menos 2 enlaces.</li>
        <li>Agrega un <code>&lt;main&gt;</code> y, dentro de él, una <code>&lt;section&gt;</code> para películas destacadas.</li>
        <li>Dentro de la <code>&lt;section&gt;</code>, conserva o agrega un <code>&lt;h2&gt;</code>.</li>
        <li>Agrega un <code>&lt;footer&gt;</code> al final.</li>
    </ol>

    <h3>Código inicial</h3>
    <pre class="codigo-copiable"><code>&lt;header&gt;

&lt;h1&gt;StreamFlix&lt;/h1&gt;

____

&lt;/header&gt;

&lt;main&gt;

____

    &lt;h2&gt;Películas destacadas&lt;/h2&gt;

____

&lt;/main&gt;

____</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        No agregues estilos ni JavaScript en esta actividad. Concéntrate solo en la estructura HTML.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        Debe verse una página simple donde se distingan claramente el <code>&lt;header&gt;</code>, la navegación, el contenido principal, una sección de películas y el <code>&lt;footer&gt;</code>.
    </p>
    	</article>

</div>

#SCH_ES_C01_02
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Crear tarjetas duplicadas manualmente</h2>

    <p class="contexto-consigna">
        Debes crear varias tarjetas de películas copiando una misma estructura para reconocer el problema de repetir código.
    </p>

    <h3>Contexto</h3>
    <p>
        StreamFlix necesita mostrar varias películas. En esta actividad todavía no usarás plantillas: primero debes experimentar cómo se siente repetir HTML manualmente.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>Trabaja dentro de la sección con clase <code>movies-grid</code>.</li>
        <li>Crea 3 películas copiando la estructura de <code>&lt;article class="movie-card"&gt;</code>.</li>
        <li>Cada tarjeta debe tener un título en una etiqueta de encabezado.</li>
        <li>Cada tarjeta debe tener un año o calificación en un <code>&lt;p&gt;</code>.</li>
        <li>Cada tarjeta debe tener un <code>&lt;button&gt;</code> con el texto <code>Ver ahora</code>.</li>
        <li>Cambia los datos de cada tarjeta para que no sean idénticas.</li>
    </ol>

    <h3>Código inicial</h3>
    <pre class="codigo-copiable"><code>&lt;main&gt;

&lt;section class="movies-grid"&gt;
&lt;article class="movie-card"&gt;
&lt;h3&gt;Neon Runner&lt;/h3&gt;
&lt;p&gt;2026 - 8.8/10&lt;/p&gt;
&lt;button&gt;Ver ahora&lt;/button&gt;
&lt;/article&gt;

    ____

&lt;/section&gt;
&lt;/main&gt;</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        No uses <code>&lt;template&gt;</code> todavía. El objetivo es notar qué partes se repiten.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        Deben verse 3 tarjetas de películas, con una estructura similar, pero con datos distintos.
    </p>
    	</article>

</div>

#SCH_ES_C01_03
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Separar estructura, estilo y comportamiento</h2>

    <p class="contexto-consigna">
        Debes ordenar una tarjeta de StreamFlix separando qué corresponde a HTML, qué corresponde a CSS y qué corresponde a JavaScript.
    </p>

    <h3>Contexto</h3>
    <p>
        Una interfaz se vuelve más clara cuando cada lenguaje tiene una responsabilidad: HTML para estructura, CSS para apariencia y JavaScript para comportamiento.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>En el bloque HTML, conserva <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code> y agrega <code>&lt;footer&gt;</code>.</li>
        <li>En HTML, deja una tarjeta con clase <code>movie-card</code>.</li>
        <li>Agrega un botón con clase <code>play-button</code>.</li>
        <li>En el bloque CSS, completa una regla para <code>.movie-card</code>.</li>
        <li>En el bloque JS, agrega una función o un <code>addEventListener</code> para el botón.</li>
    </ol>

    <h3>Código inicial</h3>
    <pre class="codigo-copiable"><code>&lt;!-- HTML --&gt;

&lt;header&gt;&lt;h1&gt;StreamFlix&lt;/h1&gt;&lt;/header&gt;
&lt;main&gt;
&lt;article class="movie-card"&gt;
&lt;h3&gt;Neon Runner&lt;/h3&gt;
&lt;button class="play-button"&gt;Ver ahora&lt;/button&gt;
&lt;/article&gt;
&lt;/main&gt;

____

/* CSS */
.movie-card {

____

}

// JS
____</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        No escribas estilos dentro del HTML ni JavaScript dentro de las etiquetas HTML.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        El mismo componente debe entenderse en tres partes separadas: estructura en HTML, apariencia en CSS y comportamiento en JavaScript.
    </p>
    	</article>

</div>

## Clase 2 - Uso de template en HTML

#SCH_ES_C02_01
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Crear el molde de una tarjeta</h2>

    <p class="contexto-consigna">
        Debes crear un molde HTML para una tarjeta de película usando la etiqueta <code>&lt;template&gt;</code>.
    </p>

    <h3>Contexto</h3>
    <p>
        En la actividad anterior copiaste tarjetas manualmente. Ahora debes guardar esa estructura en un molde para reutilizarla más adelante.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>Crea una etiqueta <code>&lt;template&gt;</code>.</li>
        <li>Agrega el identificador <code>movie-card-template</code>.</li>
        <li>Dentro del <code>&lt;template&gt;</code>, agrega una tarjeta con clase <code>movie-card</code>.</li>
        <li>Dentro de la tarjeta, agrega un elemento con clase <code>movie-title</code>.</li>
        <li>Agrega un elemento con clase <code>movie-rating</code> o <code>movie-year</code>.</li>
        <li>Agrega un <code>&lt;button&gt;</code> dentro de la tarjeta.</li>
    </ol>

    <h3>Código inicial</h3>
    <pre class="codigo-copiable"><code>&lt;template id="movie-card-template"&gt;

____

&lt;/template&gt;</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        El contenido de <code>&lt;template&gt;</code> funciona como molde y no se muestra automáticamente en la página.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        El HTML de una tarjeta debe quedar guardado como molde, sin generar todavía una tarjeta dinámica.
    </p>
    	</article>

</div>

#SCH_ES_C02_02
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Comprobar que la plantilla no se renderiza</h2>

    <p class="contexto-consigna">
        Debes separar el lugar visible donde aparecerán las tarjetas del molde oculto que se usará más adelante.
    </p>

    <h3>Contexto</h3>
    <p>
        La etiqueta <code>&lt;template&gt;</code> no muestra su contenido automáticamente. Por eso necesitas un contenedor visible fuera de la plantilla.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>Conserva <code>&lt;header&gt;</code> y <code>&lt;footer&gt;</code> visibles en la página.</li>
        <li>Dentro de <code>&lt;main&gt;</code>, deja una <code>&lt;section&gt;</code> con clase <code>movies-grid</code> fuera del <code>&lt;template&gt;</code>.</li>
        <li>Deja la sección <code>movies-grid</code> vacía, sin tarjetas manuales visibles.</li>
        <li>Mueve la tarjeta al interior de <code>&lt;template id="movie-card-template"&gt;</code>.</li>
        <li>Ubica el <code>&lt;template&gt;</code> dentro de <code>&lt;main&gt;</code>.</li>
    </ol>

    <h3>Código inicial</h3>
    <pre class="codigo-copiable"><code>&lt;header&gt;&lt;h1&gt;StreamFlix&lt;/h1&gt;&lt;/header&gt;

&lt;main&gt;
&lt;section class="movies-grid"&gt;
&lt;article class="movie-card"&gt;
&lt;h3&gt;Neon Runner&lt;/h3&gt;
&lt;button&gt;Ver ahora&lt;/button&gt;
&lt;/article&gt;
&lt;/section&gt;

____

&lt;/main&gt;
____</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        La sección <code>movies-grid</code> debe quedar fuera del <code>&lt;template&gt;</code> y sin tarjetas manuales dentro.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        Debe verse la página base, pero no deben verse tarjetas porque quedaron guardadas dentro del <code>&lt;template&gt;</code>.
    </p>
    	</article>

</div>

#SCH_ES_C02_03
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Preparar la plantilla para clonarla después</h2>

    <p class="contexto-consigna">
        Debes dejar una plantilla preparada con clases que JavaScript podrá encontrar y completar en una clase posterior.
    </p>

    <h3>Contexto</h3>
    <p>
        Para completar una tarjeta clonada, JavaScript necesita encontrar lugares claros donde colocar título, calificación y año.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>Conserva una <code>&lt;section&gt;</code> con clase <code>movies-grid</code>.</li>
        <li>Crea <code>&lt;template id="movie-card-template"&gt;</code>.</li>
        <li>Dentro de la plantilla, agrega una tarjeta con clase <code>movie-card</code>.</li>
        <li>Dentro de la tarjeta, agrega elementos con las clases <code>movie-title</code>, <code>movie-rating</code> y <code>movie-year</code>.</li>
        <li>Agrega un comentario que indique que JavaScript clonará la plantilla más adelante.</li>
        <li>No uses <code>cloneNode</code> todavía.</li>
    </ol>

    <h3>Código inicial</h3>
    <pre class="codigo-copiable"><code>&lt;main&gt;

&lt;section class="movies-grid"&gt;&lt;/section&gt;

&lt;!-- ____ --&gt;
&lt;template id="movie-card-template"&gt;
&lt;article class="movie-card"&gt;
&lt;h3 class="movie-title"&gt;&lt;/h3&gt;
____
&lt;button&gt;Ver ahora&lt;/button&gt;
&lt;/article&gt;
&lt;/template&gt;
&lt;/main&gt;</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        Solo prepara la estructura. No agregues JavaScript para clonar la plantilla en esta actividad.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        El HTML debe quedar listo para que, más adelante, JavaScript pueda cambiar el título, la calificación y el año en cada copia.
    </p>
    	</article>

</div>

## Clase 3 - Includes simples en HTML

#SCH_ES_C03_01
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Detectar el problema del encabezado duplicado</h2>

    <p class="contexto-consigna">
        Debes analizar dos páginas de StreamFlix para reconocer qué partes se repiten y por qué eso complica el mantenimiento.
    </p>

    <h3>Contexto</h3>
    <p>
        Las plantillas ayudan dentro de una página. Los fragmentos HTML ayudan cuando una misma parte se repite en varias páginas.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>Revisa el ejemplo de <code>index.html</code> y <code>peliculas.html</code>.</li>
        <li>En el bloque <code>Analisis</code>, escribe una frase que diga que el <code>&lt;header&gt;</code> est&aacute; repetido en las dos p&aacute;ginas.</li>
        <li>En el mismo bloque, escribe otra frase que diga que el <code>&lt;footer&gt;</code> est&aacute; repetido en las dos p&aacute;ginas.</li>
        <li>Agrega una frase breve que explique por qu&eacute; duplicar <code>&lt;header&gt;</code> y <code>&lt;footer&gt;</code> dificulta mantener el sitio.</li>
    </ol>

    <h3>C&oacute;digo inicial</h3>
    <pre class="codigo-copiable"><code>&lt;!-- index.html --&gt;

&lt;!doctype html&gt;
&lt;html lang="es"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;StreamFlix&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;header&gt;StreamFlix nav&lt;/header&gt;
    &lt;main&gt;Inicio&lt;/main&gt;
    &lt;footer&gt;Contacto&lt;/footer&gt;
  &lt;/body&gt;
&lt;/html&gt;

&lt;!-- peliculas.html --&gt;
&lt;!doctype html&gt;
&lt;html lang="es"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Pel&iacute;culas - StreamFlix&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;header&gt;StreamFlix nav&lt;/header&gt;
    &lt;main&gt;Pel&iacute;culas&lt;/main&gt;
    &lt;footer&gt;Contacto&lt;/footer&gt;
  &lt;/body&gt;
&lt;/html&gt;

&lt;!-- Analisis --&gt;
____</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        En esta actividad no tienes que corregir el c&oacute;digo ni marcar visualmente los elementos. Solo debes escribir el an&aacute;lisis de la repetici&oacute;n.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        Debe quedar escrito qué partes se repiten entre páginas y por qué esa duplicación puede traer problemas.
    </p>
    	</article>

</div>

#SCH_ES_C03_02
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Separar encabezado y pie de página</h2>

    <p class="contexto-consigna">
        Debes separar el encabezado y el pie de página en archivos propios para evitar repetir esas partes en cada página.
    </p>

    <h3>Contexto</h3>
    <p>
        Cuando una parte del sitio se repite, conviene centralizarla. Así, si cambia la navegación o el pie de página, no tienes que modificar varias páginas.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>En <code>index.html</code>, identifica el bloque completo de <code>&lt;header&gt;</code>. Es el bloque que empieza en la etiqueta de apertura <code>&lt;header&gt;</code> y termina en la etiqueta de cierre <code>&lt;/header&gt;</code>.</li>
        <li>Quita ese bloque de <code>index.html</code> y col&oacute;calo en <code>components/header.html</code>.</li>
        <li>En <code>components/header.html</code> debe quedar solo ese fragmento de encabezado: no agregues <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> ni <code>&lt;body&gt;</code>.</li>
        <li>En <code>index.html</code>, identifica el bloque completo de <code>&lt;footer&gt;</code>. Es el bloque que empieza en la etiqueta de apertura <code>&lt;footer&gt;</code> y termina en la etiqueta de cierre <code>&lt;/footer&gt;</code>.</li>
        <li>Quita ese bloque de <code>index.html</code> y col&oacute;calo en <code>components/footer.html</code>.</li>
        <li>En <code>components/footer.html</code> debe quedar solo ese fragmento de pie de p&aacute;gina: no agregues <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> ni <code>&lt;body&gt;</code>.</li>
        <li>Deja en <code>index.html</code> solo el <code>&lt;main&gt;</code> con el contenido propio de la p&aacute;gina.</li>
    </ol>

    <h3>Código inicial</h3>
    <pre class="codigo-copiable"><code>&lt;!-- index.html --&gt;

&lt;header class="site-header"&gt;
  &lt;div class="container"&gt;
    &lt;h1&gt;StreamFlix&lt;/h1&gt;
    &lt;nav&gt;
      &lt;a href="index.html"&gt;Inicio&lt;/a&gt;
      &lt;a href="peliculas.html"&gt;Pel&iacute;culas&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/div&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;section class="movies-grid"&gt;
    &lt;h2&gt;Pel&iacute;culas destacadas&lt;/h2&gt;
  &lt;/section&gt;
&lt;/main&gt;

&lt;footer class="site-footer"&gt;
  &lt;p&gt;&amp;copy; 2026 StreamFlix&lt;/p&gt;
&lt;/footer&gt;

&lt;!-- components/header.html --&gt;

____

&lt;!-- components/footer.html --&gt;
____</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        Los archivos de <code>components</code> son fragmentos. No deben tener estructura completa de documento.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        <code>index.html</code> ya no debe duplicar encabezado ni pie de página, y esos fragmentos deben quedar separados en la carpeta <code>components</code>.
    </p>
    	</article>

</div>

#SCH_ES_C03_03
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Preparar contenedores vac&iacute;os para fragmentos HTML</h2>

    <p class="contexto-consigna">
        Debes preparar <code>index.html</code> para que JavaScript pueda insertar el encabezado y el pie de p&aacute;gina m&aacute;s adelante.
    </p>

    <h3>Contexto</h3>
    <p>
        El encabezado y el pie de p&aacute;gina ya fueron separados en archivos propios. Ahora necesitas dejar dos contenedores vac&iacute;os en <code>index.html</code>: uno antes del contenido principal y otro despu&eacute;s.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>En el primer espacio <code>____</code>, antes de <code>&lt;main&gt;</code>, agrega un <code>&lt;div&gt;</code> vac&iacute;o con id <code>header-placeholder</code>.</li>
        <li>No escribas contenido dentro de ese <code>&lt;div&gt;</code>.</li>
        <li>Deja el bloque <code>&lt;main&gt;</code> como est&aacute;.</li>
        <li>En el segundo espacio <code>____</code>, despu&eacute;s de <code>&lt;/main&gt;</code>, agrega un <code>&lt;div&gt;</code> vac&iacute;o con id <code>footer-placeholder</code>.</li>
        <li>En el &uacute;ltimo espacio <code>____</code>, agrega la etiqueta <code>&lt;script&gt;</code> que conecta el archivo <code>app.js</code>.</li>
        <li>No vuelvas a escribir <code>&lt;header&gt;</code> ni <code>&lt;footer&gt;</code> completos en <code>index.html</code>.</li>
    </ol>

    <h3>C&oacute;digo inicial</h3>
    <pre class="codigo-copiable"><code>&lt;!-- index.html --&gt;

____
&lt;main&gt;
  &lt;section class="movies-grid"&gt;
    &lt;h2&gt;Pel&iacute;culas destacadas&lt;/h2&gt;
  &lt;/section&gt;
&lt;/main&gt;
____
____</code></pre>

    <div class="aviso-importante">
        <strong>Pista:</strong>
        Un contenedor debe quedar antes de <code>&lt;main&gt;</code> y el otro despu&eacute;s de <code>&lt;/main&gt;</code>. Ambos deben estar vac&iacute;os; el contenido real se cargar&aacute; m&aacute;s adelante.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        La página debe quedar preparada con <code>#header-placeholder</code>, <code>#footer-placeholder</code> y la referencia a <code>app.js</code>.
    </p>
    	</article>

</div>

## Clase 4 - Utilidades CSS para diseño reutilizable

#SCH_ES_C04_01
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Crear utilidades de espaciado</h2>

    <p class="contexto-consigna">
        Debes crear clases pequeñas de CSS para reutilizar márgenes y rellenos de forma consistente.
    </p>

    <h3>Contexto</h3>
    <p>
        Después de ordenar la estructura HTML, también conviene ordenar los estilos para no repetir valores de espacio por todo el proyecto.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>Trabaja en el archivo <code>styles.css</code>.</li>
        <li>Crea las clases <code>.m-1</code>, <code>.m-2</code> y <code>.m-3</code> para <code>margin</code>.</li>
        <li>Crea las clases <code>.p-1</code>, <code>.p-2</code> y <code>.p-3</code> para <code>padding</code>.</li>
        <li>Usa valores en <code>rem</code> o <code>px</code>.</li>
        <li>Cada clase debe tener una responsabilidad principal: margen o padding.</li>
    </ol>

    <h3>Código inicial</h3>
    <pre class="codigo-copiable"><code>.m-1 { margin: 0.25rem; }

.p-1 { padding: 0.25rem; }

.m-2 { ____ }
.m-3 { ____ }
.p-2 { ____ }
.p-3 { ____ }</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        No mezcles muchas propiedades dentro de cada utilidad. Una utilidad debe resolver una tarea pequeña.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        Debe quedar una escala pequeña y consistente de clases reutilizables para margen y padding.
    </p>
    	</article>

</div>

#SCH_ES_C04_02
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Crear utilidades visuales</h2>

    <p class="contexto-consigna">
        Debes crear clases CSS reutilizables para color, alineación, peso de texto y bordes.
    </p>

    <h3>Contexto</h3>
    <p>
        Las utilidades no solo sirven para espacio. También ayudan a repetir decisiones visuales sin escribir la misma regla muchas veces.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>Trabaja en el archivo <code>styles.css</code>.</li>
        <li>Crea <code>.bg-primary</code> para el color principal de StreamFlix.</li>
        <li>Crea <code>.bg-dark</code> para fondos oscuros.</li>
        <li>Crea <code>.text-white</code> para texto blanco.</li>
        <li>Crea <code>.text-center</code> para centrar texto.</li>
        <li>Crea <code>.bold</code> para texto en negrita.</li>
        <li>Crea <code>.rounded</code> para bordes redondeados.</li>
    </ol>

    <h3>Código inicial</h3>
    <pre class="codigo-copiable"><code>.bg-primary { background-color: #0d9488; }

.text-white { color: white; }

.bg-dark { ____ }
.text-center { ____ }
.bold { ____ }
.rounded { ____ }</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        Usa propiedades acordes a cada clase: <code>background-color</code>, <code>color</code>, <code>text-align</code>, <code>font-weight</code> y <code>border-radius</code>.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        Debe quedar un conjunto pequeño de clases visuales combinables para aplicar en distintos elementos.
    </p>
    	</article>

</div>

#SCH_ES_C04_03
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Aplicar utilidades en StreamFlix</h2>

    <p class="contexto-consigna">
        Debes componer la apariencia de una sección de StreamFlix aplicando varias clases utilitarias en el HTML.
    </p>

    <h3>Contexto</h3>
    <p>
        Ahora que ya existen utilidades de espacio y visuales, puedes combinarlas para diseñar elementos sin repetir CSS específico.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>En <code>index.html</code>, agrega clases utilitarias al <code>&lt;header&gt;</code>.</li>
        <li>Agrega clases utilitarias a <code>.movie-card</code>.</li>
        <li>Agrega clases utilitarias al título de la tarjeta.</li>
        <li>Agrega clases utilitarias al <code>&lt;button&gt;</code>.</li>
        <li>Usa al menos 5 utilidades en total.</li>
        <li>El botón debe tener <code>bg-primary</code> y <code>text-white</code>.</li>
        <li>Conserva <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code> y <code>&lt;footer&gt;</code>.</li>
    </ol>

    <h3>Código inicial</h3>
    <pre class="codigo-copiable"><code>&lt;!-- index.html --&gt;

&lt;encabezado class="p-3 bg-dark text-white"&gt;
&lt;h1 class="text-center"&gt;StreamFlix&lt;/h1&gt;
&lt;/header&gt;
&lt;main&gt;
&lt;section class="movies-grid"&gt;
&lt;article class="movie-card ____"&gt;
&lt;h3 class="____"&gt;Neon Runner&lt;/h3&gt;
&lt;button class="____"&gt;Ver ahora&lt;/button&gt;
&lt;/article&gt;
&lt;/section&gt;
&lt;/main&gt;
&lt;footer class="p-2 text-center"&gt;StreamFlix Originals&lt;/footer&gt;</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        No crees nuevas reglas específicas para resolver todo. El foco está en combinar utilidades ya definidas.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        La interfaz debe mantener buen aspecto usando clases reutilizables aplicadas directamente en el HTML.
    </p>
    	</article>

</div>

## Clase 5 - Insertar plantillas

#SCH_ES_C05_01
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Crear la función loadInclude</h2>

    <p class="contexto-consigna">
        Debes crear una función de JavaScript para cargar fragmentos externos en los contenedores vacíos de la página.
    </p>

    <h3>Contexto</h3>
    <p>
        En la clase de fragmentos HTML dejaste espacios vacíos para encabezado y pie de página. Ahora debes cargarlos con JavaScript mínimo.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>Trabaja en el archivo <code>app.js</code>.</li>
        <li>Crea una función llamada <code>loadInclude(path, placeholderId)</code>.</li>
        <li>Dentro de la función, usa <code>fetch(path)</code>.</li>
        <li>Convierte la respuesta con <code>res.text()</code> o <code>response.text()</code>.</li>
        <li>Selecciona el contenedor vacío con <code>document.querySelector(placeholderId)</code>.</li>
        <li>Inserta el HTML recibido usando <code>innerHTML</code>.</li>
        <li>Llama a <code>loadInclude</code> para <code>components/header.html</code> y <code>#header-placeholder</code>.</li>
        <li>Llama a <code>loadInclude</code> para <code>components/footer.html</code> y <code>#footer-placeholder</code>.</li>
    </ol>

    <h3>Código inicial</h3>
    <pre class="codigo-copiable"><code>&lt;!-- index.html --&gt;

&lt;div id="header-placeholder"&gt;&lt;/div&gt;
&lt;main&gt;
&lt;section class="movies-grid"&gt;&lt;/section&gt;
&lt;/main&gt;
&lt;div id="footer-placeholder"&gt;&lt;/div&gt;
&lt;script src="app.js"&gt;&lt;/script&gt;

&lt;!-- app.js --&gt;
function loadInclude(path, placeholderId) {

____

}

____</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        No escribas nuevamente el encabezado y el pie de página en <code>index.html</code>. Deben cargarse desde sus archivos.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        Debe quedar una función reutilizable capaz de cargar el encabezado y el pie de página en sus contenedores vacíos.
    </p>
    	</article>

</div>

#SCH_ES_C05_02
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Clonar plantilla de película</h2>

    <p class="contexto-consigna">
        Debes crear una función que genere una tarjeta real clonando la plantilla de película.
    </p>

    <h3>Contexto</h3>
    <p>
        En la clase de plantillas preparaste un molde oculto. Ahora usarás JavaScript para crear una copia y completar sus datos.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>Trabaja en el archivo <code>app.js</code>.</li>
        <li>Crea la función <code>createMovieCard(title, rating, year)</code>.</li>
        <li>Selecciona <code>#movie-card-template</code> con <code>document.querySelector</code>.</li>
        <li>Clona <code>template.content</code> usando <code>cloneNode(true)</code>.</li>
        <li>En el clon, completa <code>.movie-title</code>, <code>.movie-rating</code> y <code>.movie-year</code> con <code>textContent</code>.</li>
        <li>Selecciona <code>.movies-grid</code>.</li>
        <li>Inserta el clon usando <code>appendChild</code>.</li>
    </ol>

    <h3>Código inicial</h3>
    <pre class="codigo-copiable"><code>&lt;!-- index.html --&gt;

&lt;main&gt;
&lt;section class="movies-grid"&gt;&lt;/section&gt;
&lt;template id="movie-card-template"&gt;
&lt;article class="movie-card"&gt;
&lt;h3 class="movie-title"&gt;&lt;/h3&gt;
&lt;p class="movie-rating"&gt;&lt;/p&gt;
&lt;p class="movie-year"&gt;&lt;/p&gt;
&lt;button&gt;Ver ahora&lt;/button&gt;
&lt;/article&gt;
&lt;/template&gt;
&lt;/main&gt;

&lt;!-- app.js --&gt;
function createMovieCard(title, rating, year) {
const template = document.querySelector("#movie-card-template");

____

}</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        No copies una tarjeta manual en <code>movies-grid</code>. La tarjeta debe salir de la plantilla clonada.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        Debe quedar una función que recibe datos y genera una tarjeta desde el <code>&lt;template&gt;</code>.
    </p>
    	</article>

</div>

#SCH_ES_C05_03
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Generar varias tarjetas desde datos</h2>

    <p class="contexto-consigna">
        Debes separar los datos de las películas de la estructura HTML para generar varias tarjetas de forma reutilizable.
    </p>

    <h3>Contexto</h3>
    <p>
        Una función reutilizable mejora el código, pero los datos también deben estar organizados para evitar repetir llamadas sueltas o HTML manual.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>En <code>app.js</code>, crea <code>const movies = [...]</code>.</li>
        <li>Agrega al menos 3 objetos dentro del arreglo.</li>
        <li>Cada objeto debe tener <code>title</code>, <code>rating</code> y <code>year</code>.</li>
        <li>Recorre <code>movies</code> con <code>forEach</code> o con un bucle.</li>
        <li>En cada vuelta, llama a <code>createMovieCard</code> con los datos del objeto.</li>
        <li>No copies 3 tarjetas manuales en HTML.</li>
    </ol>

    <h3>Código inicial</h3>
    <pre class="codigo-copiable"><code>&lt;!-- app.js --&gt;

function createMovieCard(title, rating, year) {
// La función ya existe desde la actividad anterior
}

const movies = [
{ title: "Neon Runner", rating: "8.8/10", year: "2026" },

____

];

____</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        Las tarjetas deben generarse desde los datos. No dupliques las tarjetas en el HTML.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        Deben generarse varias tarjetas a partir del arreglo <code>movies</code>, usando la función reutilizable.
    </p>
    	</article>

</div>

## Clase 6 - UI reutilizable

#SCH_ES_C06_01
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Completar el checklist de arquitectura reutilizable</h2>

    <p class="contexto-consigna">
        En esta actividad revisarás que el proyecto final tenga las piezas necesarias para combinar fragmentos HTML, plantillas, utilidades CSS y JavaScript.
    </p>

    <h3>Contexto</h3>
    <p>
        Esta etapa integra lo trabajado en las clases anteriores: estructura separada, fragmentos reutilizables, plantilla de tarjetas y estilos utilitarios.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>En <code>index.html</code>, conserva <code>#header-placeholder</code>.</li>
        <li>Agrega <code>#footer-placeholder</code>.</li>
        <li>Conserva una sección con clase <code>movies-grid</code>.</li>
        <li>Agrega <code>&lt;template id="movie-card-template"&gt;</code> para la tarjeta reutilizable.</li>
        <li>Referencia <code>utilities.css</code> con <code>&lt;link rel="stylesheet"&gt;</code>.</li>
        <li>Referencia <code>app.js</code> con <code>&lt;script src="app.js"&gt;&lt;/script&gt;</code>.</li>
        <li>No agregues varias tarjetas visibles fuera de la plantilla.</li>
    </ol>

    <h3>Código inicial</h3>
    <pre class="codigo-copiable"><code>&lt;!-- index.html --&gt;

&lt;link rel="stylesheet" href="utilities.css"&gt;
&lt;div id="header-placeholder"&gt;&lt;/div&gt;
&lt;main&gt;
&lt;section class="movies-grid"&gt;&lt;/section&gt;
&lt;template id="movie-card-template"&gt;
____
&lt;/template&gt;
&lt;/main&gt;

____

____</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        La tarjeta reutilizable debe estar dentro del <code>&lt;template&gt;</code>. Evita duplicar tarjetas visibles manualmente.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        Debe quedar una estructura completa que combine contenedores vacíos, plantilla, utilidades CSS y el archivo <code>app.js</code>.
    </p>
    	</article>

</div>

#SCH_ES_C06_02
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Aplicar tres mejoras a StreamFlix</h2>

    <p class="contexto-consigna">
        En esta actividad personalizarás el proyecto con mejoras concretas sin romper la arquitectura reutilizable.
    </p>

    <h3>Contexto</h3>
    <p>
        Una arquitectura reutilizable sirve si permite que el proyecto crezca sin copiar código innecesario.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>Elige al menos 3 mejoras de la lista.</li>
        <li>Opción A: agrega 5 películas usando datos o llamadas a <code>createMovieCard</code>.</li>
        <li>Opción B: agrega una sección <code>Series</code>.</li>
        <li>Opción C: crea una utilidad <code>.shadow</code>.</li>
        <li>Opción D: mejora el estado <code>:hover</code> de <code>.movie-card</code>.</li>
        <li>Opción E: personaliza colores usando valores <code>hex</code> o <code>rgb</code>.</li>
        <li>Opción F: simula una página <code>peliculas.html</code>.</li>
        <li>Conserva la idea reutilizable y evita copiar muchas tarjetas manuales.</li>
    </ol>

    <h3>Código inicial</h3>
    <pre class="codigo-copiable"><code>&lt;!-- index.html --&gt;

&lt;section class="series"&gt;
&lt;h2&gt;Series&lt;/h2&gt;

____

&lt;/section&gt;

&lt;!-- styles.css --&gt;
.movie-card:hover {

____

}

&lt;!-- app.js --&gt;
const movies = [
{ title: "Neon Runner", rating: "8.8/10", year: "2026" },

____

];</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        Si agregas películas, usa datos o funciones reutilizables. No resuelvas todo copiando tarjetas manuales.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        StreamFlix debe mostrar al menos 3 mejoras concretas y seguir organizado con una arquitectura reutilizable.
    </p>
    	</article>

</div>

#SCH_ES_C06_03
consigna:
<div>
		<style>
				#consigna-schools p, #consigna-schools li {font-size:18px;}
				#consigna-schools h2{font-family: SourceSansPro, sans-serif; font-size: 24px; font-weight: bold;}
				#consigna-schools h3{font-family: SourceSansPro, sans-serif; font-size: 18px; font-weight: bold;}
				#consigna-schools p.copy-warning{font-style: italic; font-weight:bold;}
				#consigna-schools p.contexto-consigna{font-style: italic;}
				#consigna-schools .texto-copiable{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; font-style:italic;}
				#consigna-schools input.texto-copiable{text-align:center;}
				#consigna-schools code{padding:2px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222;}
				#consigna-schools .codigo-copiable{padding:12px; background-color: #E0E0E0; border: 1px solid #D9D9D9; font-size: 15px; color: #222; white-space: pre-wrap; overflow-x:auto;}
				#consigna-schools .codigo-copiable code{padding:0; background:transparent; border:none;}
				#consigna-schools .aviso-importante{margin-top:20px; padding:12px; background-color:#fff4d6; border-left:4px solid #e5a100;}
		</style>
		<article id="consigna-schools">
		    <h2>Convertir StreamFlix en portafolio</h2>

    <p class="contexto-consigna">
        En esta actividad reutilizarás la misma arquitectura para transformar StreamFlix en un portafolio personal.
    </p>

    <h3>Contexto</h3>
    <p>
        El objetivo final es demostrar que aprendiste una forma de organizar interfaces, no solo un proyecto de películas.
    </p>

    <h3>Instrucciones</h3>
    <ol>
        <li>Transforma la idea de <code>StreamFlix</code> en un portafolio personal.</li>
        <li>Cambia el enfoque de películas a proyectos.</li>
        <li>El <code>&lt;header&gt;</code> debe mostrar un nombre personal o marca personal.</li>
        <li>Las tarjetas deben representar al menos 3 proyectos o trabajos.</li>
        <li>El <code>&lt;footer&gt;</code> debe incluir contacto o redes.</li>
        <li>Conserva un <code>&lt;template&gt;</code> o una función reutilizable para las tarjetas.</li>
        <li>Conserva contenedores vacíos o fragmentos HTML para encabezado y pie de página.</li>
        <li>Conserva al menos una utilidad CSS como <code>p-3</code>, <code>rounded</code>, <code>bg-primary</code>, <code>text-white</code> o <code>shadow</code>.</li>
    </ol>

    <h3>Código inicial</h3>
    <pre class="codigo-copiable"><code>&lt;!-- index.html --&gt;

&lt;div id="header-placeholder"&gt;&lt;/div&gt;
&lt;main class="p-3"&gt;
&lt;h1&gt;StreamFlix&lt;/h1&gt;
&lt;section class="movies-grid"&gt;
&lt;!-- Transforma esta arquitectura en portafolio --&gt;
____
&lt;/section&gt;
&lt;template id="movie-card-template"&gt;
____
&lt;/template&gt;
&lt;/main&gt;
&lt;div id="footer-placeholder"&gt;&lt;/div&gt;</code></pre>

    <div class="aviso-importante">
        <strong>Importante:</strong>
        No cambies solo los textos. Reutiliza la arquitectura para representar proyectos, contacto y una identidad personal.
    </div>

    <h3>Resultado esperado</h3>
    <p>
        Debe verse un portafolio con al menos 3 proyectos, manteniendo la estructura reutilizable trabajada durante el módulo.
    </p>
    	</article>

</div>
