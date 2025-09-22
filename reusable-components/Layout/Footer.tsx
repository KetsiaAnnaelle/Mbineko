const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold text-white">MBINEKO</h3>
          <p className="mt-4 text-sm">
            © {new Date().getFullYear()} MBINEKO. Tous droits réservés.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Navigation</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#features" className="hover:text-white">Fonctionnalités</a></li>
            <li><a href="#impacts" className="hover:text-white">Impacts</a></li>
            <li><a href="#team" className="hover:text-white">Équipe</a></li>
            <li><a href="#about" className="hover:text-white">À propos</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <p className="mt-4">Orange Digital Center, Douala</p>
          <p>+237 696543242</p>
          <p>mbineko@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
