import React from "react";
import Navbar from './components/Navbar';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Card from "./components/Cards/Card";
import backgroundSM from "./assets/background/sobre-mi.jpg";
import backgroundEst from "./assets/background/estudios2.jpg";

const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fondo gris fijo */}
      <div className="fixed inset-0 w-full h-full bg-gray-700 z-0"></div>
      
      {/* Contenido principal */}
      <div className="relative z-10">
        <Navbar />
          <div className="flex justify-center items-center h-full">
            <h1 className="text-3xl font-bold underline p-10 text-center">Pablo Cerda Isasmendi</h1>
          </div>
          <div className="flex">
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundSM})` }}>
              <div className="flex justify-center items-center h-full">
            <Card
            GrandTitle="Sobre mí"
            description="Soy Pablo Cerda Isasmendi, nacido en Chillán y actualmente residiendo en Antofagasta. Me titulé en Ingeniería en Computación e Informática en 2024. Estoy expandiendo mis conocimientos en desarrollo web, tanto en backend como en frontend, con un enfoque particular en React y Tailwind CSS.

Además, tengo experiencia en la evaluación de proyectos TI y data science. Estoy entusiasmado por adquirir más conocimientos y experiencia profesional en estos campos, siempre buscando nuevos desafíos y oportunidades para crecer y mejorar mis habilidades."
          />
              </div>
            </div>
          </div>
        
        {/* Nueva sección con otro fondo */}
        <div className="relative w-full h-screen bg-cover bg-center p-15" style={{ backgroundImage: `url(${backgroundEst})` }}>
          <div className="flex justify-start items-start h-full">
            <Card GrandTitle="Estudios" title="Educación basica" description="Escuela Huanchaca E-56 Antofagasta (2004-2011)" title2="Educación media" description2="Colegio Eagle School (2012-2015)" title3="Educación Superior" description3="Universidad catolica del norte (2016-2024)"/>
          </div>
        </div>
        
        <footer className="bg-gray-900 text-white py-6 text-center">
          <p>&copy; 2024 Pablo Cerda Isasmendi. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
