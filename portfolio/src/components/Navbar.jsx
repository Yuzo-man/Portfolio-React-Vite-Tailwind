import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import Pclogo from "../assets/svg/PC.svg";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const { isDark, setIsDark, lang, setLang, t } = useApp();

  const navItems = [
    { name: t.nav.inicio,              href: '#inicio' },
    { name: t.nav.sobreMi,             href: '#sobre-mi' },
    { name: t.nav.habilidades,         href: '#habilidades' },
    { name: t.nav.experiencia,         href: '#experiencia' },
    { name: t.nav.proyectos,           href: '#proyectos' },
    { name: t.nav.proyectosPersonales, href: '#proyectos-personales' },
    { name: t.nav.educacion,           href: '#educacion' },
    { name: t.nav.contacto,            href: '#contacto' },
  ];

  return (
    <Disclosure as="nav" className="bg-white/95 dark:bg-gray-900/95 backdrop-blur sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-[100rem] mx-auto px-4 lg:px-6">
            <div className="relative flex items-center justify-between h-14">

              {/* Mobile/tablet menu button — visible below lg */}
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                  <span className="sr-only">Abrir menú</span>
                  {open ? <XMarkIcon className="block h-6 w-6" /> : <Bars3Icon className="block h-6 w-6" />}
                </DisclosureButton>
              </div>

              {/* Logo + desktop nav */}
              <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                  <img className="h-8 w-auto rounded-full border-2 border-purple-500" src={Pclogo} alt="Pablo Cerda" />
                </div>

                {/* Desktop nav items — only visible from lg up */}
                <div className="hidden lg:flex lg:ml-4 items-center">
                  <div className="flex items-center gap-0.5">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right controls — desktop */}
              <div className="hidden lg:flex items-center gap-2">
                {/* Language selector */}
                <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5 border border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setLang('es')}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                      lang === 'es' ? 'bg-purple-600 text-white shadow' : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                    }`}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => setLang('en')}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                      lang === 'en' ? 'bg-purple-600 text-white shadow' : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                    }`}
                  >
                    EN
                  </button>
                </div>

                {/* Theme toggle */}
                <button
                  onClick={() => setIsDark(!isDark)}
                  title={isDark ? 'Modo claro' : 'Modo oscuro'}
                  className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {isDark
                    ? <SunIcon className="h-4 w-4 text-yellow-500" />
                    : <MoonIcon className="h-4 w-4 text-purple-500" />}
                </button>

                {/* CTA */}
                <a
                  href="mailto:pablo.cerdaisas@gmail.com"
                  className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  {t.nav.contactar}
                </a>
              </div>

              {/* Mobile right controls (theme + lang only, no CTA) */}
              <div className="absolute inset-y-0 right-0 flex items-center gap-1.5 pr-2 lg:hidden">
                <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5 border border-gray-200 dark:border-gray-700">
                  <button onClick={() => setLang('es')}
                    className={`px-2 py-0.5 rounded text-xs font-semibold transition-colors ${lang === 'es' ? 'bg-purple-600 text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                    ES
                  </button>
                  <button onClick={() => setLang('en')}
                    className={`px-2 py-0.5 rounded text-xs font-semibold transition-colors ${lang === 'en' ? 'bg-purple-600 text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                    EN
                  </button>
                </div>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
                >
                  {isDark ? <SunIcon className="h-4 w-4 text-yellow-500" /> : <MoonIcon className="h-4 w-4 text-purple-500" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile/tablet dropdown panel */}
          <DisclosurePanel className="lg:hidden border-t border-gray-200 dark:border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-0.5">
              {navItems.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 block rounded-md px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <div className="pt-2 px-3">
                <a
                  href="mailto:pablo.cerdaisas@gmail.com"
                  className="block bg-purple-600 hover:bg-purple-500 text-white text-center rounded-md px-3 py-2 text-sm font-medium transition-colors"
                >
                  {t.nav.contactar}
                </a>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
