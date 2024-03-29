import React from 'react';
import './Header.css';
import facebook from '../../images/messengers/facebook-cat-tail-svgrepo-com.svg';
import instagram from '../../images/messengers/instagram-cat-tail-svgrepo-com.svg';
import whatsApp from '../../images/messengers/chat-message-cat-svgrepo-com.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <address>
        <ul className="social-media-links">
          <li>
            <a
              href="https://wa.me/qr/MMWAREFAW4N4O1"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="social-media-link-image"
                src={whatsApp}
                alt="WhatsApp"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/m.sha.aa"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="social-media-link-image"
                src={instagram}
                alt="Instagram"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/mariiareznik"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="social-media-link-image"
                src={facebook}
                alt="Facebook"
              />
            </a>
          </li>
        </ul>
      </address>
      <Navigation />
    </header>
  );
}

export default Header;
