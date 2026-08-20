/**
 * Utilidades de interfaz compartidas entre todas las páginas.
 */
const UI = {
  formatMoney(n) {
    return "$" + Number(n).toLocaleString("es-MX", { minimumFractionDigits: 0 }) + " MXN";
  },

  photoPlaceholder(label = "Foto pendiente") {
    return `
      <div class="photo-placeholder" role="img" aria-label="${label}">
        <span class="photo-placeholder__icon" aria-hidden="true">🐸</span>
        <span class="photo-placeholder__label">${label}</span>
      </div>`;
  },

  mediaHtml(images, label) {
    if (images && images.length > 0) {
      return `<img src="${images[0]}" alt="${label}" loading="lazy">`;
    }
    return this.photoPlaceholder();
  },

  renderHeader(activePage) {
    const header = document.getElementById("site-header");
    if (!header) return;
    const cartCount = CartAPI.count();
    header.innerHTML = `
      <div class="site-header__bar">
        <a href="index.html" class="brand" aria-label="Ir al inicio de Froggy Shop">
          <span class="brand__mark" aria-hidden="true"><img src="assets/logo-froggyshop.jpeg" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;"></span>
          Froggy Shop
        </a>
        <nav class="nav-desktop" aria-label="Navegación principal">
          <a href="index.html">Inicio</a>
          <a href="tienda.html">Tienda</a>
          <a href="personalizados.html">Personalizados</a>
          <a href="eventos.html">Eventos</a>
        </nav>
        <div class="header-actions">
          <button class="icon-btn menu-toggle" id="menu-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu">
            ☰
          </button>
          <a class="icon-btn" href="pedido.html" aria-label="Ver mi pedido, ${cartCount} producto(s)">
            🛍️
            ${cartCount > 0 ? `<span class="icon-btn__badge">${cartCount}</span>` : ""}
          </a>
        </div>
      </div>
      <nav class="mobile-menu" id="mobile-menu" aria-label="Navegación móvil">
        <a href="index.html">Inicio</a>
        <a href="tienda.html">Tienda</a>
        <a href="personalizados.html">Personalizados</a>
        <a href="eventos.html">Eventos</a>
        <a href="pedido.html">Mi pedido</a>
      </nav>
    `;

    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "✕" : "☰";
    });

    document.addEventListener("cart:changed", () => {
      const badge = header.querySelector(".icon-btn__badge");
      const count = CartAPI.count();
      const cartLink = header.querySelector('a[href="pedido.html"]');
      cartLink.setAttribute("aria-label", `Ver mi pedido, ${count} producto(s)`);
      let b = header.querySelector(".icon-btn__badge");
      if (count > 0) {
        if (!b) {
          b = document.createElement("span");
          b.className = "icon-btn__badge";
          cartLink.appendChild(b);
        }
        b.textContent = count;
      } else if (b) {
        b.remove();
      }
    });
  },

  renderFooter() {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    footer.innerHTML = `
      <div class="container">
        <a class="social-pill" href="${FROGGY_CONFIG.instagramUrl}" target="_blank" rel="noopener">
          <img src="assets/logo-instagram.png" alt="" style="width:18px;height:18px;filter:invert(1);">
          ${FROGGY_CONFIG.instagramHandle}
        </a>
        <nav class="footer-links" aria-label="Enlaces del pie de página">
          <a href="index.html">Inicio</a>
          <a href="tienda.html">Tienda</a>
          <a href="personalizados.html">Personalizados</a>
          <a href="eventos.html">Eventos</a>
          <a href="pedido.html">Mi pedido</a>
        </nav>
        <p class="footer-note">Entrega personal en ${FROGGY_CONFIG.localDeliveryCity} o envío a todo México. Pedidos sobre pedido — precios sujetos a confirmación.</p>
        <p class="footer-note">© ${new Date().getFullYear()} Froggy Shop.</p>
      </div>
    `;
  },

};
