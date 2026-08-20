/**
 * PUNTOS DE ENTREGA PERSONAL Y MÉTODOS DE ENVÍO
 * -----------------------------------------------------------
 * Igual que el catálogo, esto se edita a mano en este archivo.
 *
 * mapQuery: texto que se usa para ubicar el pin en Google Maps
 * (no necesita coordenadas exactas, Google lo resuelve solo).
 * Si quieres afinar la ubicación, prueba tu texto directamente
 * en Google Maps y ajusta mapQuery hasta que caiga en el lugar
 * correcto.
 */

const DELIVERY_POINTS = [
  {
    id: "soriana-valle",
    label: "Soriana del Valle",
    extraCost: 20,
    mapQuery: "Soriana del Valle, Pachuca de Soto, Hidalgo",
  },
  {
    id: "plaza-bella",
    label: "Plaza Bella",
    extraCost: 20,
    mapQuery: "Plaza Bella, Pachuca de Soto, Hidalgo",
  },
  {
    id: "tulipanes",
    label: "Tulipanes",
    extraCost: 20,
    mapQuery: "Tulipanes, Mineral de la Reforma, Hidalgo",
  },
  {
    id: "plaza-juarez",
    label: "Plaza Juárez",
    extraCost: 20,
    mapQuery: "Plaza Juárez, Pachuca de Soto, Hidalgo",
  },
  {
    id: "reloj-monumental",
    label: "Reloj Monumental de Pachuca",
    extraCost: 20,
    mapQuery: "Reloj Monumental, Pachuca de Soto, Hidalgo",
  },
  {
    id: "tuzos",
    label: "Colonia Los Tuzos (Bulevar Los Tuzos)",
    extraCost: 0,
    mapQuery: "Bulevar Los Tuzos, Pachuca de Soto, Hidalgo",
  },
  {
    id: "forjadores",
    label: "Colonia Forjadores (Avenida de los Árboles)",
    extraCost: 0,
    mapQuery: "Avenida de los Árboles, Forjadores de Pachuca, Mineral de la Reforma, Hidalgo",
  },
];

const SHIPPING_METHODS = [
  {
    id: "correos-mexico",
    label: "Correos de México",
    cost: 60,
    note: "Costo fijo.",
  },
  {
    id: "paqueteria-privada",
    label: "Paquetería privada",
    cost: 180,
    note: "Desde $180 MXN. El costo final depende del volumen o tamaño del pedido y se confirma antes del pago.",
  },
];

const DeliveryAPI = {
  pointById(id) {
    return DELIVERY_POINTS.find((p) => p.id === id) || null;
  },
  shippingById(id) {
    return SHIPPING_METHODS.find((s) => s.id === id) || null;
  },
  mapEmbedUrl(query) {
    return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  },
  mapLinkUrl(query) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  },
};
