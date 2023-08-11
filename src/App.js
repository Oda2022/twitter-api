import './App.css';
import './components/urlTweet.css';
import React, {useState, useEffect, useRef} from 'react';
import { Follow, Tweet } from 'react-twitter-widgets';
// import UrlTweet from './components/urlTweet.js';
// import UserName from './components/userName.js';

function App() {

  const [usernameInput, setUsernameInput] = useState("");
  const [input, setInput] = useState("")
  const [data, setData] = useState("")
  const [error, setError] = useState("")
  // const [showResult, setShowResult] = useState(false);
  // const [iframeHeight, setIframeHeight] = useState(0);
  // const embeddedContainerRef = useRef(null);

  // const handleUsernameChange = (e) => {
  //   setUsernameInput(e.target.value);
  // }

  const handleChange = (e) => {
    setInput(e.target.value);
    setError("");
    setUsernameInput(false);
  }


  const handlePublish = () => {
    if (input) {
      const urlParts = input.split("/");
      const lastPart = urlParts[urlParts.length - 1];

      if (lastPart && !isNaN(lastPart)) {
        setData(lastPart);
        setError("");
        setUsernameInput(false);
      } else {
        setUsernameInput(true);
        setError(""); // Limpiar el mensaje de error si había alguno
      }
    }

  };

  // useEffect(() => {
  //   const handleMessageFromIframe = (event) => {
  //     // Asegúrate de que el mensaje provenga del iframe y contiene la información de altura
  //     if (event.origin === 'https://platform.twitter.com/widgets/widget_iframe.2b2d73daf636805223fb11d48f3e94f7.html?origin=http%3A%2F%2Flocalhost%3A3000' && event.data.iframeHeight) {
  //       const receivedHeight = event.data.iframeHeight;
  //       console.log('Mensaje recibido:', receivedHeight); // Agrega este console.log
  //       // Usa la altura recibida para ajustar el tamaño de tu aplicación o cualquier otra acción
  //       // Por ejemplo, puedes ajustar la altura del contenedor:
  //       embeddedContainerRef.current.style.height = `${receivedHeight}px`;
  //     }
  //   };
  
  //   // Agrega el event listener para escuchar los mensajes del iframe
  //   window.addEventListener('message', handleMessageFromIframe);
  
  //   // Limpia el event listener cuando el componente se desmonta
  //   return () => {
  //     window.removeEventListener('message', handleMessageFromIframe);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log('useEffect is running'); 
  //   // Aquí se ejecutará después de que el componente se haya montado en el DOM
  //   const iframe = document.getElementById('twitter-widget-3');

  //   if (iframe) {
  //     // Adjunta un evento 'load' para detectar cuando el iframe se carga completamente
  //     iframe.addEventListener('load', function() {
  //       // Ahora puedes interactuar con el iframe aquí
  //       console.log('iframe loaded');
  //       // Cambia la altura del iframe, por ejemplo:
  //       iframe.style.height = '300px';
  //       console.log('Altura del iframe:', iframe.style.height);
  //     });
  //   }

  //   console.log('useEffect is running');

  //   document.addEventListener('DOMContentLoaded', function() {
  //     const iframe = document.getElementById('twitter-widget-3');
  
  //     if (iframe) {
  //       iframe.style.height = '300px';
  //       console.log('Altura del iframe:', iframe.style.height);
  //     }
  //   });
  // }, []); 
  

  return (
  <div className="App">
    {!data && !usernameInput && (
      <div className="logo">
        <div className="logo-content">
          <div className='Createtweet'>
            <input
              type="text"
              onChange={handleChange}
              value={input}
              placeholder='Username o Post'
            />
            <p className="input-error">{error}</p>
            <button onClick={handlePublish} disabled={!input}>Publicar</button>
          </div>
        </div>
      </div>
    )}

    {usernameInput ? (
      <div className='Widgetfollow'>
        <Follow
          username={input}
          options={{
            size: 'small',
            showCount: true,
          }}
        />
      </div>
    ) : data && (
      <div className='Widgettweet'>
        <Tweet
          tweetId={data}
          options={{
            width: "200",
            conversation: false,
            cards: 'hidden',
          }}
        />
      </div>
    )}
  </div>

  );
}

export default App;


