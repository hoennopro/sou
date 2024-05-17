import React, { useMemo, memo } from "react";

const ProductItem = memo(({ product }) => {
  console.log(`Rendering ProductItem ${product.id}`);
  return (
    <div>
      <h3>{product.productName}</h3>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
});

const ProductList = ({ products }) => {
  console.log("Rendering ProductList");

  const productList = useMemo(() => {
    return products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ));
  }, [products]);

  return (
    <div>
      <h2>Product List</h2>
      {productList}
    </div>
  );
};

export default ProductList;
