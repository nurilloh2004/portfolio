import Container from "../components/Container";
import LinkFilled from "../components/Links/LinkFilled";
import LinkArrow from '../components/Links/LinkArrow';


const Intro = () => {
  return <section className="intro">
    <Container> 
        <div className="intro__body">
            <div className="intro__content">
                <h1 className="title title--black intro__title"><span>I design products </span>that delight and inspire people.</h1>
                <p className="intro__text">Hi! I'm Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.</p>
                <div className="intro__buttons">
                    <LinkFilled className="intro__link">Book a call</LinkFilled>
                    <LinkArrow color="black" className="intro__link">Download CV</LinkArrow>
                </div>
            </div>
            <div className="intro__img-container">
                <picture>
                    <source srcSet='./assets/images/intro/intro@w250.webp 250w, ./assets/images/intro/intro@w366.webp 366w, ./assets/images/intro/intro@w466.webp 466w, ./assets/images/intro/intro@w500.webp 500w' sizes="(max-width: 576px) 86vw,(max-width: 768px) 52vw, 35vw" />
                    <source srcSet='./assets/images/intro/intro@w250.png 250w, ./assets/images/intro/intro@w366.png 366w, ./assets/images/intro/intro@w466.png 466w, ./assets/images/intro/intro@w500.png 500w' sizes="(max-width: 576px) 86vw,(max-width: 768px) 52vw, 35vw" />
                    <img className="intro__img" src="./assets/images/intro/intro@w500.png" alt="my_photo" />
                </picture>
            </div>
        </div>
    </Container>
  </section>
}

export default Intro;