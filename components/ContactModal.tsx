import React from "react";
import {
  FaSquareInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-sm w-full mx-4 shadow-xl border border-white/20">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-300"
        >
          ✕
        </button>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white text-center mb-4">
            Connect With Us
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://www.instagram.com/shonkicanadian/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-all"
            >
              <FaSquareInstagram className="text-xl" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/shonki.canadian"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-all"
            >
              <FaFacebook className="text-xl" />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.youtube.com/@Shonkicanadian"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-all"
            >
              <FaYoutube className="text-xl" />
              <span>YouTube</span>
            </a>

            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-all"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
