
import Container from '../components/Container';
import LinkArrow from '../components/Links/LinkArrow';

const Blogs = () => {
  return <section className="blogs">
    <Container>
        <div className='blogs__body grid--2x'>
            <header className='blogs__header'>
                <span className='uptitle uptitle--orange blogs__uptitle'>Blogs</span>
                <h2 className='title title--white blogs__title'>Latest Blogs</h2>
                <LinkArrow className="blogs__header-link" color="white">View all</LinkArrow>
            </header>
            <div className='blogs__carts grid--2x__right'>
                <article className='blogs__cart'>
                    <p className='blogs__cart-uptitle'>
                        April 16, 2021 6 <span>.</span>mins
                    </p>
                    <h4 className='blogs__cart-title'>Design tips for designers, that cover everything you need</h4>
                    <LinkArrow className="blogs__cart-link" color="white">Read the article</LinkArrow>
                </article>
                <article className='blogs__cart'>
                    <p className='blogs__cart-uptitle'>
                        April 16, 2021 6 <span>.</span>mins
                    </p>
                    <h4 className='blogs__cart-title'>Design tips for designers, that cover everything you need</h4>
                    <LinkArrow className="blogs__cart-link" color="white">Read the article</LinkArrow>
                </article>
                <article className='blogs__cart'>
                    <p className='blogs__cart-uptitle'>
                        April 16, 2021 6 <span>.</span>mins
                    </p>
                    <h4 className='blogs__cart-title'>Design tips for designers, that cover everything you need</h4>
                    <LinkArrow className="blogs__cart-link" color="white">Read the article</LinkArrow>
                </article>
                <article className='blogs__cart'>
                    <p className='blogs__cart-uptitle'>
                        April 16, 2021 6 <span>.</span>mins
                    </p>
                    <h4 className='blogs__cart-title'>Design tips for designers, that cover everything you need</h4>
                    <LinkArrow className="blogs__cart-link" color="white">Read the article</LinkArrow>
                </article>
            </div>
        </div>
    </Container>
  </section>
}

export default Blogs;