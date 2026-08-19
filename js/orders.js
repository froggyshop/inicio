/**
 * Generación de solicitudes de pedido.
 * Como el sitio es estático (sin backend/base de datos), el
 * "registro" del pedido ocurre en dos lugares, en este orden:
 *   1. Se genera un número de solicitud y se guarda en este
 *      navegador (localStorage) para la pantalla de confirmación.
 *   2. Se envía un respaldo silencioso a un Google Form (si está
 *      configurado en config.js) para que quede un registro fuera
 *      del navegador del cliente.
 *   3. Se abre WhatsApp con el mensaje ya armado para que Froggy
 *      Shop confirme el pedido, como ya sucede hoy.
 */
const OrdersAPI = {
  generateOrderId() {
    const now = new Date();
    const stamp = now.toISOString().replace(/[-:TZ.]/g, "").slice(0, 12);
    const rand = Math.floor(Math.random() * 90 + 10);
    return `FS-${stamp}-${rand}`;
  },

  buildWhatsappMessage(order) {
    const lines = [];
    lines.push("Hola Froggy Shop, quiero realizar un pedido.");
    lines.push("");
    lines.push(`Solicitud: #${order.id}`);
    lines.push(`Nombre: ${order.name}`);
    lines.push("");
    lines.push("Productos:");
    order.items.forEach((i) => {
      const optionTxt = i.option ? ` (${i.option})` : "";
      const priceTxt = i.requiresQuote ? "cotización pendiente" : UI.formatMoney(CartAPI.subtotal(i));
      lines.push(`- ${i.qty} x ${i.name}${optionTxt} — ${priceTxt}`);
    });
    lines.push("");
    lines.push(`Total estimado: ${UI.formatMoney(order.total)}`);
    lines.push(`Entrega: ${order.delivery === "personal" ? `Entrega personal en ${FROGGY_CONFIG.localDeliveryCity}` : "Envío a domicilio"}`);
    if (order.delivery === "envio") {
      lines.push(`Dirección: ${order.address.street}, ${order.address.city}, ${order.address.state}, CP ${order.address.zip}`);
    }
    if (order.eventDate) lines.push(`Fecha del evento: ${order.eventDate}`);
    if (order.comments) lines.push(`Comentarios: ${order.comments}`);
    lines.push("");
    lines.push("Me gustaría continuar con mi pedido.");
    return lines.join("\n");
  },

  whatsappUrl(message) {
    const number = FROGGY_CONFIG.whatsappNumber;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  },

  /** Envía un respaldo silencioso a Google Forms (no bloquea el flujo si falla). */
  async submitGoogleFormBackup(order) {
    if (!FROGGY_CONFIG.googleFormEnabled) return;
    try {
      const entries = FROGGY_CONFIG.googleFormEntries;
      const body = new URLSearchParams();
      body.append(entries.orderId, order.id);
      body.append(entries.name, order.name);
      body.append(entries.whatsapp, order.whatsapp);
      body.append(entries.email, order.email || "");
      body.append(entries.delivery, order.delivery);
      body.append(
        entries.address,
        order.delivery === "envio"
          ? `${order.address.street}, ${order.address.city}, ${order.address.state}, CP ${order.address.zip}`
          : ""
      );
      body.append(
        entries.products,
        order.items.map((i) => `${i.qty}x ${i.name}${i.option ? " (" + i.option + ")" : ""}`).join(" | ")
      );
      body.append(entries.total, String(order.total));
      body.append(entries.comments, order.comments || "");

      await fetch(FROGGY_CONFIG.googleFormActionUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
    } catch (e) {
      console.warn("No se pudo enviar el respaldo a Google Form:", e);
    }
  },

  saveLastOrder(order) {
    localStorage.setItem("froggyshop_last_order", JSON.stringify(order));
  },

  getLastOrder() {
    try {
      return JSON.parse(localStorage.getItem("froggyshop_last_order"));
    } catch {
      return null;
    }
  },
};
