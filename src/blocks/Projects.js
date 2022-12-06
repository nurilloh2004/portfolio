import { Splide, SplideSlide } from "@splidejs/react-splide";
import Container from "../components/Container";
import LinkArrow from "../components/Links/LinkArrow";

const Projects = () => {
  let marginProperty =
    window.innerWidth - 1245 > 0 ? window.innerWidth - 1245 : 15;
  return (
    <section className="projects">
      <Container>
        <div className="projects__body">
          <header className="projects__header grid--2x">
            <div>
              <p className="uptitle uptitle--purple projects__uptitle">
                PROJECTS
              </p>
              <h2 className="title title--black projects__title">
                I bring results.
                <br /> My clients are proof.
              </h2>
            </div>
            <a
              href="./"
              className="link link--filled projects__link grid--2x__right"
            >
              View all projects
            </a>
          </header>
          <div style={{ marginRight: -marginProperty }}>
            <Splide
              options={{
                perPage: 1,
                padding: { right: "20vw" },
                gap: 25,
                arrows: false,
                pagination: false,
                drag: true,
                mediaQuery: "min",
                breakpoints: {
                  1600: {
                    perPage: 3,
                  },
                  992: {
                    perPage: 2,
                  },
                },
              }}
              className="projects__slider"
            >
              <SplideSlide className="projects__slide">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="./assets/images/projects/projects-1/projects-1@w250.webp 250w, ./assets/images/projects/projects-1/projects-1@w486.webp 486w"
                    sizes="(min-width: 1600px) 25vw, (min-width: 992px) 37.7vw , 78vw"
                  />
                  <source
                    type="image/jpg"
                    srcSet="./assets/images/projects/projects-1/projects-1@w250.jpg 250w, ./assets/images/projects/projects-1/projects-1@w486.jpg 486w"
                    sizes="(min-width: 1600px) 25vw, (min-width: 992px) 37.7vw , 78vw"
                  />
                  <img
                    className="projects__slide-img"
                    src="./assets/images/projects/projects-1/projects-1@w486.jpg"
                    alt="smooth background"
                  />
                </picture>
                <div className="projects__slide-content">
                  <span className="uptitle uptitle--small uptitle--blue projects__slide-uptitle">
                    Branding
                  </span>
                  <h5 className="title title--black projects__slide-title">
                    Soulful Rebrand
                  </h5>
                  <LinkArrow className="projects__slide-link" color="black">
                    View Project
                  </LinkArrow>
                </div>
              </SplideSlide>
              <SplideSlide className="projects__slide">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="./assets/images/projects/projects-2/projects-2@w250.webp 250w, ./assets/images/projects/projects-2/projects-2@w486.webp 486w"
                    sizes="(min-width: 1600px) 25vw, (min-width: 992px) 37.7vw , 78vw"
                  />
                  <source
                    type="image/jpg"
                    srcSet="./assets/images/projects/projects-2/projects-2@w250.jpg 250w, ./assets/images/projects/projects-2/projects-2@w486.jpg 486w"
                    sizes="(min-width: 1600px) 25vw, (min-width: 992px) 37.7vw , 78vw"
                  />
                  <img
                    className="projects__slide-img"
                    src="./assets/images/projects/projects-2/projects-2@w486.jpg"
                    alt="smooth background"
                  />
                </picture>
                <div className="projects__slide-content">
                  <span className="uptitle uptitle--small uptitle--blue projects__slide-uptitle">
                    Product Design
                  </span>
                  <h5 className="title title--black projects__slide-title">
                    Datadash Product design
                  </h5>
                  <LinkArrow className="projects__slide-link" color="black">
                    View Project
                  </LinkArrow>
                </div>
              </SplideSlide>
              <SplideSlide className="projects__slide">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="./assets/images/projects/projects-1/projects-1@w250.webp 250w, ./assets/images/projects/projects-1/projects-1@w486.webp 486w"
                    sizes="(min-width: 1600px) 25vw, (min-width: 992px) 37.7vw , 78vw"
                  />
                  <source
                    type="image/jpg"
                    srcSet="./assets/images/projects/projects-1/projects-1@w250.jpg 250w, ./assets/images/projects/projects-1/projects-1@w486.jpg 486w"
                    sizes="(min-width: 1600px) 25vw, (min-width: 992px) 37.7vw , 78vw"
                  />
                  <img
                    className="projects__slide-img"
                    src="./assets/images/projects/projects-1/projects-1@w486.jpg"
                    alt="smooth background"
                  />
                </picture>
                <div className="projects__slide-content">
                  <span className="uptitle uptitle--small uptitle--blue projects__slide-uptitle">
                    Web Design
                  </span>
                  <h5 className="title title--black projects__slide-title">
                    Maize Website Design
                  </h5>
                  <LinkArrow className="projects__slide-link" color="black">
                    View Project
                  </LinkArrow>
                </div>
              </SplideSlide>
              <SplideSlide className="projects__slide">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="./assets/images/projects/projects-2/projects-2@w250.webp 250w, ./assets/images/projects/projects-2/projects-2@w486.webp 486w"
                    sizes="(min-width: 1600px) 25vw, (min-width: 992px) 37.7vw , 78vw"
                  />
                  <source
                    type="image/jpg"
                    srcSet="./assets/images/projects/projects-2/projects-2@w250.jpg 250w, ./assets/images/projects/projects-2/projects-2@w486.jpg 486w"
                    sizes="(min-width: 1600px) 25vw, (min-width: 992px) 37.7vw , 78vw"
                  />
                  <img
                    className="projects__slide-img"
                    src="./assets/images/projects/projects-2/projects-2@w486.jpg"
                    alt="smooth background"
                  />
                </picture>
                <div className="projects__slide-content">
                  <span className="uptitle uptitle--small uptitle--blue projects__slide-uptitle">
                    Branding
                  </span>
                  <h5 className="title title--black projects__slide-title">
                    Soulful Rebrand
                  </h5>
                  <LinkArrow className="projects__slide-link" color="black">
                    View Project
                  </LinkArrow>
                </div>
              </SplideSlide>
              <SplideSlide className="projects__slide">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="./assets/images/projects/projects-1/projects-1@w250.webp 250w, ./assets/images/projects/projects-1/projects-1@w486.webp 486w"
                    sizes="(min-width: 1600px) 25vw, (min-width: 992px) 37.7vw , 78vw"
                  />
                  <source
                    type="image/jpg"
                    srcSet="./assets/images/projects/projects-1/projects-1@w250.jpg 250w, ./assets/images/projects/projects-1/projects-1@w486.jpg 486w"
                    sizes="(min-width: 1600px) 25vw, (min-width: 992px) 37.7vw , 78vw"
                  />
                  <img
                    className="projects__slide-img"
                    src="./assets/images/projects/projects-1/projects-1@w486.jpg"
                    alt="smooth background"
                  />
                </picture>
                <div className="projects__slide-content">
                  <span className="uptitle uptitle--small uptitle--blue projects__slide-uptitle">
                    Product Design
                  </span>
                  <h5 className="title title--black projects__slide-title">
                    Datadash Product design
                  </h5>
                  <LinkArrow className="projects__slide-link" color="black">
                    View Project
                  </LinkArrow>
                </div>
              </SplideSlide>
              <SplideSlide className="projects__slide">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="./assets/images/projects/projects-2/projects-2@w250.webp 250w, ./assets/images/projects/projects-2/projects-2@w486.webp 486w"
                    sizes="(min-width: 1600px) 25vw, (min-width: 992px) 37.7vw , 78vw"
                  />
                  <source
                    type="image/jpg"
                    srcSet="./assets/images/projects/projects-2/projects-2@w250.jpg 250w, ./assets/images/projects/projects-2/projects-2@w486.jpg 486w"
                    sizes="(min-width: 1600px) 25vw, (min-width: 992px) 37.7vw , 78vw"
                  />
                  <img
                    className="projects__slide-img"
                    src="./assets/images/projects/projects-2/projects-2@w486.jpg"
                    alt="smooth background"
                  />
                </picture>
                <div className="projects__slide-content">
                  <span className="uptitle uptitle--small uptitle--blue projects__slide-uptitle">
                    Web Design
                  </span>
                  <h5 className="title title--black projects__slide-title">
                    Maize Website Design
                  </h5>
                  <LinkArrow className="projects__slide-link" color="black">
                    View Project
                  </LinkArrow>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
