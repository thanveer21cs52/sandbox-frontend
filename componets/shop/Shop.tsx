"use client"
import { useState } from 'react';
import { Star, StarHalf, ChevronLeft, ChevronRight, Package, RotateCcw, ShieldCheck } from 'lucide-react';


const products = [
  { id: 1, name: 'Nike Air Sneakers', category: 'SHOES', price: 55.00, originalPrice: 85.00, rating: 5, image: '🟫', badge: 'Sale' },
  { id: 2, name: 'Apple Watch', category: 'ELECTRONICS', price: 85.00, rating: 4, image: '⌚', badge: 'New' },
  { id: 3, name: 'Headphones', category: 'ELECTRONICS', price: 85.00, rating: 0, image: '🎧', badge: 'New' },
  { id: 4, name: 'Colorful Sneakers', category: 'SHOES', price: 85.00, rating: 3, image: '👟', badge: '' },
  { id: 5, name: 'Polaroid Camera', category: 'ELECTRONICS', price: 85.00, rating: 1, image: '📷', badge: '' },
  { id: 6, name: 'Curology Cleanser', category: 'COSMETICS', price: 85.00, rating: 2, image: '🧴', badge: '' },
  { id: 7, name: 'G&G Wall Clock', category: 'HOME & KITCHEN', price: 85.00, rating: 4, image: '🕐', badge: '' },
  { id: 8, name: 'Earphones', category: 'ELECTRONICS', price: 85.00, rating: 3, image: '🎧', badge: '' },
  { id: 9, name: 'Apple Watch Milano Loop', category: 'ACCESSORIES', price: 85.00, rating: 5, image: '⌚', badge: '' },
];

const categories = [
  { name: 'Clothing', count: 23 },
  { name: 'Dresses', count: 0 },
  { name: 'Knitwear', count: 0 },
  { name: 'Jeans', count: 0 },
  { name: 'Sweatshirts', count: 14 },
  { name: 'Shoes', count: 122 },
  { name: 'Home & Kitchen', count: 91 },
];

const StarRating = ({ rating }:{rating:any}) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i} size={12} fill="#FFA500" stroke="#FFA500" />);
    } else {
      stars.push(<Star key={i} size={12} stroke="#E5E7EB" />);
    }
  }
  return <div className="flex gap-0.5">{stars}</div>;
};

