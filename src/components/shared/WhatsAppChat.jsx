import Image from "next/image";
import React from "react";
import whatsappImg from "./../../assets/whatsapp_733585.png";

const WhatsAppChat = () => {
  return (
    <div className="fixed bottom-10 md:right-10 right-8 z-50">
      <a
        href="https://wa.me/+8801939032974?text=Hello%20i%20have%20a%20question"
        target="_blank"
        aria-label="Welcome"
      >
        {/* <img src={whatsappImg} alt="whatsapp" /> */}
        <Image src={whatsappImg} alt="whatsapp" width={60} height={60} />
      </a>
    </div>
  );
};

export default WhatsAppChat;
