/**
 * CONFIGURACIÓN DE FROGGY SHOP
 * -----------------------------------------------------------
 * Edita este archivo para personalizar los datos del negocio.
 * Todo lo marcado como "PLACEHOLDER" debe reemplazarse con
 * información real antes de publicar la tienda.
 * -----------------------------------------------------------
 */
const FROGGY_CONFIG = {
  // Nombre de la tienda
  storeName: "Froggy Shop",

  // PLACEHOLDER: número de WhatsApp en formato internacional SIN signos
  // Ejemplo real: "5217711234567" (52 = México, 1 = celular, luego el número a 10 dígitos)
  whatsappNumber: "PLACEHOLDER_WHATSAPP_NUMBER",

  // Instagram (dato real proporcionado)
  instagramHandle: "@froggy.shop_1",
  instagramUrl: "https://www.instagram.com/froggy.shop_1",

  // PLACEHOLDER: correo de contacto (opcional)
  contactEmail: "PLACEHOLDER_EMAIL",

  // Ciudad de entrega personal
  localDeliveryCity: "Pachuca de Soto, Hidalgo",

  // Texto de aviso de precios (no se muestran como definitivos)
  priceDisclaimer: "Precio estimado. Froggy Shop confirmará el precio final, disponibilidad y forma de pago antes del pago.",

  // ---------------------------------------------------------
  // RESPALDO EN GOOGLE FORM (opcional, además de WhatsApp)
  // ---------------------------------------------------------
  // Para activarlo:
  // 1. Crea un Google Form con campos de texto para: número de solicitud,
  //    nombre, whatsapp, correo, entrega, dirección, productos, total, comentarios.
  // 2. Abre el formulario, clic derecho > "Inspeccionar" y busca los
  //    atributos "name" de cada campo (parecen "entry.123456789").
  // 3. La URL de envío es la URL del formulario cambiando
  //    "viewform" por "formResponse".
  // 4. Pega esos valores abajo. Si dejas "googleFormEnabled" en false,
  //    el sitio funciona igual, solo sin este respaldo.
  googleFormEnabled: false,
  googleFormActionUrl: "PLACEHOLDER_GOOGLE_FORM_ACTION_URL",
  googleFormEntries: {
    orderId: "PLACEHOLDER_entry_id",
    name: "PLACEHOLDER_entry_id",
    whatsapp: "PLACEHOLDER_entry_id",
    email: "PLACEHOLDER_entry_id",
    delivery: "PLACEHOLDER_entry_id",
    address: "PLACEHOLDER_entry_id",
    products: "PLACEHOLDER_entry_id",
    total: "PLACEHOLDER_entry_id",
    comments: "PLACEHOLDER_entry_id",
  },
};
