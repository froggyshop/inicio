/**
 * EVENTOS DE FROGGY SHOP
 * -----------------------------------------------------------
 * Igual que el catálogo, los eventos se administran editando
 * este archivo. Se deja vacío a propósito (no se inventa
 * contenido). Cuando la propietaria tenga eventos reales que
 * mostrar, agrega objetos al arreglo EVENTS con este formato:
 *
 * {
 *   id: "evento-1",
 *   title: "Nombre del evento",
 *   date: "2026-09-20",       // formato AAAA-MM-DD
 *   type: "proximo",          // "proximo" | "pasado" | "colaboracion"
 *   location: "Pachuca, Hgo.",
 *   description: "Descripción breve del evento.",
 *   image: ""                 // ruta de imagen, o "" para placeholder
 * }
 */

const EVENTS = [
  // Agrega aquí los eventos reales de Froggy Shop.
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
