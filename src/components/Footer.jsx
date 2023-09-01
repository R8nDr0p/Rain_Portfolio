function Footer() {
  return (
    <footer className="bg-blue-100">
      <div className="container mx-auto">
        <div className="row flex flex-row justify-between">
          <div className="col flex items-center text-3xl">
            <h1 className="font-bold">
              Rain | <span className="font-normal">Portfolio</span>
            </h1>
          </div>
          <div className="col">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#skills-section">Skills</a>
              </li>
              <li>
                <a href="#projects-section">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
