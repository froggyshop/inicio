/**
 * CATÁLOGO DE PRODUCTOS DE FROGGY SHOP
 * -----------------------------------------------------------
 * Aquí se administra el catálogo SIN necesidad de base de datos.
 * Para agregar, editar o quitar un producto, edita este archivo
 * y vuelve a subirlo a GitHub.
 *
 * Los productos de abajo son EJEMPLOS DE DEMOSTRACIÓN
 * (isDemo: true) para poder probar el sitio. Sus precios,
 * fotos y descripciones NO son reales. Antes de publicar,
 * reemplázalos con los productos y precios reales de Froggy
 * Shop, o simplemente deja el arreglo PRODUCTS vacío y ve
 * agregando los productos reales uno por uno.
 *
 * CAMPOS DE CADA PRODUCTO:
 *  id              identificador único (texto, sin espacios)
 *  name            nombre del producto
 *  description     descripción corta
 *  category        una de: CATEGORIES (ver abajo)
 *  group           grupo/artista relacionado (opcional, "" si no aplica)
 *  member          integrante/personaje relacionado (opcional)
 *  images          arreglo de rutas de imagen. Si está vacío, se
 *                  muestra un marcador de "foto pendiente".
 *  price           precio por unidad (número, MXN)
 *  unit            unidad de venta, ej. "pieza", "set de 5"
 *  minOrder        pedido mínimo (número de unidades)
 *  customizable    true/false — si permite personalización
 *  requiresQuote    true/false — si el precio final siempre requiere cotización
 *  available       true/false — si se muestra activo en la tienda
 *  options         arreglo de opciones adicionales (texto simple), ej. colores
 *  isDemo          true = dato de ejemplo, bórralo o cámbialo a false al reemplazarlo
 */

const CATEGORIES = [
  { id: "freebies", label: "Freebies" },
  { id: "photocards", label: "Photocards" },
  { id: "polaroids", label: "Polaroids" },
  { id: "llaveros", label: "Llaveros" },
  { id: "banners", label: "Banners" },
  { id: "decoracion", label: "Decoración" },
  { id: "accesorios", label: "Accesorios" },
  { id: "colecciones", label: "Colecciones" },
  { id: "personalizados", label: "Personalizados" },
];

const PRODUCTS = [
  {
    id: "llavero-acrilico-demo",
    name: "Llavero acrílico (ejemplo)",
    description: "Llavero acrílico con diseño a doble cara. Ideal para intercambios y freebies de eventos.",
    category: "llaveros",
    group: "",
    member: "",
    images: [],
    price: 45,
    unit: "pieza",
    minOrder: 20,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: ["Con glitter", "Sin glitter"],
    isDemo: true,
  },
  {
    id: "photocard-set-demo",
    name: "Set de photocards (ejemplo)",
    description: "Set de photocards estilo álbum oficial, impresión mate o brillante.",
    category: "photocards",
    group: "",
    member: "",
    images: [],
    price: 8,
    unit: "pieza",
    minOrder: 50,
    customizable: false,
    requiresQuote: false,
    available: true,
    options: ["Mate", "Brillante"],
    isDemo: true,
  },
  {
    id: "polaroid-personalizada-demo",
    name: "Polaroid personalizada (ejemplo)",
    description: "Polaroid con marco decorado a mano, ideal para regalos y freebies.",
    category: "polaroids",
    group: "",
    member: "",
    images: [],
    price: 15,
    unit: "pieza",
    minOrder: 10,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: true,
  },
  {
    id: "banner-lightstick-demo",
    name: "Banner para lightstick (ejemplo)",
    description: "Banner decorativo para colgar en el lightstick, con diseño personalizable.",
    category: "banners",
    group: "",
    member: "",
    images: [],
    price: 60,
    unit: "pieza",
    minOrder: 1,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: true,
  },
  {
    id: "decoracion-cupsleeve-demo",
    name: "Kit decoración cupsleeve event (ejemplo)",
    description: "Kit de decoración temática para eventos de cupsleeve: manteles, stickers y banner.",
    category: "decoracion",
    group: "",
    member: "",
    images: [],
    price: 0,
    unit: "kit",
    minOrder: 1,
    customizable: true,
    requiresQuote: true,
    available: true,
    options: [],
    isDemo: true,
  },
  {
    id: "billete-personalizado-demo",
    name: "Billete personalizado (ejemplo)",
    description: "Billete de broma personalizado con foto/diseño a elegir, para freebies o regalos.",
    category: "accesorios",
    group: "",
    member: "",
    images: [],
    price: 12,
    unit: "pieza",
    minOrder: 20,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: true,
  },
  {
    id: "ine-personalizada-demo",
    name: "INE personalizada de broma (ejemplo)",
    description: "Credencial de broma personalizada, acabado tipo tarjeta con laminado.",
    category: "accesorios",
    group: "",
    member: "",
    images: [],
    price: 35,
    unit: "pieza",
    minOrder: 5,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: true,
  },
  {
    id: "ramillete-freebies-demo",
    name: "Ramillete de freebies (ejemplo)",
    description: "Ramillete armado con freebies variados, ideal para regalar en conciertos.",
    category: "freebies",
    group: "",
    member: "",
    images: [],
    price: 90,
    unit: "ramillete",
    minOrder: 1,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: true,
  },
];

/* ---------------------------------------------------------
   Helpers de acceso a datos (no modificar salvo que sepas
   lo que haces: el resto del sitio depende de estas funciones)
   --------------------------------------------------------- */
const ProductsAPI = {
  all() {
    return PRODUCTS.filter((p) => p.available);
  },
  byCategory(categoryId) {
    if (!categoryId || categoryId === "todos") return this.all();
    return this.all().filter((p) => p.category === categoryId);
  },
  byId(id) {
    return PRODUCTS.find((p) => p.id === id) || null;
  },
  featured(limit = 4) {
    return this.all().slice(0, limit);
  },
  categoryLabel(categoryId) {
    const c = CATEGORIES.find((c) => c.id === categoryId);
    return c ? c.label : categoryId;
  },
};
