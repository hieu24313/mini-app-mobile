import React, { useState, useEffect } from "react";
import {
    Avatar,
    BottomNavigation,
    Box,
    Button,
    Icon,
    Modal,
    Page,
    Sheet,
    Text,
    useNavigate,
  } from "zmp-ui";
  import { useCart } from "../context/CartContext";

const CartFooter = (props ) => {
  const { title } = props;
  const [sheetVisible, setSheetVisible] = useState(false);
  const { products, removeFromCart, updateQuantity, count, total } = useCart();
  const [popupVisible, setPopupVisible] = useState(false);
  const [deleteProTemp, setDeleteProTemp] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      
    </>
  );
};

export default CartFooter;
