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
import { useLocation } from "react-router-dom";
import shopingcart from "../../public/shopping_cart.png"

const Footer = (props) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const { title } = props;
  const [sheetVisible, setSheetVisible] = useState(false);
  const { products, removeFromCart, updateQuantity, count, total } = useCart();
  const [popupVisible, setPopupVisible] = useState(false);
  const [deleteProTemp, setDeleteProTemp] = useState(null);
  const location = useLocation();
  const showFooter = location.pathname !== "/about";

  const CartIcon = () => {
    return (
      <div className="relative inline-block">
            <img src={shopingcart} alt="cart" className="w-8 h-8" />
            {count > 0 && (
                <div className="absolute top-0 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {count}
                </div>
            )}
        </div>
  );
  }
  return (
    <>
      {showFooter ? (
        <>
          {/* <Page className="page"> */}
          <BottomNavigation
            fixed
            activeKey={activeTab}
            onChange={(key) => (key != "cart" ? setActiveTab(key) : null)}
          >
            <BottomNavigation.Item
              key="home"
              label="Trang chủ"
              icon={<Icon icon="zi-home" />}
              activeIcon={<Icon icon="zi-home" />}
              linkTo="/"
            />
            <BottomNavigation.Item
              label="Danh mục"
              key="category"
              icon={<Icon icon="zi-more-grid" />}
              activeIcon={<Icon icon="zi-more-grid" />}
              linkTo="/category"
            />
            <BottomNavigation.Item
              label="Giỏ hàng"
              key="cart"
              icon={<CartIcon />}
              // icon={<Icon icon="zi-more-grid" />}
              activeIcon={<Icon icon="zi-more-grid" />}
              onClick={() => setSheetVisible(true)}
              // linkTo="/cart"
            />
            <BottomNavigation.Item
              label="Người dùng"
              key="about"
              icon={<Icon icon="zi-user" />}
              activeIcon={<Icon icon="zi-user" />}
              linkTo="/user"
            />
          </BottomNavigation>

          <Sheet
            visible={sheetVisible}
            onClose={() => setSheetVisible(false)}
            autoHeight
            mask
            handler
            swipeToClose
          >
            <Box mb={4}>
              <Text size="xLarge" className="text-center font-bold font-sans">
                Giỏ hàng
              </Text>
            </Box>
            <hr />
            <div className="ml-3 mr-3">
              {products.length > 0 ? (
                <div>
                  <Box mb={4} mt={2}>
                    <Text size="normal" className="font-bold font-sans">
                      Chi tiết đơn hàng ({count})
                    </Text>
                  </Box>
                  <Box
                    className={
                      products.length > 3 ? "overflow-y-auto h-96" : ""
                    }
                  >
                    <>
                      {products.map((p) => {
                        return (
                          <>
                            <div className="mb-12 flex mt-4">
                              <Avatar src={p.photo_url} />
                              <div className="flex flex-col flex-grow ml-4">
                                <Text className="font-bold">{p.name}</Text>
                                <Text className="self-start">
                                  Tổng:{" "}
                                  {(p.price * p.quantity).toLocaleString()} đ
                                </Text>
                              </div>
                              <div className="flex border-[1px] border-customGreen h-7">
                                <div
                                  className="h-6 w-6 items-center flex justify-center font-bold text-green-600 text-lg"
                                  onClick={() => {
                                    if (p.quantity == 1) {
                                      setDeleteProTemp(p.id);
                                      setPopupVisible(true);
                                    } else {
                                      updateQuantity(p.id, p.quantity - 1);
                                    }
                                  }}
                                >
                                  <span className="font-bold">-</span>
                                </div>
                                <div className="font-bold h-6 w-6 items-center flex  justify-center border-l-[1.5px] border-r-[1.5px] ">
                                  {p.quantity}
                                </div>
                                <div
                                  className="h-6 w-6 items-center flex justify-center font-bold text-green-600 text-lg"
                                  onClick={() =>
                                    updateQuantity(p.id, p.quantity + 1)
                                  }
                                >
                                  <span className="font-bold">+</span>
                                </div>
                              </div>
                            </div>
                            <hr />
                          </>
                        );
                      })}

                      <Box>
                        <div>
                          <div className="flex justify-between border-t-2 pt-3 pb-3">
                            <Text>Tổng thanh toán</Text>
                            <div className="font-bold">
                              {total.toLocaleString()} đ
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart("All")}
                            className="bg-customGreen w-full h-12 text-white rounded font-sans font-bold mb-4"
                          >
                            Thanh toán ngay - {count} sản phẩm
                          </button>
                        </div>
                      </Box>
                    </>
                  </Box>
                </div>
              ) : (
                <>
                  <div className="h-24 text-center flex items-center justify-center">
                    Không có sản phẩm nào trong giỏ hàng
                  </div>
                  <Box>
                    <div>
                      <button
                        onClick={() => setSheetVisible(false)}
                        className="bg-customGreen w-full h-12 text-white rounded font-sans font-bold mb-4"
                      >
                        Tiếp tục mua sắm
                      </button>
                    </div>
                  </Box>
                </>
              )}
            </div>
          </Sheet>
          <Modal
            className="text-center"
            visible={popupVisible}
            title="Xác nhận"
            onClose={() => {
              setPopupVisible(false);
            }}
            verticalActions
            description="Bạn có chắc muốn xóa sản phẩm khỏi giỏ hàng?"
          >
            <Box
              pt={3}
              mt={3}
              className="flex justify-around text-green-600 border-t-[1.5px] relative bottom-0"
            >
              <div
                onClick={() => {
                  setPopupVisible(false);
                }}
              >
                Không
              </div>
              <div
                onClick={() => {
                  removeFromCart(deleteProTemp);
                  setPopupVisible(false);
                }}
              >
                Xác nhận
              </div>
            </Box>
          </Modal>
        </>
      ) : null}
    </>
  );
};

export default Footer;
