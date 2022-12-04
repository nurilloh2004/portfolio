import { useRef } from 'react';
import Container from '../components/Container';
import Link from '../components/Links/Link';
import LinkArrow from '../components/Links/LinkArrow';

const Navbar = () => {
    const nav = useRef();

    const handleClick = ()=>{
        nav.current.classList.toggle('active');
        document.body.classList.toggle('locked');
    };

  return <nav ref={nav} className="nav">
    <Container>
        <div className="nav__body">
            <a className="nav__logo" href="./">Portfolio Creator<span>.</span></a>
            <div onClick={handleClick} className="burger nav__burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="nav__list">
                <li className="nav__item">
                    <Link className="nav__link">About</Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link">Services</Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link">Projects</Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link">Blog</Link>
                </li>
                <li className="nav__item">
                    <LinkArrow className="nav__link">Book a call</LinkArrow>
                </li>
            </ul>
        </div>
    </Container>
  </nav>
}

export default Navbar;