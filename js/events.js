/**
 * EVENTOS DE FROGGY SHOP
 * -----------------------------------------------------------
 * Los eventos se administran editando este archivo, dentro
 * del arreglo EVENTS de más abajo.
 *
 * Cada evento se ve automáticamente en "Próximos" o
 * "Anteriores" según su fecha (no hace falta que tú decidas
 * en cuál va, el sitio lo calcula solo comparando con la
 * fecha de hoy).
 *
 * ===========================================================
 * CÓMO AGREGAR UN EVENTO (copia y pega uno de los ejemplos)
 * ===========================================================
 * 1. Copia TODO el bloque entre las líneas "EJEMPLO..." de
 *    abajo (desde el "{" hasta el "}," incluido).
 * 2. Pégalo dentro del arreglo EVENTS, justo debajo de la
 *    línea que dice "// Pega aquí tus eventos".
 * 3. Cambia los valores (título, fecha, ubicación, descripción,
 *    fotos) por los datos reales de tu evento.
 * 4. Si tienes varios eventos, repite: copia, pega, edita.
 *    No importa el orden en el que los pegues, el sitio los
 *    ordena solo por fecha.
 *
 * CAMPOS:
 *  id            identificador único, sin espacios (ej. "cupsleeve-sep-2026")
 *  title         nombre del evento
 *  date          fecha en formato AAAA-MM-DD (ej. "2026-09-20")
 *  location      lugar del evento (texto libre)
 *  description   descripción breve
 *  image         foto principal del evento. Deja "" si no tienes
 *                foto todavía (se muestra un marcador de "foto
 *                pendiente"). Si ya tienes la foto, guárdala en
 *                assets/eventos/ y pon aquí su ruta, ej.:
 *                "assets/eventos/cupsleeve-sep-2026.jpeg"
 *  gallery       (opcional) más fotos de este evento, arreglo de
 *                rutas igual que "image". Déjalo como [] si no
 *                tienes más fotos de este evento en particular.
 */

const EVENTS = [
  // Pega aquí tus eventos (usa los ejemplos de abajo como plantilla)

  // ===== EJEMPLO DE EVENTO PASADO (copia desde aquí) =====
  // {
  //   id: "cupsleeve-agosto-2025",
  //   title: "Cupsleeve Event — Agosto 2025",
  //   date: "2025-08-15",
  //   location: "Plaza Bella, Pachuca de Soto, Hgo.",
  //   description: "Cupsleeve event con freebies y decoración temática.",
  //   image: "",
  //   gallery: [],
  // },
  // ===== FIN DEL EJEMPLO (hasta aquí) =====

  // ===== EJEMPLO DE EVENTO PRÓXIMO (copia desde aquí) =====
  // {
  //   id: "hallyu-zone-septiembre-2026",
  //   title: "Hallyu Zone Pachuca — Septiembre 2026",
  //   date: "2026-09-27",
  //   location: "Pachuca de Soto, Hgo.",
  //   description: "Estaremos con la barra de Bobas y Ramen y nuestro catálogo de freebies y accesorios.",
  //   image: "",
  //   gallery: [],
  // },
  // ===== FIN DEL EJEMPLO (hasta aquí) =====
];

const EventsAPI = {
  all() {
    return EVENTS.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  },
  upcoming() {
    const today = new Date().toISOString().slice(0, 10);
    return this.all().filter((e) => e.date >= today);
  },
  past() {
    const today = new Date().toISOString().slice(0, 10);
    return this.all().filter((e) => e.date < today);
  },
};