const ProductCard = ({ product }:{product:any}) => (
  <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
    <div className="relative bg-gray-100 h-64 flex items-center justify-center">
      {product.badge && (
        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
          product.badge === 'Sale' ? 'bg-pink-500 text-white' : 'bg-cyan-500 text-white'
        }`}>
          {product.badge}
        </span>
      )}
      <span className="text-6xl">{product.image}</span>
    </div>
    <div className="p-4">
      <p className="text-xs text-gray-500 mb-1">{product.category}</p>
      <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
      <StarRating rating={product.rating} />
      <div className="mt-2 flex items-center gap-2">
        {product.originalPrice ? (
          <>
            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
          </>
        ) : (
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
        )}
      </div>
    </div>
  </div>
);

const Sidebar = () => {
  const [selectedRatings, setSelectedRatings] = useState([5]);
  const [selectedSizes, setSelectedSizes] = useState(['XL']);
  const [priceRange, setPriceRange] = useState([0, 500]);

  return (
    <div className="w-64 pr-8">
      <h2 className="text-xl font-bold mb-6">Categories</h2>
      <div className="space-y-2 mb-8">
        {categories.map((cat) => (
          <div key={cat.name} className="flex items-center justify-between text-sm">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-700">{cat.name}</span>
            </label>
            <span className="text-gray-400">({cat.count})</span>
          </div>
        ))}
      </div>

      <h3 className="font-bold mb-4">Rating</h3>
      <div className="space-y-2 mb-8">
        {[5, 4, 3, 2].map((rating) => (
          <label key={rating} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={selectedRatings.includes(rating)}
              onChange={() => {
                setSelectedRatings(prev =>
                  prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
                );
              }}
              className="mr-2"
            />
            <StarRating rating={rating} />
          </label>
        ))}
      </div>

      <h3 className="font-bold mb-4">Size</h3>
      <div className="space-y-2 mb-8">
        {['XL', 'XXL', 'M', 'L', 'XL'].map((size, idx) => (
          <label key={idx} className="flex items-center cursor-pointer text-sm">
            <input
              type="checkbox"
              checked={selectedSizes.includes(size)}
              onChange={() => {
                setSelectedSizes(prev =>
                  prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
                );
              }}
              className="mr-2"
            />
            <span className="text-gray-700">{size}</span>
            <span className="text-gray-400 ml-auto">(74)</span>
          </label>
        ))}
      </div>

      <h3 className="font-bold mb-4">Price</h3>
      <div className="space-y-3">
        <label className="flex items-center text-sm">
          <input type="radio" name="price" className="mr-2" defaultChecked />
          <span>$0.00 - $50.00</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="radio" name="price" className="mr-2" />
          <span>$0.00 - $50.00</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="radio" name="price" className="mr-2" />
          <span>$50.00 - $100.00</span>
        </label>
        <label className="flex items-center text-sm">
          <input type="radio" name="price" className="mr-2" />
          <span>$150.00 - $200.00</span>
        </label>
      </div>

      <div className="mt-6 flex gap-3">
        <input
          type="number"
          placeholder="$0.00"
          className="w-1/2 px-3 py-2 border rounded text-sm"
        />
        <input
          type="number"
          placeholder="$00.00"
          className="w-1/2 px-3 py-2 border rounded text-sm"
        />
      </div>
    </div>
  );
};

const Pagination = () => (
  <div className="flex justify-center items-center gap-2 mt-8">
    <button className="p-2 border rounded hover:bg-gray-50">
      <ChevronLeft size={16} />
    </button>
    <button className="px-3 py-1 bg-cyan-500 text-white rounded">1</button>
    <button className="px-3 py-1 border rounded hover:bg-gray-50">2</button>
    <button className="px-3 py-1 border rounded hover:bg-gray-50">3</button>
    <button className="p-2 border rounded hover:bg-gray-50">
      <ChevronRight size={16} />
    </button>
  </div>
);

const FeatureBanner = () => (
  <div className="grid grid-cols-3 gap-8 mt-16 pb-16">
    <div className="flex items-start gap-4">
      <Package size={48} className="text-gray-700 flex-shrink-0" />
      <div>
        <h3 className="font-bold text-gray-900 mb-1">Free Shipping</h3>
        <p className="text-sm text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
      </div>
    </div>
    <div className="flex items-start gap-4">
      <RotateCcw size={48} className="text-gray-700 flex-shrink-0" />
      <div>
        <h3 className="font-bold text-gray-900 mb-1">30 Days Return</h3>
        <p className="text-sm text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
      </div>
    </div>
    <div className="flex items-start gap-4">
      <ShieldCheck size={48} className="text-gray-700 flex-shrink-0" />
      <div>
        <h3 className="font-bold text-gray-900 mb-1">2 Years Warranty</h3>
        <p className="text-sm text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
      </div>
    </div>
  </div>
);

export default function Shop() {
  return (
    <div className="min-h-screen bg-gray-50 px-[10%]">
 
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Home</a>
            <span>/</span>
            <span className="text-gray-900">Shop</span>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex">
         
        <Sidebar/>
          
          <div className="flex-1">
    
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">New Arrivals</h1>
                <p className="text-sm text-gray-500">Showing 1-09 of 36 results</p>
              </div>
              <select className="px-4 py-2 border rounded-md text-sm">
                <option>Sort by popularity</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
                <option>Sort by latest</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <Pagination />
          </div>
        </div>

        <FeatureBanner />
      </div>
    </div>

  );
}