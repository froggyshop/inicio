/**
 * GALERÍA DE FOTOS (Bobas y Ramen) Y VIDEO DESTACADO (Eventos)
 * -----------------------------------------------------------
 * GALLERY_IMAGES se muestra en la página "Barra: Bobas y Ramen"
 * (bobas-ramen.html) — fotos de la barra en eventos.
 *
 * FEATURED_VIDEO se muestra en la página "Eventos" (eventos.html).
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
  // { src: "assets/galeria/bobas-ramen-01.jpeg", caption: "Barra de Bobas y Ramen en Hallyu Zone Pachuca" },
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
