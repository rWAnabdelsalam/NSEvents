import { services } from '../data/content.js';
import sweetsIcon from '../../public/assets/Icons/sweets.svg'
import drinksIcon from '../../public/assets/Icons/Drinks.svg'
import cartIcon from '../../public/assets/Icons/cart.svg'
import perfumeIcon from '../../public/assets/Icons/Perfumes.svg'
import abayaIcon from '../../public/assets/Icons/abayas.svg'
import photoIcon from '../../public/assets/Icons/photobooth.svg'

const icons = {
    Sweets: sweetsIcon,
    Drinks: drinksIcon,
    'Servicing Carts': cartIcon,
    Perfumes: perfumeIcon,
    Abayas: abayaIcon,
    'Photo Booth': photoIcon
};

export default function Services() {
    return (
        <section id="services" className="section services">
            <div className="container">
                <div className="sectionHead">
                    <h2>Our Services</h2>
                    <p>Comprehensive luxury hospitality solutions tailored to your unique vision</p>
                </div>

                <div className="servicesGrid">
                    {services.map((service) => (
                        <article className="serviceCard" key={service.title}>
                            <div className="iconBox">
                                <img src={icons[service.title]} alt={service.title} />
                            </div>

                            <h3>{service.title}</h3>
                            <p>{service.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}