/* ═══════════════════════════════════════════════
   WHATSAPP CHECKOUT
   Builds a pre-filled order message and opens WhatsApp
═══════════════════════════════════════════════ */

const Checkout = (() => {

  const WA_NUMBER = '2348108116903';

  /* ── Build message ──────────────────────────── */
  function buildMessage(cartItems, total) {
    const lines = [];

    lines.push('🛒 *NEW ORDER — SophtMade*');
    lines.push('─────────────────────────');
    lines.push('');

    cartItems.forEach((item, i) => {
      lines.push(`*${i + 1}. ${item.name}*`);
      lines.push(`   • Version: ${capitalize(item.version)} edition`);
      lines.push(`   • Kit: ${capitalize(item.kit)} kit`);
      lines.push(`   • Size: ${item.size}`);
      lines.push(`   • Qty: ${item.qty}`);
      lines.push(`   • Price: ${formatPrice(item.price * item.qty)}`);
      lines.push('');
    });

    lines.push('─────────────────────────');
    lines.push(`*TOTAL: ${formatPrice(total)}*`);
    lines.push('_(Delivery fee to be confirmed)_');
    lines.push('');
    lines.push('Please confirm availability and provide delivery details. Thank you! 🙏');

    return lines.join('\n');
  }

  /* ── Open WhatsApp ──────────────────────────── */
  function openWhatsApp(message) {
    const encoded = encodeURIComponent(message);
    const url     = `https://wa.me/${WA_NUMBER}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  /* ── Checkout handler ───────────────────────── */
  function handleCheckout() {
    if (Cart.isEmpty()) {
      Cart.showToast('Your cart is empty!', 'error');
      return;
    }

    const items   = Cart.getAll();
    const total   = Cart.getTotal();
    const message = buildMessage(items, total);
    openWhatsApp(message);
  }

  /* ── Init ───────────────────────────────────── */
  function init() {
    const btn = document.getElementById('whatsappCheckout');
    if (btn) {
      btn.addEventListener('click', handleCheckout);
    }
  }

  return { init, handleCheckout };
})();

document.addEventListener('DOMContentLoaded', () => Checkout.init());