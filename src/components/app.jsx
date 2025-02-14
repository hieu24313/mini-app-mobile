import React from "react";
import { Route, useLocation } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "../pages";
import { AuthProvider } from "../context/AuthContext";
import Category from "../pages/category";
import Footer from "./footer";
import { CartProvider } from "../context/CartContext";
import CartDetail from "../pages/cart";
import UserPage from "../pages/user";
import AboutPage from "../pages/about";
import ProductDetail from "../pages/product-detail";
import Discount from "../pages/discount";
import News from "../pages/news";

const MyApp = () => {

  return (
    <RecoilRoot>
      <AuthProvider>
        <CartProvider>
        <App>
          <SnackbarProvider>
            <ZMPRouter>
              <AnimationRoutes>
                <Route path="/" element={<HomePage />} />
                <Route path="/category" element={<Category />}/>
                <Route path="/cart" element={<CartDetail />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/discount" element={<Discount />} />
                <Route path="/news" element={<News />} />
              </AnimationRoutes>
              <Footer />
            </ZMPRouter>
          </SnackbarProvider>
        </App>
        </CartProvider>
      </AuthProvider>
    </RecoilRoot>
  );
};
export default MyApp;
