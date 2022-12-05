import Container from "../components/Container";


const Sponsors = () => {
  return <section className="sponsors">
    <Container>
        <div className="sponsors__body">
            <header className="sponsors__header">
                <p>Trusted by</p>
            </header>
            <div className="sponsors__content">
                <img src="./assets/images/sponsors/sponsor-1.png" alt="" />
                <img src="./assets/images/sponsors/sponsor-2.png" alt="" />
                <img src="./assets/images/sponsors/sponsor-3.png" alt="" />
                <img src="./assets/images/sponsors/sponsor-4.png" alt="" />
            </div>
        </div>
    </Container>
  </section>
}

export default Sponsors;