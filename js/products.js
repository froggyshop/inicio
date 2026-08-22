/**
 * CATÁLOGO DE PRODUCTOS DE FROGGY SHOP
 * -----------------------------------------------------------
 * Aquí se administra el catálogo SIN necesidad de base de datos.
 * Para agregar, editar o quitar un producto, edita este archivo
 * y vuelve a subirlo a GitHub.
 *
 * ===========================================================
 * CÓMO AGREGAR LAS FOTOS DE CADA PRODUCTO
 * ===========================================================
 * 1. Guarda tu foto dentro de la carpeta: assets/productos/
 * 2. Usa EXACTAMENTE el nombre de archivo indicado en el
 *    comentario "// foto:" arriba de cada producto (abajo).
 * 3. Cambia esa línea de "images: []" a
 *    "images: ["assets/productos/NOMBRE.jpg"]" (copia el nombre
 *    tal cual aparece en el comentario de arriba).
 * 4. Puedes usar .jpg, .jpeg o .png — solo ajusta la extensión
 *    en el nombre si no usas .jpg.
 *
 * IMPORTANTE: en cuanto un producto tiene foto (images no vacío),
 * el sitio le agrega automáticamente una etiqueta "Foto de
 * referencia" sobre la imagen, porque cada pedido se personaliza
 * con el cliente. No necesitas hacer nada extra para eso.
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
 *  isDemo          true = dato de ejemplo. Todos los productos reales de
 *                  abajo ya están en false.
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

const REFERENCE_PHOTO_NOTE = " La imagen es de referencia; tu pedido es completamente personalizado.";

const PRODUCTS = [
  // foto: assets/productos/planilla-stickers.jpg
  {
    id: "planilla-stickers",
    name: "Planilla de stickers 1/4 de carta",
    description: "Planilla de stickers tamaño 1/4 de carta." + REFERENCE_PHOTO_NOTE,
    category: "decoracion",
    group: "",
    member: "",
    images: ["assets/productos/planilla-stickers.jpeg"],
    price: 15,
    unit: "pieza",
    minOrder: 4,
    customizable: false,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/mistery-bag.jpg
  {
    id: "mistery-bag",
    name: "Mistery Bag",
    description: "Incluye 1 pin, 1 polaroid y 2 mail stickers sorpresa." + REFERENCE_PHOTO_NOTE,
    category: "freebies",
    group: "",
    member: "",
    images: ["assets/productos/mistery-bag.jpeg"],
    price: 20,
    unit: "bolsa",
    minOrder: 2,
    customizable: false,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/pin-holografico.jpg
  {
    id: "pin-holografico",
    name: "Pin acabado holográfico",
    description: "Pin con acabado holográfico." + REFERENCE_PHOTO_NOTE,
    category: "accesorios",
    group: "",
    member: "",
    images: ["assets/productos/pin-holografico.jpeg"],
    price: 12,
    unit: "pieza",
    minOrder: 1,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/pin-normal.jpg
  {
    id: "pin-normal",
    name: "Pin normal",
    description: "Pin con acabado estándar." + REFERENCE_PHOTO_NOTE,
    category: "accesorios",
    group: "",
    member: "",
    images: ["assets/productos/pin-normal.jpeg"],
    price: 10,
    unit: "pieza",
    minOrder: 1,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/polaroid-diseno.jpg
  {
    id: "polaroid-diseno",
    name: "Polaroid con diseño",
    description: "Polaroid impresa con diseño a elegir." + REFERENCE_PHOTO_NOTE,
    category: "polaroids",
    group: "",
    member: "",
    images: ["assets/productos/polaroid-diseno.jpeg"],
    price: 2,
    unit: "pieza",
    minOrder: 50,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/banner-lightstick.jpg
  {
    id: "banner-lightstick",
    name: "Banner para lightstick",
    description: "Para acompletar tu outfit. Banner decorativo para colgar en el lightstick." + REFERENCE_PHOTO_NOTE,
    category: "banners",
    group: "",
    member: "",
    images: ["assets/productos/banner-lightstick.jpeg"],
    price: 70,
    unit: "pieza",
    minOrder: 1,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/llavero-foami-encaje.jpg
  {
    id: "llavero-foami-encaje",
    name: "Llavero de foami (con encaje)",
    description: "Llavero de foami con encaje." + REFERENCE_PHOTO_NOTE,
    category: "llaveros",
    group: "",
    member: "",
    images: ["assets/productos/llavero-foami-encaje.jpeg"],
    price: 7,
    unit: "pieza",
    minOrder: 30,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/llavero-foami-sin-encaje.jpg
  {
    id: "llavero-foami-sin-encaje",
    name: "Llavero de foami (sin encaje)",
    description: "Llavero de foami sin encaje." + REFERENCE_PHOTO_NOTE,
    category: "llaveros",
    group: "",
    member: "",
    images: ["assets/productos/llavero-foami-sin-encaje.jpeg"],
    price: 6,
    unit: "pieza",
    minOrder: 30,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/llavero-mini-picket.jpg
  {
    id: "llavero-mini-picket",
    name: "Llavero mini picket",
    description: "Llavero estilo mini picket sign." + REFERENCE_PHOTO_NOTE,
    category: "llaveros",
    group: "",
    member: "",
    images: ["assets/productos/llavero-mini-picket.jpeg"],
    price: 8,
    unit: "pieza",
    minOrder: 30,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/pasadores-cabello.jpg
  {
    id: "pasadores-cabello",
    name: "Pasadores de cabello",
    description: "Pasadores de cabello personalizados. Precio válido en pedidos de más de 30 piezas." + REFERENCE_PHOTO_NOTE,
    category: "accesorios",
    group: "",
    member: "",
    images: ["assets/productos/pasadores-cabello.jpeg"],
    price: 5,
    unit: "pieza",
    minOrder: 30,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/llavero-camarita.jpg
  {
    id: "llavero-camarita",
    name: "Llavero camarita",
    description: "Llavero con diseño de camarita." + REFERENCE_PHOTO_NOTE,
    category: "llaveros",
    group: "",
    member: "",
    images: ["assets/productos/llavero-camarita.jpeg"],
    price: 5.5,
    unit: "pieza",
    minOrder: 50,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/llavero-normal.jpg
  {
    id: "llavero-normal",
    name: "Llavero normal",
    description: "Llavero acrílico estándar." + REFERENCE_PHOTO_NOTE,
    category: "llaveros",
    group: "",
    member: "",
    images: ["assets/productos/llavero-normal.jpeg"],
    price: 6,
    unit: "pieza",
    minOrder: 50,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/banner.jpg
  {
    id: "banner-diseno",
    name: "Banner (incluye diseño)",
    description: "Banner impreso, el precio ya incluye el diseño." + REFERENCE_PHOTO_NOTE,
    category: "banners",
    group: "",
    member: "",
    images: ["assets/productos/banner.jpeg"],
    price: 4,
    unit: "pieza",
    minOrder: 50,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/photocard-kit.jpg
  {
    id: "photocard-kit",
    name: "Photocard Kit",
    description: "Incluye banner, photocard y accesorio mini, todo embolsado individualmente." + REFERENCE_PHOTO_NOTE,
    category: "photocards",
    group: "",
    member: "",
    images: ["assets/productos/photocard-kit.jpeg"],
    price: 5.5,
    unit: "kit",
    minOrder: 30,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/photostrip.jpg
  {
    id: "photostrip",
    name: "Photostrip",
    description: "Tira de fotos estilo photobooth." + REFERENCE_PHOTO_NOTE,
    category: "polaroids",
    group: "",
    member: "",
    images: ["assets/productos/photostrip.jpeg"],
    price: 7,
    unit: "pieza",
    minOrder: 10,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/boleto-conmemorativo.jpg
  {
    id: "boleto-conmemorativo",
    name: "Boleto conmemorativo",
    description: "Boleto conmemorativo personalizado." + REFERENCE_PHOTO_NOTE,
    category: "freebies",
    group: "",
    member: "",
    images: ["assets/productos/boleto-conmemorativo.jpeg"],
    price: 3,
    unit: "pieza",
    minOrder: 50,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/ine.jpg
  {
    id: "ine-broma",
    name: "INE",
    description: "Credencial de broma personalizada." + REFERENCE_PHOTO_NOTE,
    category: "freebies",
    group: "",
    member: "",
    images: ["assets/productos/ine.jpeg"],
    price: 4,
    unit: "pieza",
    minOrder: 50,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/tarjeta-credito.jpg
  {
    id: "tarjeta-credito",
    name: "Tarjeta tipo crédito (laminado)",
    description: "Tarjeta personalizada tipo crédito con acabado laminado." + REFERENCE_PHOTO_NOTE,
    category: "freebies",
    group: "",
    member: "",
    images: ["assets/productos/tarjeta-credito.jpeg"],
    price: 6,
    unit: "pieza",
    minOrder: 30,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/billete.jpg
  {
    id: "billete",
    name: "Billete",
    description: "Billete de broma personalizado." + REFERENCE_PHOTO_NOTE,
    category: "freebies",
    group: "",
    member: "",
    images: ["assets/productos/billete.jpeg"],
    price: 1.5,
    unit: "pieza",
    minOrder: 100,
    customizable: true,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
  },
  // foto: assets/productos/mail-stickers.jpg
  {
    id: "mail-stickers",
    name: "Mail stickers",
    description: "Stickers estilo mail, ideales para freebies e intercambios." + REFERENCE_PHOTO_NOTE,
    category: "freebies",
    group: "",
    member: "",
    images: ["assets/productos/mail-stickers.jpeg"],
    price: 1,
    unit: "pieza",
    minOrder: 50,
    customizable: false,
    requiresQuote: false,
    available: true,
    options: [],
    isDemo: false,
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
