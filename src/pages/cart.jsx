import React from 'react';
import { useCart } from '../context/CartContext';

const CartDetail = () => {
  const { products, addToCart, removeFromCart, updateQuantity } = useCart();

  const handleChangeQuantity = (product, quantity) => {
    console.log("quantity", quantity)
    if (quantity > 0) {
        updateQuantity(product.id, quantity);
    }
    if (quantity == "NaN"){
        updateQuantity(product.id, 0)
    }
  };

  const handleRemoveProduct = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Chi tiết giỏ hàng</h2>
      {products.length === 0 ? (
        <p>Không có sản phẩm nào trong giỏ hàng</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {products.map(product => (
            <li key={product.id} className="py-4 flex items-center">
              <img src={product.photo_url} alt={product.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-grow ml-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p>Giá: {product.price} đ</p>
                <div className="flex items-center mt-2">
                  <input
                    type="number"
                    defaultValue={product.quantity}
                    // value={product.quantity}
                    onChange={(e) => handleChangeQuantity(product, parseInt(e.target.value))}
                    className="w-16 py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <button
                    onClick={() => handleRemoveProduct(product.id)}
                    className="ml-2 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartDetail;
