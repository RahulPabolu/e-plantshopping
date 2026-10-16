import { Leaf, ShoppingCart, House, Sprout } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../features/CartSlice';

export default function Navbar({ page, navigate }) {
  const count = useSelector(selectCartCount);
  return (
    <header className="navbar">
      <button className="brand" onClick={() => navigate('home')} aria-label="Paradise Nursery home">
        <span className="brand-mark"><Leaf size={23} /></span>
        <span>Paradise<span className="brand-light">Nursery</span></span>
      </button>
      <nav className="nav-links" aria-label="Main navigation">
        <button className={page === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => navigate('home')}><House size={16} /> Home</button>
        <button className={page === 'plants' ? 'nav-link active' : 'nav-link'} onClick={() => navigate('plants')}><Sprout size={16} /> Plants</button>
        <button className={page === 'cart' ? 'nav-link active' : 'nav-link'} onClick={() => navigate('cart')}><ShoppingCart size={17} /> Cart <span className="cart-badge">{count}</span></button>
      </nav>
    </header>
  );
}