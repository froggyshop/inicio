# Froggy Shop — sitio web (HTML/CSS/JS, sin backend)

Sitio estático mobile-first para Froggy Shop: catálogo, "Mi pedido", solicitud de personalizados y flujo de confirmación por WhatsApp. No usa base de datos ni servidor — todo el contenido editable vive en archivos `.js` dentro de `/js`.

## Estado actual

- ✅ WhatsApp real configurado (55 1481 6066).
- ✅ Logo de Froggy Shop e ícono de Instagram cargados (`assets/logo-froggyshop.jpeg`, `assets/logo-instagram.png`), usados en el header, el pie de página y el favicon.
- ✅ Catálogo con los 19 productos reales y sus precios/pedidos mínimos.
- ✅ Política de anticipo (50%), tiempos de diseño/producción, entrega, envío, cancelaciones y devoluciones — ver `terminos.html`, ya integrada en el cálculo de "Mi pedido".
- ✅ Aviso de privacidad (`aviso-privacidad.html`) a nombre de José Luis López Escamilla, Pachuca de Soto, Hidalgo.
- ✅ Página de puntos de entrega con mapa de Google Maps para cada punto (`puntos-entrega.html`).
- ⏳ **Falta agregar las fotos de cada producto** (ver abajo).

## Puntos de entrega y costos (ya configurados en `js/delivery.js`)

- Soriana del Valle, Plaza Bella, Tulipanes, Plaza Juárez, Reloj Monumental de Pachuca: **+$20 MXN**.
- Colonia Los Tuzos (Bulevar Los Tuzos) y Colonia Forjadores (Avenida de los Árboles): **sin costo**.
- Envío por Correos de México: **$60 MXN** fijo.
- Envío por paquetería privada: **desde $180 MXN**, variable según el pedido.

> Nota sobre los mapas: como Los Tuzos y Forjadores son colonias (no direcciones exactas), el mapa de esos dos puntos usa la avenida principal de cada colonia como referencia (Bulevar Los Tuzos y Avenida de los Árboles). Si quieres un punto de encuentro más específico (por ejemplo una tienda o plaza puntual dentro de la colonia), avísame y ajusto `mapQuery` en `js/delivery.js` para que el pin caiga exactamente ahí.

Todo esto se calcula automáticamente en `pedido.html`: el cliente elige el punto o método, el total y el anticipo (50%) se recalculan solos, y el punto/método elegido se agrega al mensaje de WhatsApp.

## Cómo editar las políticas (anticipo, tiempos, cancelación)

Todo vive en `js/config.js`, dentro de `policy`:
```js
policy: {
  depositPercent: 0.5,             // 50% de anticipo
  designDaysHabiles: 2,
  productionDaysMin: 5,
  productionDaysMax: 10,
  cancellationWindowDaysHabiles: 3,
  cancellationRefundPercent: 0.5,
}
```
El texto visible en `terminos.html` está escrito a mano (no se genera automáticamente desde estos números), así que si cambias algún valor aquí, actualiza también el texto correspondiente en `terminos.html`.

## Cómo agregar las fotos de los productos

Cada producto en `js/products.js` ya tiene un comentario arriba indicando el nombre exacto que debe llevar su foto, por ejemplo:

```js
// foto: assets/productos/llavero-normal.jpg
{
  id: "llavero-normal",
  ...
  images: [],   // <- cambiar a: images: ["assets/productos/llavero-normal.jpg"]
```

Pasos:
1. Sube tus fotos a la carpeta `assets/productos/` en GitHub (botón "Add file" → "Upload files"), usando exactamente el nombre indicado en cada comentario `// foto:`.
2. Abre `js/products.js` en GitHub, edítalo, y cambia `images: []` por `images: ["assets/productos/NOMBRE-DEL-ARCHIVO.jpg"]` en cada producto que ya tenga foto.
3. Si tu foto es `.png` o `.jpeg` en vez de `.jpg`, ajusta la extensión en ese mismo lugar.

Mientras no agregues la foto, el producto se muestra igual en la tienda con un marcador de "foto pendiente" — no rompe nada.

## Otras cosas que puedes editar

1. **`js/config.js`**
   - `contactEmail`: tu correo real (opcional).
   - Si quieres el respaldo en Google Forms (ver abajo), cambia `googleFormEnabled` a `true` y llena `googleFormActionUrl` y `googleFormEntries`.

