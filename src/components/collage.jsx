import { useState } from "react";
import Album from "./Album";
import antonio from "../img/programadores/antonio.webp";
import brais from "../img/programadores/brais.jpg";
import carlos from "../img/programadores/carlos.png";
import fazt from "../img/programadores/fazt.jpg";
import mark from "../img/programadores/mark.jpg";
import midudev from "../img/programadores/midudev.webp";
import miriam from "../img/programadores/miriam.webp";

function Collage() {
  const [albumActual, setAlbumActual] = useState(null);

  // Aquí defines tus imágenes para cada álbum
  const albumTecnologias = [
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg", alt: "angular" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", alt: "nodejs" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "react" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg", alt: "vuejs" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", alt: "python" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", alt: "java" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", alt: "javascript" },
  ];

  const albumProgramadores = [
    { url: antonio, alt: "Programador 1" },
    { url: brais, alt: "Programador 2" },
    { url: carlos, alt: "Programador 3" },
    { url: fazt, alt: "Programador 4" },
    { url: mark, alt: "Programador 5" },
    { url: midudev, alt: "Programador 6" },
    { url: miriam, alt: "Programador 7" },
  ];

  return (
    <section className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900">Galería de Álbumes</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
        <button
          className="px-8 py-4 bg-linear-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
          onClick={() => setAlbumActual("tecnologias")}
        >
          Ver Album de Tecnologías
        </button>
        <button
          className="px-8 py-4 bg-linear-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-purple-800 transform hover:scale-105 transition-all duration-300"
          onClick={() => setAlbumActual("programadores")}
        >
          Ver Album Programadores Web
        </button>
      </div>

      {albumActual === "tecnologias" && (
        <Album 
        titulo="Álbum de Tecnologías" 
        imagenes={albumTecnologias} />
      )}
      {albumActual === "programadores" && (
        <Album
          titulo="Álbum de Programadores Web"
          imagenes={albumProgramadores}
        />
      )}
    </section>
  );
}

export default Collage;
