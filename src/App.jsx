import { ArrowRight, Leaf, Sun, Droplets, Heart } from 'lucide-react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

export default function App() {
  const [page, setPage] = useState('home');
  const navigate = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar page={page} navigate={navigate} />
      {page === 'home' && (
        <main>
          <section className="hero">
            <div className="hero-shade" />
            <div className="hero-content">
              <div className="hero-kicker"><span /> YOUR HOME, A LITTLE GREENER</div>
              <h1>Make room for<br /><em>something</em> growing.</h1>
              <p>Bring home beautiful houseplants and create your own everyday escape. A happier space starts with a little green.</p>
              <button className="primary-button" onClick={() => navigate('plants')}>Get Started <ArrowRight size={18} /></button>
              <div className="hero-note"><Leaf size={16} /> Find your perfect plant companion</div>
            </div>
            <div className="hero-side-note">GROW SLOW. LIVE WELL.</div>
          </section>
          <section className="benefit-strip">
            <div><span><Leaf size={20} /></span><div><strong>Curated greenery</strong><p>Plants for every kind of space</p></div></div>
            <div><span><Sun size={20} /></span><div><strong>Helpful plant details</strong><p>Find the right fit for your home</p></div></div>
            <div><span><Droplets size={20} /></span><div><strong>Care made approachable</strong><p>Make growing part of your routine</p></div></div>
            <div><span><Heart size={20} /></span><div><strong>Chosen with care</strong><p>Little joys, leaf by leaf</p></div></div>
          </section>
          <AboutUs />
          <section className="home-cta"><p className="eyebrow">Your green story starts here</p><h2>There's always room for one more plant.</h2><button className="primary-button" onClick={() => navigate('plants')}>Explore the collection <ArrowRight size={17} /></button></section>
        </main>
      )}
      {page === 'plants' && <ProductList />}
      {page === 'cart' && <CartItem navigate={navigate} />}
      <footer className="site-footer"><button className="footer-brand" onClick={() => navigate('home')}><Leaf size={18} /> Paradise Nursery</button><span>Bring nature home, one leaf at a time.</span><span>© {new Date().getFullYear()} Paradise Nursery</span></footer>
    </div>
  );
}