2. **`js/events.js`**
   - Está vacío a propósito. Agrega tus eventos reales cuando los tengas.

3. **`sitemap.xml`**
   - Cambia `https://TU-DOMINIO-AQUI` por la URL real una vez publicado el sitio (ej. `https://froggyshop.github.io/inicio/`).

## Cómo se maneja cada cosa sin base de datos

- **Catálogo**: vive en `js/products.js`. Editar ese archivo y volver a subirlo a GitHub es tu "panel administrativo".
- **"Mi pedido"**: se guarda en el navegador del cliente (localStorage), no en un servidor. Si el cliente borra los datos del navegador o cambia de dispositivo, se pierde — es una limitación normal de un sitio sin backend.
- **Registro de pedidos**: como no hay base de datos, el pedido final se envía por dos canales:
  1. **WhatsApp** (obligatorio): se abre automáticamente con el mensaje armado.
  2. **Google Form** (opcional, recomendado como respaldo): si lo configuras en `config.js`, cada solicitud también se guarda silenciosamente en una hoja de cálculo de Google, para que no dependas solo de que el cliente sí te escriba.

### Cómo configurar el respaldo en Google Forms

1. Crea un Google Form nuevo con preguntas de **respuesta corta** para: número de solicitud, nombre, WhatsApp, correo, entrega, dirección, productos, total, comentarios.
2. En el formulario ya publicado, abre las herramientas de desarrollador del navegador (clic derecho → "Inspeccionar"), busca cada `<input>` y copia su atributo `name` (se ve como `entry.123456789`).
3. La URL a la que hay que enviar los datos es la URL del formulario cambiando `viewform` por `formResponse`.
4. Pega esos valores en `js/config.js`, dentro de `googleFormEntries` y `googleFormActionUrl`, y cambia `googleFormEnabled` a `true`.
5. Cada respuesta enviada por el sitio caerá automáticamente en la hoja de cálculo vinculada al formulario.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub y sube todos estos archivos (conservando la estructura de carpetas).
2. En el repositorio: **Settings → Pages**.
3. En "Source", elige la rama principal (`main`) y la carpeta raíz (`/`).
4. Guarda. GitHub te dará una URL parecida a `https://tu-usuario.github.io/froggy-shop/`.
5. Ábrela en tu celular para probar todo el flujo: tienda → agregar producto → Mi pedido → solicitar pedido → WhatsApp.

## Limitaciones importantes de un sitio sin backend (para que no haya sorpresas)

- **No hay panel administrativo con inicio de sesión.** Administrar = editar archivos `.js` y volver a subir a GitHub. Si más adelante quieres que la propietaria edite productos desde una pantalla (sin tocar código), eso ya requiere backend real (por ejemplo, Next.js + Supabase, como sugería el brief original).
- **No hay pagos automáticos** (tal como pedía el brief): el pago sigue siendo manual, por transferencia/depósito, confirmado por WhatsApp.
- **Las imágenes que el cliente adjunta en "Personalizados"** no se suben a ningún servidor (un sitio estático no puede recibir archivos). El formulario junta los datos y abre WhatsApp; el cliente debe adjuntar sus imágenes directamente en el chat.
- **El carrito vive en el navegador del cliente**, no en un servidor central.

## Estructura de archivos

```
froggy-shop/
├── index.html          Inicio
├── tienda.html          Catálogo (/tienda)
├── producto.html        Detalle de producto (?id=...)
├── personalizados.html  Formulario de pedidos personalizados
├── eventos.html         Próximos y eventos pasados
├── pedido.html           "Mi pedido" + solicitud
├── confirmacion.html    Pantalla de confirmación + WhatsApp
├── css/styles.css        Sistema de diseño (colores, tipografía, componentes)
├── js/config.js          Datos configurables (WhatsApp, Instagram, Google Form)
├── js/products.js        Catálogo de productos (editar aquí)
├── js/events.js          Eventos (editar aquí)
├── js/cart.js            Lógica de "Mi pedido" (localStorage)
├── js/orders.js          Generación de mensaje de WhatsApp y respaldo en Google Form
├── js/ui.js              Header, footer, menú móvil, utilidades visuales
├── robots.txt / sitemap.xml   SEO básico
```
