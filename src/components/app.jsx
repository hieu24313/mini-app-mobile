import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "../pages";
import { AuthProvider } from "../context/AuthContext";
import Category from "../pages/category";
import Footer from "./footer";
import { CartProvider } from "../context/CartContext";
import CartDetail from "../pages/cart";

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
