import { useState } from 'react';
import { getWhatsappLink } from '../data/contact.js';
import { featuredCards } from '../data/content.js';

export default function Featured() {
    const [cardIndex, setCardIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState(null);

    const visibleCount = 4;

    const visibleCards = Array.from({ length: visibleCount }, (_, index) => {
        return featuredCards[(cardIndex + index) % featuredCards.length];
    });

    const nextCard = featuredCards[(cardIndex + visibleCount) % featuredCards.length];

    const prevCard =
        featuredCards[
            cardIndex === 0 ? featuredCards.length - 1 : cardIndex - 1
            ];

    function nextCards() {
        if (slideDirection) return;

        setSlideDirection('next');

        setTimeout(() => {
            setCardIndex((prev) => (prev + 1) % featuredCards.length);
            setSlideDirection(null);
        }, 550);
    }

    function prevCards() {
        if (slideDirection) return;

        setSlideDirection('prev');

        setTimeout(() => {
            setCardIndex((prev) =>
                prev === 0 ? featuredCards.length - 1 : prev - 1
            );
            setSlideDirection(null);
        }, 550);
    }

    const carouselCards =
        slideDirection === 'prev'
            ? [prevCard, ...visibleCards]
            : [...visibleCards, nextCard];

    return (
        <section className="section featured">
            <div className="container">
                <div className="sectionHead">
                    <p className="eyebrow">Signature Experiences</p>
                    <h2>Featured Offerings</h2>
                    <p>Discover our most sought after luxury hospitality packages</p>
                </div>

                <div className="featureGrid">
                    <div className="featureImage">
                        <img src="/assets/luxurywedding.png" alt="Royal Wedding Hospitality" />
                    </div>

                    <article className="featureCopy">
                        <h3>Royal Wedding Hospitality</h3>
                        <p>
                            The ultimate celebration deserves the ultimate experience. Our Royal
                            Wedding Package encompasses every element of your dream day.
                        </p>
                        <ul>
                            <li>Custom Menu</li>
                            <li>Perfumes Bar</li>
                            <li>Servicing Cart</li>
                            <li>Full Professional Servicing Team</li>
                        </ul>
                        <a
                            href={getWhatsappLink(
                                'Hello Najmat AlSafa, I would like to inquire about Royal Wedding Hospitality.'
                            )}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Inquire Now →
                        </a>
                    </article>

                    <article className="featureCopy">
                        <h3>
                            Majlis
                            <br />
                            Gatherings
                        </h3>
                        <p>
                            Honor tradition with contemporary elegance. Our Majlis service brings
                            authentic Emirati hospitality to your gatherings.
                        </p>
                        <ul>
                            <li>Traditional Sweets: luqimat, falooda, and more</li>
                            <li>Refreshing and Hot Drinks</li>
                            <li>Professional Service Staff</li>
                            <li>Oud and Incense Service</li>
                        </ul>
                        <a
                            href={getWhatsappLink(
                                'Hello Najmat AlSafa, I would like to inquire about Majlis Gatherings.'
                            )}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Inquire Now →
                        </a>
                    </article>

                    <div className="featureImage">
                        <img src="/assets/Men.png" alt="Majlis Hospitality" />
                    </div>
                </div>

                <div className="luxuryCardsBlock">
                    <div className="luxuryCardsHeader">
                        <div>
                            <p className="eyebrow">Elevated Additions</p>
                            <h3>Curated Luxury Details</h3>
                        </div>

                        <div className="luxuryCardArrows">
                            <button type="button" onClick={prevCards} aria-label="Previous card">
                                ‹
                            </button>
                            <button type="button" onClick={nextCards} aria-label="Next card">
                                ›
                            </button>
                        </div>
                    </div>

                    <div className="luxuryCardsViewport">
                        <div
                            className={`luxuryCardsTrack ${
                                slideDirection === 'next'
                                    ? 'slideNext'
                                    : slideDirection === 'prev'
                                        ? 'slidePrev'
                                        : ''
                            }`}
                        >
                            {carouselCards.map((card, index) => (
                                <article className="luxuryMiniCard" key={`${card.title}-${index}`}>
                                    <div className="luxuryMiniImage">
                                        <img src={card.image} alt={card.title} loading="lazy" />
                                    </div>

                                    <div className="luxuryMiniBody">
                                        <h4>{card.title}</h4>
                                        <p>{card.subtitle}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}