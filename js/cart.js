/**
 * "MI PEDIDO" — carrito guardado en el navegador (localStorage).
 * No requiere servidor. Cada línea se identifica por
 * producto + opción elegida.
 */
const CartAPI = (() => {
  const STORAGE_KEY = "froggyshop_cart_v1";

  function _read() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("No se pudo leer el pedido guardado:", e);
      return [];
    }
  }

  function _write(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    document.dispatchEvent(new CustomEvent("cart:changed", { detail: { items } }));
  }

  function _lineKey(productId, option) {
    return `${productId}::${option || ""}`;
  }

  return {
    getItems() {
      return _read();
    },

    add(product, qty, option) {
      const items = _read();
      const key = _lineKey(product.id, option);
      const existing = items.find((i) => i.key === key);
      if (existing) {
        existing.qty += qty;
      } else {
        items.push({
          key,
          productId: product.id,
          name: product.name,
          image: (product.images && product.images[0]) || "",
          price: product.price,
          unit: product.unit,
          minOrder: product.minOrder || 1,
          requiresQuote: !!product.requiresQuote,
          option: option || "",
          qty: qty,
        });
      }
      _write(items);
    },

    updateQty(key, qty) {
      const items = _read();
      const line = items.find((i) => i.key === key);
      if (!line) return;
      if (qty <= 0) {
        return this.remove(key);
      }
      line.qty = qty;
      _write(items);
    },

    remove(key) {
      const items = _read().filter((i) => i.key !== key);
      _write(items);
    },

    clear() {
      _write([]);
    },

    count() {
      return _read().reduce((sum, i) => sum + i.qty, 0);
    },

    subtotal(line) {
      return line.requiresQuote ? 0 : line.price * line.qty;
    },

    total() {
      return _read().reduce((sum, i) => sum + this.subtotal(i), 0);
    },

    hasQuoteItems() {
      return _read().some((i) => i.requiresQuote);
    },

    belowMinimum() {
      return _read().filter((i) => i.qty < i.minOrder);
    },
  };
})();
