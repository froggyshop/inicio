/**
 * GALERÍA DE FOTOS Y VIDEO DESTACADO
 * -----------------------------------------------------------
 * Esto se muestra en la página de Eventos, debajo de "Próximos"
 * y "Anteriores". Sirve para fotos sueltas de eventos pasados
 * (no ligadas a un evento en particular) y para un video
 * destacado (por ejemplo, un resumen o teaser de un evento).
 *
 * ===========================================================
 * CÓMO AGREGAR FOTOS A LA GALERÍA
 * ===========================================================
 * 1. Guarda tus fotos en la carpeta: assets/galeria/
 * 2. Agrega un objeto al arreglo GALLERY_IMAGES por cada foto,
 *    usando este formato (copia y pega el ejemplo de abajo):
 *
 *    { src: "assets/galeria/NOMBRE.jpeg", caption: "Texto breve" }
 *
 * El "caption" es opcional, déjalo como "" si no quieres texto.
 */

const GALLERY_IMAGES = [
  // Pega aquí tus fotos (usa el ejemplo de abajo como plantilla)

  // ===== EJEMPLO (copia desde aquí) =====
  // { src: "assets/galeria/hallyu-zone-2026-01.jpeg", caption: "Hallyu Zone Pachuca 2026" },
  // ===== FIN DEL EJEMPLO (hasta aquí) =====
];

/**
 * ===========================================================
 * CÓMO AGREGAR EL VIDEO DESTACADO (solo hay espacio para 1)
 * ===========================================================
 * 1. Guarda tu video en: assets/video/destacado.mp4
 *    (debe llamarse exactamente "destacado.mp4")
 * 2. Cambia "enabled" a true aquí abajo.
 * 3. Si quieres, escribe un texto corto en "caption".
 */
const FEATURED_VIDEO = {
  enabled: false,
  src: "assets/video/destacado.mp4",
  caption: "",
};

const GalleryAPI = {
  images() {
    return GALLERY_IMAGES;
  },
  video() {
    return FEATURED_VIDEO.enabled ? FEATURED_VIDEO : null;
  },
};
