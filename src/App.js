import React, { useState } from 'react';
import './App.css';

// Elementos del carrusel
const mediaItems = [
  { type: 'image', src: 'https://i.imgur.com/QfAjwcQ.jpeg', alt: 'Imagen 1' },
  { type: 'video', src: 'https://i.imgur.com/qpWhJqC.mp4', alt: 'Video 1' },
  { type: 'image', src: 'https://i.imgur.com/MHCs1P6.jpeg', alt: 'Imagen 2' },
  { type: 'video', src: 'https://i.imgur.com/uJB1kqq.mp4', alt: 'Video 2' },
];

// Datos de rutas
const rutasData = [
  {
    id: 1,
    name: 'Ruta 1',
    img: 'https://i.imgur.com/94u4BLr.png',
    imgPopup: 'https://i.imgur.com/9WpjbEV.png',
    info: `
      <div>
        <p style="color: green; font-weight: bold;"> Pedregoso - 5 de Mayo</p>
        <ul style="list-style: none; padding-left: 0;">
          <li>Mercado del pedregoso</li>
          <li>Soriana, Coppel</li>
          <li>UAQ</li>
          <li>Office Depot</li>
          <li>Kimberly Clark</li>
          <li>5 de Mayo</li>
        </ul>
        <p style="color: red; font-weight: bold;">
          Frecuencia<br />
          10 - 15 min.<br />
          6:00 am - 9:00 pm<br />
          Lunes - Viernes
        </p>
        <p style="color: red; font-style: italic;">
          Nota: la frecuencia puede variar
        </p>
      </div>
    `,
    link: 'https://maps.app.goo.gl/iijagarL9dciMF6E7 ',
  },
  
  {
    id: 2,
    name: 'Ruta 2',
    img: 'https://i.imgur.com/xy10ynV.png', 
    imgPopup: 'https://i.imgur.com/tim4DRU.png',
    info: `
      <div>
        <p style="color: green; font-weight: bold;"> Pedregoso - Universidad Tecnológica</p>
        <ul style="list-style: none; padding-left: 0;">
          <li>Pedregoso</li>
          <li>Soriana, Coppel</li>
          <li>Lomas de San Juan</li>
          <li>Cruz Roja</li>
          <li>Kimberly Clark</li>
          <li>Corregidora</li>
          <li>La Venta</li>
          <li>UT</li>
        </ul>
        <p style="color: red; font-weight: bold;">
          Frecuencia<br />
          10 - 15 min.<br />
          5:40 am - 9:00 pm<br />
          
        </p>
        <p style="color: red; font-style: italic;">
          Nota: la frecuencia puede variar
        </p>
      </div>
    `,
    link: 'https://www.google.com.mx/maps/dir/Pedregoso/20.3862655,-99.9638394/20.3851088,-99.9779206/20.3868453,-99.9893222/20.3849621,-99.9909027/20.3859166,-99.9934388/20.3905134,-99.9899207/20.3935699,-99.9886544/20.3943697,-99.9915894/20.3936669,-99.9926036/20.3919663,-100.0020789/20.3673783,-100.0117692/20.3913238,-99.9931602/20.3917851,-99.9887112/20.3790909,-99.9645988/20.3766498,-99.9647198/@20.3796507,-100.0055437,14.52z/data=!4m23!4m22!1m5!1m1!1s0x85d30ba0e9d92139:0x14f58bac8fdc8502!2m2!1d-99.9647182!2d20.3766632!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!3e0?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 4,
    name: 'Ruta 4',
    img: 'https://i.imgur.com/uTialKH.png', 
    imgPopup: 'https://i.imgur.com/kVtv0KW.png',
    info: `
      <div>
        <p style="color: green; font-weight: bold;"> Nvo. parque industrial - 5 de Mayo</p>
        <ul style="list-style: none; padding-left: 0;">
          <li>Mercado del Pedregoso</li>
          <li>Notaria 3</li>
          <li>Cervecería Primus</li>
          <li>Soriana, Coppel</li>
          <li>Mercado Juarez</li>
          <li>5 de Mayo</li>
          <li>Chedraui</li>
          <li>Kimberly Clark</li>
          
        </ul>
        <p style="color: red; font-weight: bold;">
          Frecuencia<br />
          10 - 15 min.<br />
          5:30 am - 9:00 pm<br />
          
        </p>
        <p style="color: red; font-style: italic;">
          Nota: la frecuencia puede variar
        </p>
      </div>
    `,
    link: 'https://maps.app.goo.gl/AJaDAtJrHUBUxhX36',
  },
  {
    id: 11,
    name: 'Ruta 11',
    img: 'https://i.imgur.com/vR1C8LR.png', 
    imgPopup: 'https://i.imgur.com/ntCuIO3.png',
    info: `
      <div>
        <p style="color: green; font-weight: bold;"> Loma alta - Centro</p>
        <ul style="list-style: none; padding-left: 0;">
          <li>Loma Alta</li>
          <li>Hospital General de San Juan del Río</li>
          <li>Soriana, Coppel</li>
          <li>UAQ</li>
          <li>Kimberly Clark</li>
          <li>Av. Juarez</li>
          <li>Central de Autobuses</li>
          
        </ul>
        <p style="color: red; font-weight: bold;">
          Frecuencia<br />
          10 - 15 min.<br />
          5:00 am - 9:00 pm<br />
          
        </p>
        <p style="color: red; font-style: italic;">
          Nota: la frecuencia puede variar
        </p>
      </div>
    `,
    link: 'https://maps.app.goo.gl/Dx7K5eBwcfrbeCKq6',
  },  
  {
    id: 19,
    name: 'Ruta 19',
    img: 'https://i.imgur.com/Yu5f282.png', 
    imgPopup: 'https://i.imgur.com/fOAtpuP.png',
    info: `
      <div>
        <p style="color: green; font-weight: bold;"> Pedregoso- COBAQ 10</p>
        <ul style="list-style: none; padding-left: 0;">
          <li>Pedregoso</li>
          <li>Coppel, Soriana</li>
          <li>UAQ</li>
          <li>HEB</li>
          <li>WALMART</li>
          <li>Ingredion</li>
          <li>Calderera del centro</li>
          <li>Coca-Cola</li>
          <li>CONDUMEX</li>
          <li>Coca-Cola</li>
          <li>CONALEP</li>
           <li>Cobaq 1</li>
        </ul>
        <p style="color: red; font-weight: bold;">
          Frecuencia<br />
          15 - 20 min.<br />
          5:30 am - 9:00 pm<br />
          
        </p>
        <p style="color: red; font-style: italic;">
          Nota: la frecuencia puede variar
        </p>
      </div>
    `,
    link: 'https://maps.app.goo.gl/K5U3u71ipS2CgYeX8',
  },    

  
  {
    id: 25,
    name: 'Ruta 25',
    img: 'https://i.imgur.com/vJJVxDP.png', 
    imgPopup: 'https://i.imgur.com/Wv2ALSz.png',
    info: `
      <div>
        <p style="color: green; font-weight: bold;"> Las Águilas - Centro</p>
        <ul style="list-style: none; padding-left: 0;">
          <li>Clínica 7 IMSS</li>
          <li>Lomas de San Juan</li>
          <li>Soriana, Coppel</li>
          <li>Cruz Roja</li>
          <li>Mercado Juarez</li>
          <li>5 de Mayo</li>
          <li>Home Depot</li>
          <li>Uaq</li>
        </ul>
        <p style="color: red; font-weight: bold;">
          Frecuencia<br />
          15 - 20 min.<br />
          5:30 am - 9:30 pm<br />
          
        </p>
        <p style="color: red; font-style: italic;">
          Nota: la frecuencia puede variar
        </p>
      </div>
    `,
    link: 'https://maps.app.goo.gl/Qk7epHEpmm2SNbBbA',
  },   
  {
    id: 28,
    name: 'Ruta 28',
    img: 'https://i.imgur.com/aKotkii.png', 
    imgPopup: 'https://i.imgur.com/CAdhGbl.png',
    info: `
      <div>
        <p style="color: green; font-weight: bold;">Rancho de enmedio - COBAQ 10</p>
        <ul style="list-style: none; padding-left: 0;">
          <li>Valle Dorado</li>
          <li>Colegio Constantino</li>
          <li>Unidad deportiva Maquío</li>
          <li>Coppel, Soriana</li>
          <li>UAQ</li>
          <li>HEB</li>
          <li>Walmart</li>
          <li>HARADA</li>
          <li>CONDUMEX</li>
          <li>CONALEP</li>
          <li>COBAQ 10</li>
        </ul>
        <p style="color: blue; font-weight: bold;">
          IMPORTANTE<br />
          Esta ruta solo sigue este trayecto de 5:40 am a 7:40 am<br />
          Después de este horario sigue otra ruta hacia la central de autobuses
        </p>
        <p style="color: red; font-weight: bold;">
          Frecuencia<br />
          15 - 25 min.<br />
          5:40 am - 7:40 am<br />
          Lunes - Viernes
        </p>
        <p style="color: red; font-style: italic;">
          Nota: la frecuencia puede variar
        </p>
      </div>
    `,
    link: 'https://maps.app.goo.gl/TL81pviyEcZFAPb97 ',
  },

  {
    id: 44,
    name: 'Ruta 44',
    img: 'https://i.imgur.com/dMBU3Zo.png', 
    imgPopup: 'https://i.imgur.com/Sd3Gv5o.png',
    info: `
      <div>
        <p style="color: green; font-weight: bold;">Valle Dorado - Centro</p>
        <ul style="list-style: none; padding-left: 0;">
          <li>COBAQ 18</li>
          <li>Coppel, Soriana</li>
          <li>UAQ</li>
          <li>Av. Moctezuma</li>
          <li>Home Depot</li>
          <li>Mercado Juarez</li>
          <li>5 de Mayo</li>
          <li>Chedraui</li>
        </ul>
        <p style="color: red; font-weight: bold;">
          Frecuencia<br />
          20 - 25 min.<br />
          5:30 am - 8:45 pm<br />
        </p>
        <p style="color: red; font-style: italic;">
          Nota: la frecuencia puede variar
        </p>
      </div>
    `,
    link: 'https://www.google.com.mx/maps/dir/COBAQ18+Valle+Dorado/20.3835699,-99.9853343/20.3797397,-99.9858146/20.3871696,-99.9929348/20.3933053,-99.9942072/20.379538,-99.9856719/20.3791217,-99.9136172/20.3860778,-99.9126963/20.384959,-99.9079543/@20.3824913,-99.9241326,14.66z/data=!4m31!4m30!1m20!1m1!1s0x85d30a86d528ca5f:0x50526d57b93c7388!2m2!1d-99.9078428!2d20.3849051!3m4!1m2!1d-99.9091032!2d20.3780106!3s0x85d30a7c496e8c3b:0x30d725f35e0fa083!3m4!1m2!1d-99.9695663!2d20.3904866!3s0x85d30b6d5734c493:0x60f9594543fb5404!3m4!1m2!1d-99.9699612!2d20.386861!3s0x85d30b72d8c422ab:0xdd32c64dc41fa26d!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!3e0?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D',
  },
];

