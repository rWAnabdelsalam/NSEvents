import { testimonials } from '../data/content.js';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="sectionHead">
          <h2>What Our Clients Say</h2>
          <p>The trust our clients place in us is our greatest honor</p>
        </div>

        <div className="testimonialGrid">
          {testimonials.map((item) => (
            <article className="testimonialCard" key={item.name}>
              <p>“{item.quote}”</p>
              <div className="client">
                <span>{item.initial}</span>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.city}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
