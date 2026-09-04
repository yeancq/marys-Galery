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

## Reemplazar las imágenes por obras reales

Todas las imágenes son **bocetos de ejemplo generados** (no son obra real de Mary's), pensados solo para mostrar cómo se ve el diseño. Para poner las obras reales:

1. Exportá cada obra en buena resolución (recomendado: JPG o PNG, lado mayor de al menos 1600px, peso ideal por debajo de 500 KB — usá [squoosh.app](https://squoosh.app) para comprimir sin perder calidad visual).
2. Reemplazá los archivos en `assets/images/` manteniendo el mismo nombre, **o** usá nombres nuevos y actualizá las rutas `src` en `index.html`.
3. En `index.html`, cada obra de la galería es un botón `<button class="gallery-item ...">` con estos atributos que alimentan el detalle ampliado (lightbox):
   - `data-title` — nombre de la obra
   - `data-technique` — técnica y soporte
   - `data-size` — dimensiones
   - `data-year` — año
   - `data-desc` — descripción corta
   - `data-img` — ruta de la imagen en alta resolución para el detalle ampliado
4. Actualizá también el atributo `alt` de cada `<img>` con una descripción real de la obra (esto es importante para accesibilidad y SEO).

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
