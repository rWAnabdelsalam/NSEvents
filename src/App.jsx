import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Story from './components/Story.jsx';
import Services from './components/Services.jsx';
import Packages from './components/Packages.jsx';
import Portfolio from './components/Portfolio.jsx';
import Featured from './components/Featured.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import SEOJsonLd from './components/SEOJsonLd.jsx';

export default function App() {
  return (
    <>
      <SEOJsonLd />
      <Header />
      <main>
        <Hero />
        <Story />
        <Services />
        <Packages />
        <Portfolio />
        <Featured />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
