export const whatsapp = {
  number: '971556500131',
  message: 'ممكن تزودوني بتفاصيل عن باقات الضيافة عندكم؟'
};

export function getWhatsappLink(customMessage = whatsapp.message) {
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(customMessage)}`;
}
