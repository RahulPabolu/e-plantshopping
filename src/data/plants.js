export const plantCategories = [
  {
    id: 'easy-care',
    name: 'Easy-Care Favorites',
    intro: 'Beautiful, forgiving plants that make it easy to bring a little green into any room.',
    plants: [
      { id: 'snake-plant', name: 'Snake Plant', price: 18.99, description: 'Architectural upright leaves and an easygoing nature.', image: 'photo-1593482892290-f54927ae2b2b' },
      { id: 'zz-plant', name: 'ZZ Plant', price: 22.50, description: 'Glossy green foliage that thrives with little fuss.', image: 'photo-1632207691143-643e2a3a9361' },
      { id: 'pothos', name: 'Golden Pothos', price: 14.99, description: 'A trailing classic with cheerful, heart-shaped leaves.', image: 'photo-1614594975525-e45190c55d0b' },
      { id: 'spider-plant', name: 'Spider Plant', price: 16.25, description: 'Fresh arching leaves and charming baby plantlets.', image: 'photo-1572688484438-313a6e50c333' },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 27.00, description: 'Bold, deep-green leaves bring a modern statement.', image: 'photo-1501004318641-b39e6451bec6' },
      { id: 'jade-plant', name: 'Jade Plant', price: 12.75, description: 'A compact succulent with plump, rounded leaves.', image: 'photo-1509423350716-97f9360b4e09' }
    ]
  },
  {
    id: 'tropical',
    name: 'Tropical Statement Plants',
    intro: 'Lush shapes and dramatic foliage for a vibrant, indoor-jungle feel.',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 34.99, description: 'Iconic split leaves that bring tropical character home.', image: 'photo-1614594975525-e45190c55d0b' },
      { id: 'peace-lily', name: 'Peace Lily', price: 24.50, description: 'Elegant leaves and graceful white blooms.', image: 'photo-1593691509543-c55fb32d8de5' },
      { id: 'bird-paradise', name: 'Bird of Paradise', price: 49.00, description: 'Large paddle-shaped leaves with a resort-like feel.', image: 'photo-1597055181300-a8a7a9e6a1f7' },
      { id: 'calathea', name: 'Calathea', price: 26.75, description: 'Decorative patterned leaves full of visual texture.', image: 'photo-1593691509543-c55fb32d8de5' },
      { id: 'philodendron', name: 'Heartleaf Philodendron', price: 17.50, description: 'Soft trailing vines with lush heart-shaped leaves.', image: 'photo-1485955900006-10f4d324d411' },
      { id: 'areca-palm', name: 'Areca Palm', price: 39.99, description: 'Feathery fronds that soften a bright living space.', image: 'photo-1512428813834-c702c7702b78' }
    ]
  },
  {
    id: 'aromatic',
    name: 'Aromatic & Wellness Greens',
    intro: 'Fragrant herbs and calming greenery for kitchen windowsills and peaceful corners.',
    plants: [
      { id: 'lavender', name: 'Lavender', price: 15.99, description: 'A fragrant favorite with delicate purple blooms.', image: 'photo-1499002238440-d264edd596ec' },
      { id: 'rosemary', name: 'Rosemary', price: 11.50, description: 'A woody culinary herb with a fresh, pine-like scent.', image: 'photo-1515586000433-45406d8e6662' },
      { id: 'mint', name: 'Mint', price: 8.99, description: 'Bright, aromatic leaves for drinks and kitchen use.', image: 'photo-1628556270448-4d4e4148e1b1' },
      { id: 'aloe-vera', name: 'Aloe Vera', price: 13.25, description: 'A sculptural succulent with thick, fleshy leaves.', image: 'photo-1509423350716-97f9360b4e09' },
      { id: 'boston-fern', name: 'Boston Fern', price: 21.00, description: 'Soft, cascading fronds add a lush, airy touch.', image: 'photo-1501004318641-b39e6451bec6' },
      { id: 'lemon-balm', name: 'Lemon Balm', price: 9.75, description: 'Gentle citrus-scented leaves for a sunny sill.', image: 'photo-1466692476868-aef1dfb1e735' }
    ]
  }
];

export const allPlants = plantCategories.flatMap((category) =>
  category.plants.map((plant) => ({ ...plant, category: category.name }))
);

export const plantImage = (image) =>
  `https://images.unsplash.com/${image}?auto=format&fit=crop&w=700&q=80`;