import { useSelector, useDispatch } from 'react-redux';
import { Check, ShoppingBag } from 'lucide-react';
import { plantCategories, plantImage } from '../data/plants';
import { addToCart, selectCartItems } from '../features/CartSlice';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addedIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="page-shell product-page">
      <section className="page-intro">
        <p className="eyebrow">Find your new favorite</p>
        <h1>Plants for every <em>corner</em>.</h1>
        <p>From easy-care companions to lush tropical statements, discover a little green happiness for your home.</p>
      </section>
      <div className="category-tabs">
        {plantCategories.map((category) => <a key={category.id} href={`#${category.id}`}>{category.name}</a>)}
      </div>
      {plantCategories.map((category) => (
        <section className="plant-category" id={category.id} key={category.id}>
          <div className="category-heading">
            <div><p className="eyebrow">The collection</p><h2>{category.name}</h2></div>
            <p>{category.intro}</p>
          </div>
          <div className="plant-grid">
            {category.plants.map((plant) => {
              const added = addedIds.has(plant.id);
              return (
                <article className="plant-card" key={plant.id}>
                  <div className="plant-image-wrap">
                    <img src={plantImage(plant.image)} alt={plant.name} loading="lazy" />
                    <span className="plant-tag">{category.name.split(' ')[0]}</span>
                  </div>
                  <div className="plant-card-content">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <div className="plant-card-footer">
                      <strong>${plant.price.toFixed(2)}</strong>
                      <button className={added ? 'add-button added' : 'add-button'} disabled={added} onClick={() => dispatch(addToCart({ ...plant, category: category.name }))}>
                        {added ? <><Check size={15} /> Added</> : <><ShoppingBag size={15} /> Add to Cart</>}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}