/* ═══════════════════════════════════════════════
   WHATSAPP CHECKOUT
   Builds a pre-filled order message and opens WhatsApp
═══════════════════════════════════════════════ */

const Checkout = (() => {

  const WA_NUMBER = '08136358095';

  function buildMessageWithDelivery(cartItems, total, delivery) {
    const lines = [];

    lines.push('🛒 *NEW ORDER — SophtMade*');
    lines.push('═════════════════════════════════');
    lines.push('');
    lines.push('*👤 CUSTOMER DETAILS*');
    lines.push(`   • Name: ${delivery.fullName}`);
    lines.push(`   • Phone: ${delivery.phone}`);
    lines.push(`   • Address: ${delivery.address}`);
    lines.push(`   • City/State: ${delivery.cityState}`);
    if (delivery.notes.trim()) {
      lines.push(`   • Notes: ${delivery.notes}`);
    }
    lines.push('');
    lines.push('*📦 ORDER ITEMS*');
    lines.push('─────────────────────────────────');

    cartItems.forEach((item, i) => {
      lines.push(`*${i + 1}. ${item.name}*`);
      lines.push(`   • Version: ${capitalize(item.version)} edition`);
      lines.push(`   • Kit: ${capitalize(item.kit)} kit`);
      lines.push(`   • Size: ${item.size}`);
      lines.push(`   • Qty: ${item.qty}`);
      lines.push(`   • Subtotal: ${formatPrice(item.price * item.qty)}`);
      lines.push('');
    });

    lines.push('═════════════════════════════════');
    lines.push(`*💰 ORDER TOTAL: ${formatPrice(total)}*`);
    lines.push('_(Delivery fee to be confirmed)_');
    lines.push('');
    lines.push('✅ Please confirm availability and payment method.');
    lines.push('Thank you for shopping at SophtMade! 🙏');

    return lines.join('\n');
  }

  function openWhatsApp(message) {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WA_NUMBER}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function getDeliveryDetails() {
    const fullName = document.getElementById('deliveryName')?.value.trim();
    const phone = document.getElementById('deliveryPhone')?.value.trim();
    const address = document.getElementById('deliveryAddress')?.value.trim();
    const cityState = document.getElementById('deliveryCity')?.value.trim();
    const notes = document.getElementById('deliveryNotes')?.value.trim() || '';

    if (!fullName || !phone || !address || !cityState) {
      Cart.showToast('Please fill in all delivery details', 'error');
      return null;
    }

    return { fullName, phone, address, cityState, notes };
  }

  function handleCheckoutWithForm() {
    if (Cart.isEmpty()) {
      Cart.showToast('Your cart is empty!', 'error');
      return;
    }

    const delivery = getDeliveryDetails();
    if (!delivery) return;

    const items = Cart.getAll();
    const total = Cart.getTotal();
    const message = buildMessageWithDelivery(items, total, delivery);

    openWhatsApp(message);
  }

  function init() {
    const formBtn = document.getElementById('checkoutWithForm');
    if (formBtn) {
      formBtn.addEventListener('click', handleCheckoutWithForm);
    }
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => Checkout.init());