import type React from "react";
import { type FormEvent, useState } from "react";
import { PERSONAL_INFO } from "../constants";

interface WhatsAppSenderProps {
  defaultMessage?: string;
}

const WhatsAppSender: React.FC<WhatsAppSenderProps> = ({
  defaultMessage = "",
}) => {
  const [phone, setPhone] = useState<string>(PERSONAL_INFO.phone);
  const [message, setMessage] = useState<string>(defaultMessage);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();

    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length < 10) {
      alert("Por favor, insira um número válido com DDD.");
      return;
    }

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="bg-white text-[#0d5973] px-3 md:px-6 py-5 rounded-2xl font-medium shadow-2xl items-center flex-col lg:justify-start"
    >
      <div>
        <textarea
          placeholder="Digite sua mensagem aqui..."
          className="w-full min-h-28 p-2 border border-[#0d5973] rounded-md resize-none outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#0d5973] hover:bg-[#0a475c] text-white font-bold py-2 px-4 rounded-md hover:scale-95 transition-transform active:scale-105 duration-200 shadow-sm"
      >
        Abrir Conversa
      </button>
    </form>
  );
};

export default WhatsAppSender;
