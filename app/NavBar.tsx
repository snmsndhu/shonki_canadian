"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import ContactModal from "@/components/ContactModal";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const links = [{ label: "Contact", href: "#" }];

  return (
    <>
      <nav className="w-full px-4 md:px-8 lg:px-16 flex justify-between items-center mb-5 py-5">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/shonki_canadin_logo.png"
            alt="Shonki Canadian Logo"
            width={300}
            height={100}
            className="w-auto h-8 md:h-10"
          />
        </Link>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-purple-700 to-purple-500 text-white font-bold py-2 px-4 rounded-full animate-bounce animate-infinite animate-ease-in animate-fill-forwards flex-shrink-0"
        >
          <ul className="flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </ul>
        </button>
      </nav>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default NavBar;