// Redes Sociales
const redesSociales = {
  instagram: 'https://www.instagram.com/conoceturuta_/',
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState('home'); // Estado para manejar la página actual
  const [selectedRuta, setSelectedRuta] = useState(null); // Estado para manejar el popup

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Cierra el menú después de navegar
  };

  const openPopup = (ruta) => {
    setSelectedRuta(ruta);
  };

  const closePopup = () => {
    setSelectedRuta(null);
  };

  const currentItem = mediaItems[currentIndex];

  // Renderizado condicional según la página seleccionada
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <header className="App-header">
              <h1>Conoce tu Ruta</h1>
              <p>Un proyecto que busca informar a San Juan del Río 🚚</p>
            </header>

            {/* Carrusel */}
            <div className="carousel">
              {currentItem.type === 'image' ? (
                <img src={currentItem.src} alt={currentItem.alt} className="carousel-item" />
              ) : (
                <video controls className="carousel-item">
                  <source src={currentItem.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="carousel-controls">
              <button onClick={goToPrevious} className="control-button">⟨ Anterior</button>
              <button onClick={goToNext} className="control-button">Siguiente ⟩</button>
            </div>

            <div className="choose-route">
              <h2>Encuentra tu Ruta Ideal</h2>
              <button className="route-button" onClick={() => goToPage('rutas')}>
                🌍 Ver Rutas
              </button>
            </div>

            {/* Misión y Visión */}
            <section className="mission-vision">
              <div className="mission">
                <h2>🌟 Nuestra Misión</h2>
                <p>Informar y facilitar el acceso a rutas de transporte confiables para las personas en San Juan del Río.</p>
              </div>
              <div className="vision">
                <h2>🚀 Nuestra Visión</h2>
                <p>Ser la plataforma líder en información sobre rutas de transporte en la región.</p>
              </div>
            </section>

            {/* Por qué hacemos este proyecto */}
            <section className="why-project">
              <h2>🤔 ¿Por qué hacemos este proyecto?</h2>
              <p>
                Este proyecto nace con el objetivo de resolver la falta de información clara y precisa sobre las rutas de transporte en San Juan del Río.
                Buscamos mejorar la experiencia de los usuarios y apoyar el desarrollo de nuestra comunidad.
                
              </p>
              <p>
              “Un proyecto que
 busca informar a
 San Juan del Río
 sobre transporte
 público”
              </p>
            </section>

            {/* Nueva sección "¿Sabías que?" */}
            <section className="sabias-que">
  <h2 className="sabias-header">📘 ¿Sabías que?</h2>
  <h2> 👆🖱️ Da click en la Publicacion </h2>
  <div className="sabias-grid">
    <a href="https://www.instagram.com/p/DCVZY2isSMk/?img_index=1" target="_blank" rel="noopener noreferrer" className="sabias-item">
      <img src="https://i.imgur.com/HeIddwt.jpeg" alt="Causa 1" className="sabias-image" />
      <h3>¿Sabías que?</h3>
      <p>Una de las principales causas de la desinformación es la falta de infraestructura.</p>
    </a>
    <a href="https://www.instagram.com/p/DCerlKLRFC3/?img_index=1" target="_blank" rel="noopener noreferrer" className="sabias-item">
      <img src="https://i.imgur.com/qOHQ295.jpeg" alt="Eficiencia" className="sabias-image" />
      <h3>¡Importante!</h3>
      <p>El transporte eficiente reduce el tiempo de viaje y mejora la calidad de vida de los usuarios.</p>
    </a>
    <a href="https://www.instagram.com/p/DCgFjKHOfJV/?img_index=1" target="_blank" rel="noopener noreferrer" className="sabias-item">
      <img src="https://i.imgur.com/sYDGg06.jpeg" alt="Innovación" className="sabias-image" />
      <h3>Innovación</h3>
      <p>Las soluciones tecnológicas están transformando el transporte urbano.</p>
    </a>
    <a href="https://www.instagram.com/p/DCSrxEMs92V/?img_index=1" target="_blank" rel="noopener noreferrer" className="sabias-item">
      <img src="https://i.imgur.com/mSPEcdD.jpeg" alt="Conectividad" className="sabias-image" />
      <h3>Conectividad</h3>
      <p>Una buena red de transporte mejora la productividad económica de las ciudades.</p>
    </a>
    <a href="https://www.instagram.com/p/DCURJ1Txeoq/?img_index=1" target="_blank" rel="noopener noreferrer" className="sabias-item">
      <img src="https://i.imgur.com/Xyr6lOn.jpeg" alt="Tiempo de Opinar" className="sabias-image" />
      <h3>Tiempo de Opinar</h3>
      <p>Porque nuestra opinión importa y cada vez reconocemos más la necesidad de una alianza en donde entre todos nos apoyemos. ¡Comparte tu opinión!</p>
    </a>
    <a href="https://www.instagram.com/p/DCNqV7gM8Az/?img_index=1" target="_blank" rel="noopener noreferrer" className="sabias-item">
      <img src="https://i.imgur.com/cElz1eV.jpeg" alt="Desinformación" className="sabias-image" />
      <h3>Desinformación</h3>
      <p>Entra a la publicacion y dejanos tu Opinion!!</p>
    </a>
  </div>
</section>



            {/* Nueva sección "Redes Sociales" */}
            <section className="redes-sociales">
              <h2>📲 Síguenos en Redes Sociales</h2>
              <p>¡Visítanos en Instagram para más información y actualizaciones!</p>
              <a
                href={redesSociales.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-button"
              >
                🌐 Visítanos en Instagram
              </a>
            </section>

            {/* Botón para elegir ruta */}
           
          </>
        );

      case 'rutas':
        return (
          <div className="page-content">
            <h2 className="rutas-header">Rutas Disponibles</h2>
            <div className="rutas-grid">
              {rutasData.map((ruta) => (
                <div key={ruta.id} className="ruta-item" onClick={() => openPopup(ruta)}>
                  <img src={ruta.img} alt={ruta.name} className="ruta-image" />
                  <p>{ruta.name}</p>
                </div>
              ))}
            </div>

            {/* Popup de información */}
            {selectedRuta && (
              <div className="popup">
                <div className="popup-content">
                  <button className="close-popup" onClick={closePopup}>
                    ✕
                  </button>
                  <h3>{selectedRuta.name}</h3>
                  <img src={selectedRuta.imgPopup} alt={selectedRuta.name} className="popup-image" />
                  <div dangerouslySetInnerHTML={{ __html: selectedRuta.info }}></div>
                  <a href={selectedRuta.link} target="_blank" rel="noopener noreferrer" className="popup-link">
                    Conoce la Ruta 
                  </a>
                </div>
              </div>
            )}

            <button className="back-button" onClick={() => goToPage('home')}>
              Regresar al Inicio
            </button>
          </div>
        );

        case 'sobre':
          return (
            <div className="page-content sobre-nosotros">
              <h2 className="sobre-header">✨ Sobre Nosotros ✨</h2>
              <div className="sobre-container">
                <div className="sobre-text">
                  <p>
                    Somos un grupo de estudiantes apasionados que desarrollamos este proyecto con el objetivo de responder a
                    las necesidades de transporte en nuestra comunidad. Nuestro enfoque es brindar información clara y accesible
                    sobre las rutas de transporte público en San Juan del Río, mejorando así la calidad de vida de los usuarios.
                  </p>
                  <img src="https://i.imgur.com/o46dwxc.jpeg" alt="nosotros" className="nosotros-iamge" />
                  <p>
                    Este proyecto fue desarrollado como parte de un trabajo académico, pero con una visión real de impacto social
                    y tecnológico. Queremos ser una herramienta que conecte a las personas con sus destinos de manera eficiente y confiable.
                  </p>
                  <p>
                    ¡Gracias por visitarnos! Si tienes alguna sugerencia o comentario, no dudes en contactarnos a través de nuestras
                    redes sociales. Juntos podemos mejorar el acceso al transporte en nuestra región.
                  </p>
                </div>
                <img src="https://i.imgur.com/4BuTmsM.jpeg" alt="Qr" className="qr-iamge" />             
              </div>
              <button className="back-button" onClick={() => goToPage('home')}>
                🔙 Regresar al Inicio
              </button>
            </div>
          );
        
        

      default:
        return null;
    }
  };

  return (
    <div className="App">
      {/* Menú de hamburguesa */}
      <div className="burger-menu">
        <button className="menu-button" onClick={toggleMenu}>☰</button>
      </div>

      {/* Menú desplegable */}
      <div className={`menu-content ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleMenu}>✕</button>
        <ul>
          <li><button onClick={() => goToPage('home')}>Inicio</button></li>
          <li><button onClick={() => goToPage('sobre')}>Sobre Nosotros</button></li>
          <li><button onClick={() => goToPage('rutas')}>Rutas</button></li>
        </ul>
      </div>

      {/* Contenido principal según la página seleccionada */}
      {renderPageContent()}

      {/* Footer */}
      <footer>
        <p>ConoceTuRutaSjr © Derechos Reservados</p>
      </footer>
    </div>
  );
}

export default App;
