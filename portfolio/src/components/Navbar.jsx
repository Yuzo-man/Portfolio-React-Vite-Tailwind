import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Pclogo from "../assets/svg/PC.svg";

const navigation = [
  { name: 'Inicio',              href: '#inicio' },
  { name: 'Sobre mí',            href: '#sobre-mi' },
  { name: 'Habilidades',         href: '#habilidades' },
  { name: 'Experiencia',         href: '#experiencia' },
  { name: 'Proyectos',           href: '#proyectos' },
  { name: 'Proyectos Personales',href: '#proyectos-personales' },
  { name: 'Educación',           href: '#educacion' },
  { name: 'Contacto',            href: '#contacto' },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-900 bg-opacity-95 backdrop-blur sticky top-0 z-50 border-b border-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                  <span className="sr-only">Abrir menú</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="h-9 w-auto rounded-full border-2 border-purple-500"
                    src={Pclogo}
                    alt="Pablo Cerda"
                  />
                  <span className="ml-3 text-white font-semibold text-sm hidden lg:block">
                    Pablo Cerda
                  </span>
                </div>

                {/* Desktop nav */}
                <div className="hidden sm:flex sm:ml-6 items-center">
                  <div className="flex space-x-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA button desktop */}
              <div className="hidden sm:flex items-center">
                <a
                  href="mailto:pablo.cerdaisas@gmail.com"
                  className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Contactar
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <DisclosurePanel className="sm:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-gray-300 hover:text-white hover:bg-gray-700 block rounded-md px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <a
                href="mailto:pablo.cerdaisas@gmail.com"
                className="block bg-purple-600 hover:bg-purple-700 text-white text-center rounded-md px-3 py-2 text-base font-medium mt-2 transition-colors"
              >
                Contactar
              </a>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
