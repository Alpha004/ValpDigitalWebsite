import React from "react";
import Image from "next/image";
import Head from 'next/head';
// import Spline from "@splinetool/react-spline/next";

import style from "./page.module.css";
import { IconFacebook, IconWhatsappBusiness } from "../components";
import IconInstagram from "../components/icons/IconInstagram";

export default function HomePage() {

  const socialLinks = {
    whatsapp: 'https://api.whatsapp.com/send?phone=51980227242&text=Quisiera+Información"',
    facebook: 'https://www.facebook.com/VALPDigital',
    instagram: 'https://www.instagram.com/valpdigital'
  };

  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Head>
        <title>Sitio en construcción</title>
        <meta name="description" content="Página en construcción" />
      </Head>

      <Image
          width={150}
          height={150}
          src={"/assets/images/valp_logo_vertical.svg"}
          alt="Logo"
        />

      <div className="text-center max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Página en construcción...</h1>
        <p className="text-gray-600 mb-6">
          Estamos trabajando para brindarte una mejor experiencia. <br />
          Mientras tanto, contáctanos por nuestras redes:
        </p>
        
        {/* Redes sociales */}
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href={socialLinks.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 transition-colors"
            aria-label="WhatsApp"
          >
            <IconWhatsappBusiness />
          </a>
          <a 
            href={socialLinks.facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
            aria-label="Facebook"
          >
            <IconFacebook/>
          </a>
          <a 
            href={socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700 transition-colors"
            aria-label="Instagram"
          >
            <IconInstagram />
          </a>
        </div>

        <div className="animate-pulse text-sm text-gray-500">
          Próximamente disponible
        </div>
      </div>
    </div>
  );
}
