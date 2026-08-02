"use client";

import WhatsappIcon from "@iconify-react/selfhst/whatsapp";

const WHATSAPP_URL = "https://wa.me/13054620081";

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <WhatsappIcon height="1em" />
    </a>
  );
}
