import { useEffect, useState } from 'react';
import { packages } from '../data/content.js';
import { getWhatsappLink } from '../data/contact.js';

export default function Packages() {
  const [activePackage, setActivePackage] = useState(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') setActivePackage(null);
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section id="packages" className="section packages">
      <div className="container">
        <div className="sectionHead">
          <p className="eyebrow">Our Packages</p>
          <h2>Curated Experiences</h2>
          <p>Discover our thoughtfully designed packages for every celebration</p>
        </div>

        <p className="scrollLabel">← Scroll Horizontally →</p>

        <div className="packageScroller" aria-label="Scrollable package cards">
          {packages.map((item) => (
            <button className="packageCard" type="button" key={item.title} onClick={() => setActivePackage(item)}>
              <span className="packageTitle">{item.title}</span>
              <span className="packageSubtitle">{item.subtitle}</span>
              <span className="packageGuests">{item.guests}</span>
              <span className="packagePrice">{item.price}</span>
                {item.badge && item.badge.trim() !== '' && (
                    <span className="packageBadge">{item.badge}</span>
                )}
            </button>
          ))}
        </div>
      </div>

      {activePackage && (
        <div className="modalOverlay" onClick={() => setActivePackage(null)}>
          <article className="modalCard packageModalCard" role="dialog" aria-modal="true" aria-label={`${activePackage.title} details`} onClick={(event) => event.stopPropagation()}>
            <button className="modalClose" type="button" onClick={() => setActivePackage(null)} aria-label="Close package modal">×</button>

            <p className="eyebrow">Curated Experience</p>
            <h3>{activePackage.title}</h3>
            <p className="modalSub">{activePackage.subtitle} {activePackage.guests}</p>
            <strong className="modalPrice">{activePackage.price}</strong>

            <div className="modalDivider" />

            <ul>
              {activePackage.items.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <a
              className="button buttonGold"
              href={getWhatsappLink(`Hello Najmat AlSafa, I would like to inquire about ${activePackage.title} - ${activePackage.price}.`)}
              target="_blank"
              rel="noreferrer"
            >
              Inquire Now →
            </a>
          </article>
        </div>
      )}
    </section>
  );
}
