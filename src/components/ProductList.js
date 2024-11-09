// src/components/ProductList.js

import Product from './Product';

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list" style={{display:'flex',justifyContent:'space-between',fontSize:'20px',textTransform:'uppercase'}}>
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
