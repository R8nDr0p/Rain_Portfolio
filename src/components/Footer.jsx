import { Link } from 'react-scroll'
function Footer() {

  return (
    <footer className="bg-blue-100">
      <div className="container mx-auto">
        <div className="row flex flex-row justify-between">
          <div className="col flex items-center text-3xl">
            <Link to='hero-section' smooth="true" duration={500} className="font-bold cursor-pointer">
              Rain | <span className="font-normal">Portfolio</span>
            </Link>
          </div>
          <div className="col">
            <ul>
              <li>
                <Link to='hero-section' smooth="true" duration={500} className='cursor-pointer hover:text-teal-600'>Home</Link>
              </li>
              <li>
                <Link to='hero-section' smooth="true" duration={500} className='cursor-pointer hover:text-teal-600'>Skills</Link>
              </li>
              <li>
                <Link to='hero-section' smooth="true" duration={500} className='cursor-pointer hover:text-teal-600'>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
