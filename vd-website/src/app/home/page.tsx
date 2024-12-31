import React from "react";
import Image from "next/image";
// import Spline from "@splinetool/react-spline/next";

import style from "./page.module.css";
import { IconFacebook, IconWhatsappBusiness } from "../components";
import IconInstagram from "../components/icons/IconInstagram";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
        <div className="mx-auto max-w-5xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="items-center mt-10">
              <Image
                className={style.logo}
                id="logo"
                src="/assets/images/logo.png"
                alt="Valp Digital Logo"
                width={500}
                height={500}
                priority={true}
              />
              <div className="flex flex-wrap items-center justify-center">
                <span className="mt-4 xl:text-4xl">Contactanos en Whatsapp </span>
                <div className="mx-auto max-w-md px-4 lg:py-10 xl:text-10xl text-green-400">
                    <a href="https://api.whatsapp.com/send?phone=51980227242&text=Quisiera+Información">
                    <Image
                src="/assets/images/whatsapp.png"
                alt="Whatsapp Logo"
                width={250}
                height={250}
                priority={true}
              />
                    </a>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block text-violet-500">
                    Nuestra pagina esta en construcción. Pronto disfrutarás de la nueva tienda online
                  </span>
                  <span className="block text-green-400">Primero en</span>
                  <span className="block text-purple-300">Arequipa</span>
                </h1>
                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Somos VALP Digital🖥️🕹️, la primera tienda online de productos
                  de computo y tecnologia 🤖 en Arequipa 🇵🇪
                </p>
                <br />
                <ul className="text-base text-gray-400 ">
                  <option value="1">
                    ✅ Productos de Calidad para Gamers y Ejecutivos
                  </option>
                  <option value="2">
                    ✅ Delivery a Domicilio y puntos de entrega
                  </option>
                  <option value="3">
                    ✅ Toda compra incluye comprobante electronico
                  </option>
                  <option value="4">
                    ✅ Buena atencion y asesoria al cliente
                  </option>
                </ul>
                <br />
                <p>Facebook: <a href="https://www.facebook.com/VALPDigital" className="text-blue-400">https://www.facebook.com/VALPDigital</a></p>
                <p>Instagram: <a href="https://www.instagram.com/valpdigital" className="text-blue-400">https://www.instagram.com/valpdigital</a></p>
                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Contamos con delivery gratuito a todo Jose Luis Bustamante y
                  Rivero ✈️!! Puedes solicitar nuestro catalogo y solicitar
                  asesoria sobre tu compra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Acerca de Nosotros
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Delivery
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Privacidad
              </a>
            </div>
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://api.whatsapp.com/send?phone=51980227242&text=Quisiera+Información"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Whatsapp</span>
              <IconWhatsappBusiness />
            </a>
            <a href="https://www.facebook.com/VALPDigital" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <IconFacebook />
            </a>
            <a href="https://www.instagram.com/valpdigital" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <IconInstagram />
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            © 2025 Valp Digital. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
