import { Leaf, Heart, Sprout } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-copy">
        <p className="eyebrow">A little more green, every day</p>
        <h2>Rooted in a love for living things.</h2>
        <p>
          Paradise Nursery helps you create a home that feels fresh, calm, and connected to nature.
          We select welcoming houseplants for first-time plant parents and experienced indoor gardeners alike.
        </p>
      </div>
      <div className="about-values">
        <article><span className="value-icon"><Leaf size={22} /></span><h3>Thoughtfully chosen</h3><p>Plants for different spaces, styles, and experience levels.</p></article>
        <article><span className="value-icon"><Heart size={22} /></span><h3>Care made simple</h3><p>Friendly descriptions help you find a plant that fits your routine.</p></article>
        <article><span className="value-icon"><Sprout size={22} /></span><h3>Grow at your pace</h3><p>Start with one leafy friend and let your collection flourish.</p></article>
      </div>
    </section>
  );
}