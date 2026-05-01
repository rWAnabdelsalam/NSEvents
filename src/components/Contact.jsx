import { getWhatsappLink } from '../data/contact.js';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contactInner">
        <h2>Lets Create Magic<br />Together</h2>
        <p>Your extraordinary celebration begins with a conversation. Reach out to our team and let us bring your vision to life.</p>

        <div className="contactActions">
          <a className="button buttonGold" href={getWhatsappLink()} target="_blank" rel="noreferrer">Get In Touch</a>
          <a className="button buttonLight" href="https://pdflink.to/najmatalsafahospitalitymenu/" >View Full Menu</a>
        </div>
      </div>
    </section>
  );
}
