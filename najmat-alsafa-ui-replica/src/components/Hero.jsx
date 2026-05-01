import { getWhatsappLink } from '../data/contact.js';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container heroInner">
        <p className="eyebrow">Luxury Hospitality & Catering</p>
        <h1>Exquisite Moments,<br />Unforgettable Celebrations</h1>
        <p className="heroText">Elevating your most precious occasions with refined elegance and impeccable service</p>
        <a className="button buttonGold" href={getWhatsappLink('Hello Najmat AlSafa, I would like to book a luxury hospitality service.')} target="_blank" rel="noreferrer">Book Now!</a>
      </div>
    </section>
  );
}
