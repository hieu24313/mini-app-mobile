import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([
        // {
        //     "id": "",
        //     "name": "",
        //     "quantity": "",
        //     "unitPrice": ""

        // }
    ])
    const [total, setTotal] = useState(0);
    const addToCart = (product, quantity = 1) => {
        setCount(count + quantity);
        
        setProducts((prevProducts) => {
            // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
            const existingProductIndex = prevProducts.findIndex(p => p.id === product.id);

            if (existingProductIndex >= 0) {
                // Nếu sản phẩm đã tồn tại, cập nhật số lượng
                const updatedProducts = [...prevProducts];
                updatedProducts[existingProductIndex].quantity += quantity;
                return updatedProducts;
            } else {
                // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
                return [...prevProducts, { ...product, quantity }];
            }
        });
    };

    const removeFromCart = (productId) => {
      const updatedProducts = products.filter(p => p.id !== productId);
      setProducts(updatedProducts);
    };

    useEffect(() => {
      const newCount = products.reduce((total, p) => total + p.quantity, 0);
      setCount(newCount);
      // console.log(p.unitPrice, p.quantity)
      const newTotal = products.reduce((total, p) => total + (parseFloat(p.price) * parseInt(p.quantity)), 0);
      setTotal(newTotal);
  }, [products]);
  
    const updateQuantity = (productId, newQuantity) => {
      setProducts((prevProducts) => {
          const existingProductIndex = prevProducts.findIndex(p => p.id === productId);

          if (existingProductIndex >= 0) {
              const updatedProducts = [...prevProducts];
              updatedProducts[existingProductIndex].quantity = newQuantity;
              return updatedProducts;
          } else {
              return [...prevProducts];
          }
      });
  };

    return (
      <CartContext.Provider value={{ count, products, addToCart, removeFromCart, updateQuantity, total }}>
        {children}
      </CartContext.Provider>
    );
  };

export const useCart = () =>  useContext(CartContext)