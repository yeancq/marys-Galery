# Mary's — Landing page

Landing page minimalista para Mary's, artista de grafito sobre papel. HTML, CSS y JS puro — sin frameworks ni proceso de build, listo para GitHub Pages.

## Estructura

```
marys-landing/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── images/
│       ├── hero-piece.svg      ← imagen principal del hero
│       ├── artwork-1.svg … artwork-6.svg   ← obras de la galería
│       ├── portrait.svg        ← imagen de la sección "Sobre la artista"
│       └── favicon.svg
└── README.md
```

## Las obras ya están cargadas

Las 20 obras reales de Mary's ya están en `assets/images/gallery/` y conectadas en la galería. Antes de publicar, revisá esto:

- **Títulos**: son provisionales, puestos por mí a partir de lo que muestra cada dibujo (por ejemplo "Rey del silencio" para uno de los leones). Cambialos por los títulos reales si ya los tenés.
- **Año**: lo tomé de la firma en cada dibujo. Dos piezas (el panda y los tigres) no tenían año legible en la firma, así que quedaron marcadas como `S/F` (sin fecha) — completalo si lo sabés.
- **Dimensiones**: puse "Medidas a confirmar" en las 20, porque no tengo ese dato. Reemplazalo por las medidas reales de cada obra en `data-size` (ver abajo cómo).
- **La mariposa "para Cynthia"**: esa foto tenía una dedicatoria escrita a mano ("Para: Cynthia, gracias por todo..."). La recorté para mostrar solo el dibujo en el sitio público, ya que es un mensaje personal y no parte de la obra. La imagen original completa no se subió al sitio.

### Cómo editar los datos de una obra

Cada obra es un `<button class="gallery-item ...">` en `index.html` con estos atributos:

- `data-title` — título
- `data-technique` — técnica y soporte
- `data-size` — dimensiones
- `data-year` — año
- `data-desc` — descripción corta que aparece en el detalle ampliado
- `data-img` — ruta de la imagen

Buscá el título provisional (por ejemplo `data-title="Rey del silencio"`) en `index.html` y editá los valores directamente ahí. También actualizá el `alt` de la etiqueta `<img>` correspondiente si cambiás el título.

### Agregar una obra nueva más adelante

1. Poné la imagen en `assets/images/gallery/` (JPG recomendado, lado mayor ~1500px).
2. Copiá un bloque `<button class="gallery-item reveal">...</button>` completo de `index.html`, pegalo antes de `</div>` (cierre de `gallery-grid`), y cambiá `src`, `data-*` y el `style="--i:N"` por el siguiente número de índice disponible (esto solo varía el ritmo de la flotación, no es obligatorio que sea único).
3. Alterná la clase `tilt-a`, `tilt-b`, `tilt-c` o `tilt-d` en el `<span class="gallery-frame ...">` para variar la inclinación.


## Editar textos

- **Marca y hero**: dentro de `<section class="hero">` en `index.html`.
- **Bio**: dentro de `<section class="about-section" id="sobre">`.
- **Contacto**: buscá `mailto:hola@marys-arte.com` y reemplazalo por el email real. El enlace de Instagram está en la misma sección (`contact-social`).

## Sobre la protección contra capturas de pantalla

Ningún sitio web puede impedir técnicamente una captura de pantalla del sistema operativo (tecla Impr Pant, herramientas del celular, etc.) — esto es una limitación de cualquier navegador, no de este proyecto. Lo que sí incluye este sitio, que es lo que efectivamente usan artistas y fotógrafos para proteger su obra online:

- Clic derecho, arrastre de imágenes y selección de texto deshabilitados sobre la obra.
- Atajos comunes de guardado/inspección bloqueados (Ctrl+S, Ctrl+U, F12, etc.).
- El contenido se difumina automáticamente si la ventana pierde el foco (dificulta capturas hechas con herramientas externas de grabación).
- **Marca de agua** visible sobre la imagen ampliada en el detalle — esta es la protección real, porque sobrevive a cualquier captura que se logre igualmente.

Si en algún momento querés una protección más fuerte, lo más efectivo es publicar las imágenes en menor resolución y reservar los archivos originales en alta calidad fuera del sitio.

## Publicar en GitHub Pages

1. Creá un repositorio nuevo en GitHub (por ejemplo `marys-landing`).
2. Subí **todo el contenido de esta carpeta** a la raíz del repositorio (no la carpeta `marys-landing` en sí, sino lo que hay adentro: `index.html`, `css/`, `js/`, `assets/`).
3. En GitHub, andá a **Settings → Pages**.
4. En "Build and deployment" → "Source", elegí **Deploy from a branch**.
5. Elegí la rama `main` (o `master`) y la carpeta `/ (root)`.
6. Guardá. En unos minutos el sitio queda publicado en `https://tu-usuario.github.io/marys-landing/`.

Si más adelante querés un dominio propio (por ejemplo `marys-arte.com`), se configura en la misma sección de Pages con un archivo `CNAME` — avisame cuando llegues a ese punto y te lo agrego.

## Compatibilidad

Probado a nivel de sintaxis y estructura en Chrome, Firefox y Safari modernos. Usa `IntersectionObserver` (soportado en todos los navegadores actuales) con fallback si no está disponible. Respeta `prefers-reduced-motion` para quienes desactivan animaciones en su sistema.
