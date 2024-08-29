import { React, useEffect, useState} from 'react';
import './App.css';



const generateRandomPhrase = () => {
    const adjectives = ['Cosmic', 'Whimsical', 'Zesty', 'Enigmatic', 'Quirky', 'Luminous', 'Serendipitous', 'Vibrant', 'Ethereal', 'Jubilant'];
    const nouns = ['Panda', 'Teapot', 'Nebula', 'Cactus', 'Umbrella', 'Balloon', 'Kazoo', 'Firefly', 'Banjo', 'Cupcake'];
    return `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`;
  };

const WebsiteList = () => {
    const [websites, setWebsites] = useState([
        { url: 'https://catsoftheweb.com', name: '' },
        { url: 'https://us500.com/fortune-500-companies', name: '' },
        { url: 'https://www.researchtools.site', name: '' },
        { url: 'https://how-many-weeks.com/#/', name: '' },
        { url: 'https://www.liveatc.net/topfeeds.php#google_vignette', name: '' },
        { url: 'https://www.blitzortung.org/en/live_lightning_maps.php?map=13', name: '' },
        { url: 'https://showclicker.com', name: '' },
        { url: 'https://climatereanalyzer.org/clim/sst_daily/', name: '' },
        { url: 'https://flagmatch.com/quiz/world-countries-and-their-capitals', name: '' },
        { url: 'https://littleberg.com/', name: '' },
        { url: 'https://www.shell.how/', name: '' },
        { url: 'https://www.thereisnoweb.site', name: '' },
      ]);
    
    useEffect(() => {
        setWebsites(websites.map(site => ({ ...site, name: generateRandomPhrase() })));
    }, []);

  return (
    <>
    <h1 style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '15vh',
      fontFamily: 'CustomFont, sans-serif',
    }} className="title">Random Internet</h1>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60vh',
      fontFamily: 'CustomFont, sans-serif',
    }}>
      <ul style={{
        listStyleType: 'none',
        padding: 0,
        textAlign: 'center',
      }}>
        {websites.map((site, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            <a 
              href={site.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#0077cc',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              {site.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <footer style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '15vh',
      fontFamily: 'CustomFont, sans-serif',
      fontSize: '10px'
    }} className="footer">
        <p>Send me $1 to help me host this website: <a href="https://paypal.me/diegogplatac?country.x=MX&locale.x=es_XC" target="_blank" rel="noopener noreferrer">Donate via PayPal</a></p>
    </footer>
    </>
  );
};

export default WebsiteList;