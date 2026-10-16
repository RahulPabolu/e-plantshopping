import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag, Leaf } from 'lucide-react';
import { decreaseQuantity, increaseQuantity, removeFromCart, selectCartItems, selectCartTotal } from '../features/CartSlice';
import { plantImage } from '../data/plants';

const money = (amount) => `$${amount.toFixed(2)}`;

export default function CartItem({ navigate }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <main className="page-shell cart-page">
      <div className="cart-heading">
        <div><p className="eyebrow">Your leafy picks</p><h1>Shopping <em>cart</em></h1><p>Good things are growing.</p></div>
        <span className="cart-heading-icon"><ShoppingBag size={27} /></span>
      </div>

      {items.length === 0 ? (
        <section className="empty-cart">
          <span className="empty-cart-icon"><Leaf size={34} /></span>
          <h2>Your cart is ready to grow.</h2>
          <p>You haven't added any plants yet. Find a green friend for your space.</p>
          <button className="primary-button" onClick={() => navigate('plants')}>Explore plants <ArrowLeft className="arrow-right" size={17} /></button>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items-list">
            <div className="cart-list-top"><h2>Your plants <span>({items.length} {items.length === 1 ? 'type' : 'types'})</span></h2><button className="text-button" onClick={() => navigate('plants')}>+ Add more plants</button></div>
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={plantImage(item.image)} alt={item.name} />
                <div className="cart-item-info">
                  <p className="cart-item-category">{item.category}</p>
                  <h3>{item.name}</h3>
                  <p className="unit-price">{money(item.price)} <span>/ plant</span></p>
                  <button className="delete-button" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={14} /> Delete</button>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button aria-label={`Decrease ${item.name} quantity`} disabled={item.quantity <= 1} onClick={() => dispatch(decreaseQuantity(item.id))}><Minus size={15} /></button>
                    <span>{item.quantity}</span>
                    <button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}><Plus size={15} /></button>
                  </div>
                  <div className="item-subtotal-label">Item total</div>
                  <strong className="item-subtotal">{money(item.price * item.quantity)}</strong>
                </div>
              </article>
            ))}
          </section>
          <aside className="order-summary">
            <p className="eyebrow">Almost yours</p><h2>Order summary</h2>
            <div className="summary-line"><span>Plants ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span><span>{money(total)}</span></div>
            <div className="summary-line"><span>Delivery</span><span className="free-label">Calculated later</span></div>
            <div className="summary-total"><span>Total</span><strong>{money(total)}</strong></div>
            <button className="checkout-button" onClick={() => window.alert('Coming Soon! Checkout will be available in a future update.')}>Checkout <span>→</span></button>
            <button className="continue-button" onClick={() => navigate('plants')}><ArrowLeft size={16} /> Continue Shopping</button>
            <p className="secure-note"><Leaf size={14} /> A little green goes a long way.</p>
          </aside>
        </div>
      )}
    </main>
  );
}