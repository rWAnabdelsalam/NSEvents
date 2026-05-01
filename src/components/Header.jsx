const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Testimonials', '#testimonials'],
  ['Contact', '#contact']
];

export default function Header() {
  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Najmat AlSafa home">
       <img className="brandStar" src="/assets/Logo_1.svg" alt="Najmat AlSafa" />
        <span>Najmat AlSafa Events</span>
      </a>

      <nav className="nav" aria-label="Main navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
