import { useEffect, useState } from 'react';
import { gallerySets } from '../data/content.js';

export default function Portfolio() {
    const [setIndex, setSetIndex] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);

    function nextSet() {
        setIsFadingOut(true);

        setTimeout(() => {
            setSetIndex((prev) => (prev + 1) % gallerySets.length);
            setIsFadingOut(false);
        }, 300); // duration of fade out
    }

    function prevSet() {
        setIsFadingOut(true);

        setTimeout(() => {
            setSetIndex((prev) =>
                prev === 0 ? gallerySets.length - 1 : prev - 1
            );
            setIsFadingOut(false);
        }, 300);
    }

    useEffect(() => {
        const timer = setInterval(nextSet, 5000);
        return () => clearInterval(timer);
    }, []);

    const current = gallerySets[setIndex] || [];

    return (
        <section className="section portfolio">
            <div className="container">
                <div className="sectionHead">

                    <h2>Our Creations</h2>
                    <p>Woven into the fabric of your most beautiful days. Explore our journey of bringing gold-standard hospitality to the heart of your celebrations.</p>
                </div>

                <div className="galleryWrapper">
                    <button className="galleryArrow left" onClick={prevSet}>‹</button>

                    <div className={`galleryLayout ${isFadingOut ? 'fadeOut' : ''}`} key={setIndex}>
                        <div className="galleryBig galleryReveal item1">
                            <img src={current[0]} alt="" />
                        </div>

                        <div className="gallerySmall">
                            {current.slice(1, 5).map((img, index) => (
                                <div
                                    className={`galleryItem galleryReveal item${index + 2}`}
                                    key={img}
                                >
                                    <img src={img} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="galleryArrow right" onClick={nextSet}>›</button>
                </div>
            </div>
        </section>
    );
}