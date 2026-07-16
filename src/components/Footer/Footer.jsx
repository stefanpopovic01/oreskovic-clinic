import './Footer.css';

import logo from '../../assets/logo-white.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-column footer-brand">
          <img src={logo} alt="Orešković Clinic" className="footer-logo" />
          <p className="footer-tagline">
            Rehabilitacija, oporavak i estetski tretmani u Zagrebu i Opatiji.
          </p>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Naše klinike</h4>
          <ul className="footer-list">
            <li>
              <a href="https://maps.app.goo.gl/8xQLi5Tjn6EMm8qT6" target="_blank" rel="noreferrer">
                Radnička cesta 32, 10000, Zagreb
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/Nk5RY9Esyxzdesuv9" target="_blank" rel="noreferrer">
                Ulica Maršala Tita 166, Opatija
              </a>
              <span className="footer-sublist-note">(Trgovački centar Slatina, 4. kat)</span>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Navigacija</h4>
          <ul className="footer-list">
            <li><a href="/o-klinici">O klinici</a></li>
            <li><a href="/tretmani">Tretmani</a></li>
            <li><a href="/cjenik">Cjenik</a></li>
            <li><a href="/rezultati">Rezultati</a></li>
            <li><a href="/rezervacija">Rezervacija termina</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Kontakt</h4>
          <ul className="footer-list">
            <li><a href="tel:+385953702034">+385 95 3702 034</a></li>
            <li><a href="mailto:hbc.zagreb@gmail.com">hbc.zagreb@gmail.com</a></li>
          </ul>

          <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Vaš email" className="footer-newsletter-input" required />
            <button type="submit" className="footer-newsletter-submit">
              Prijavi se
            </button>
          </form>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="footer-copyright">© {year} Orešković Clinic. Sva prava pridržana.</p>

        <div className="footer-legal">
          <a href="/politika-privatnosti">Politika privatnosti</a>
          <a href="/uvjeti-koristenja">Uvjeti korištenja</a>
          <button type="button" className="footer-cookie-button">
            Postavke kolačića
          </button>
        </div>

        <p className="footer-credit">Izrada sajta: SP</p>
      </div>
    </footer>
  );
}