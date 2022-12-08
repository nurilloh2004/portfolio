
import Container from '../components/Container';

const Product = () => {
  return <section className="product">
    <Container>
        <div className="product__body">
            <header className="product__header grid--2x">
                <div>
                    <span className="uptitle uptitle--pink product__uptitle">Product Designer</span>
                    <h2 className="title title--black product__title">That's me!</h2>
                </div>
                <p className="product__text grid--2x__right">Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow.</p>
            </header>
            <div className="product__gallery">
                <picture>
                    <source type="image/webp" srcSet="./assets/images/product/product-1/product-1@w1014.webp 1014w, ./assets/images/product/product-1/product-1@w961.webp 961w, ./assets/images/product/product-1/product-1@w775.webp 775w, ./assets/images/product/product-1/product-1@w542.webp 542w" sizes="(max-width: 768px) 47vw, 24vw" />
                    <source type="image/jpg" srcSet="./assets/images/product/product-1/product-1@w1014.jpg 1014w, ./assets/images/product/product-1/product-1@w961.jpg 961w, ./assets/images/product/product-1/product-1@w775.jpg 775w, ./assets/images/product/product-1/product-1@w542.jpg 542w" sizes="(max-width: 768px) 47vw, 24vw" />
                    <img className="product__img" src="./assets/images/product/product-1/product-1@w1014.jpg" alt="product-1" />
                </picture>
                <picture>
                    <source type="image/webp" srcSet="./assets/images/product/product-2/product-2@w1521.webp 1521w, ./assets/images/product/product-2/product-2@w1457.webp 1457w, ./assets/images/product/product-2/product-2@w1273.webp 1273w, ./assets/images/product/product-2/product-2@w1027.webp 1027w, ./assets/images/product/product-2/product-2@w694.webp 694w" sizes="(max-width: 768px) 47vw,35vw" />
                    <source type="image/jpg" srcSet="./assets/images/product/product-2/product-2@w1521.jpg 1521w, ./assets/images/product/product-2/product-2@w1457.jpg 1457w, ./assets/images/product/product-2/product-2@w1273.jpg 1273w, ./assets/images/product/product-2/product-2@w1027.jpg 1027w, ./assets/images/product/product-2/product-2@w694.jpg 694w" sizes="(max-width: 768px) 47vw,35vw" />
                    <img className="product__img" src="./assets/images/product/product-2/product-2@w1521.jpg" alt="product-2" />
                </picture>
                <picture>
                    <source type="image/webp" srcSet="./assets/images/product/product-3/product-3@w1014.webp 1014w, ./assets/images/product/product-3/product-3@w828.webp 828w, ./assets/images/product/product-3/product-3@w550.webp 550w" sizes="(max-width: 768px) 47vw, 24vw" />
                    <source type="image/jpg" srcSet="./assets/images/product/product-3/product-3@w1014.jpg 1014w, ./assets/images/product/product-3/product-3@w828.jpg 828w, ./assets/images/product/product-3/product-3@w550.jpg 550w" sizes="(max-width: 768px) 47vw, 24vw" />
                    <img className="product__img" src="./assets/images/product/product-3/product-3@w1014.jpg" alt="product-3" />
                </picture>
                <picture>
                    <source type="image/webp" srcSet="./assets/images/product/product-4/product-4@w1000.webp 1000w, ./assets/images/product/product-4/product-4@w835.webp 835w, ./assets/images/product/product-4/product-4@w562.webp 562w" sizes="(max-width: 768px) 47vw, 24vw" />
                    <source type="image/jpg" srcSet="./assets/images/product/product-4/product-4@w1000.jpg 1000w, ./assets/images/product/product-4/product-4@w835.jpg 835w, ./assets/images/product/product-4/product-4@w562.jpg 562w" sizes="(max-width: 768px) 47vw, 24vw" />
                    <img className="product__img" src="./assets/images/product/product-4/product-4@w1000.jpg" alt="product-4" />
                </picture>
            </div>
        </div>
    </Container>
  </section>
}

export default Product;