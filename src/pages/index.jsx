import React, { useEffect, useState } from "react";
import {
  List,
  Page,
  Icon,
  useNavigate,
  Header,
  ImageViewer,
  Text,
} from "zmp-ui";
import "../css/tailwind.css";
import UserCard from "../components/user-card";
import { useAuth } from "../context/AuthContext";
import order from "../../public/order_icon.jpg";
import ProductDetail from "../components/product-detail"
import json from "../mock_data/products.json";
import { useCart } from "../context/CartContext";
import phone from "../../public/phone.png"
import cart from "../../public/cart.png"
import gift from "../../public/gift.png"
import notification from "../../public/notification.png"
import banner from "../../public/img_banner.jpg"

const HomePage = () => {
  const { user } = useAuth();
  const { addToCart, products: cartProducts } = useCart();
  const navigate = useNavigate();
  const [products, setProducts] = useState(json);
  const [productsHot, setProductsHot] = useState([]);

  const reverseArray = () => {
    // Tạo một bản sao của mảng và đảo ngược nó
    const reversedProduct = [...products].reverse();
    // Cập nhật lại state với mảng đã đảo ngược
    setProductsHot(reversedProduct);
  };

  useEffect(() => {
    reverseArray();
  }, []);

  return (
    <Page className="page" style={{ paddingRight: "0px", paddingLeft: "8px" }}>
      <div
        className="absolute inset-0 bg-customGreen w-full h-1/3"
        style={{
          top: "-8px",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "0 0 33% 33%",
          zIndex: -1,
        }}
      ></div>
      <div className="" >
      <div className="section-container">
        <UserCard user={user} />
      </div>
      <div
        className="bg-white rounded-2xl mr-2"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <div className="flex justify-between h-12">
          <div className="text-center flex items-center ml-4 text-customGreen font-sans font-bold">
            Member
          </div>
          <div className="flex justify-between">
            <span className="mt-4">50,000 đ</span>
            <Icon className="mt-4 mr-6" icon="zi-chevron-right" />
          </div>
        </div>
        <hr />
        <div className="section-container">
          <div className="flex justify-between items-center border-gray-300">
            <a href="/" className="flex flex-col items-center w-20">
              <img className="icon w-12 h-12" src={cart} alt="icon" />
              <div className="mt-2">Đặt hàng</div>
            </a>
            <a href="/" className="flex flex-col items-center w-20">
              <img className="icon w-12 h-12" src={gift} alt="icon" />
              <div className="mt-1">Ưu đãi</div>
            </a>
            <a href="/" className="flex flex-col items-center w-20">
              <img className="icon w-12 h-12" src={notification} alt="icon" />
              <div className="mt-1">Thông báo</div>
            </a>
            <a href="/" className="flex flex-col items-center w-20">
              <img className="icon w-12 h-12" src={phone} alt="icon" />
              <div className="mt-1">Liên hệ</div>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 pr-0 left-0 right-0 pl-0">
        <Text className="font-bold text-xl">Sản phẩm mới</Text>
        <div className="relative flex overflow-x-auto whitespace-nowrap scroll-container mt-2 right-0 ">
          {products.length > 0 ? (
            products.map((p) => (
              <div 
              key={p.id} 
              className="shadow-lg bg-white mr-3 rounded-lg"
              onClick={() => {
                navigate(`/product/${p.id}`)
              }}
              >
                <div
                  key={p.id}
                  className="flex bg-white rounded-lg w-48 p-1"
                >
                  <img
                    className="h-32 w-full object-cover rounded-lg"
                    src={p.photo_url}
                    alt={p.name}
                  />
                </div>
                <div>
                  <Text className="mt-2 ml-4">{p.name}</Text>
                  <div className="flex justify-between items-center">
                    <Text className="font-bold ml-4 mt-2 mb-3">
                      Giá: {p.price.toLocaleString()} đ
                    </Text>
                    <Icon
                      icon="zi-add-story"
                      onClick={() => addToCart(p)}
                      color="green"
                      className="mr-3 text-green-500"
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Không có sản phẩm nào</p>
          )}
        </div>
      </div>
      <div className="p-4 pr-0 left-0 right-0 pl-0">
        <Text className="font-bold text-xl">Sản phẩm bán chạy</Text>
        <div className="relative flex overflow-x-auto whitespace-nowrap scroll-container mt-2 right-0 ">
          {productsHot.length > 0 ? (
            productsHot.map((p) => (
              <div 
              key={p.id} 
              className="shadow-lg bg-white mr-3 rounded-lg" 
              onClick={() => {
                navigate(`/product/${p.id}`)
              }}>
                <div
                  key={p.id}
                  className="flex bg-white rounded-lg w-48 p-1"
                >
                  <img
                    className="h-32 w-full object-cover rounded-lg"
                    src={p.photo_url}
                    alt={p.name}
                  />
                </div>
                <div>
                  <Text className="mt-2 ml-4">{p.name}</Text>
                  <div className="flex justify-between items-center">
                    <Text className="font-bold ml-4 mt-2 mb-3">
                      Giá: {p.price.toLocaleString()} đ
                    </Text>
                    <Icon
                      icon="zi-add-story"
                      onClick={() => addToCart(p)}
                      color="green"
                      className="mr-3 text-green-500"
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Không có sản phẩm nào</p>
          )}
        </div>
      </div>
      <div className="p-4 pr-0 pl-0">
        <Text className="font-bold text-xl">Tin tức</Text>
        <div className="relative flex overflow-x-auto whitespace-nowrap scroll-container mt-2 right-0 ">
          <div className="shadow-lg bg-white mr-3 rounded-lg">
            <div className="flex bg-white rounded-lg w-48 p-4 mr-4">
              <img
                className="h-32 w-full object-cover rounded-lg"
                src={products[4].photo_url}
                alt=""
              />
            </div>
            <div>
              <Text className="mt-2 ml-4 font-bold">
                Lợi ích của việc ăn rau củ{" "}
              </Text>
              <Text className=" ml-4 mt-2 mb-3 text-[15px]">10:22, 22/07</Text>
            </div>
          </div>
          <div className="shadow-lg bg-white mr-3 rounded-lg">
            <div className="flex bg-white rounded-lg w-48 p-4 mr-4">
              <img
                className="h-32 w-full object-cover rounded-lg"
                src={products[5].photo_url}
                alt=""
              />
            </div>
            <div>
              <Text className="mt-2 ml-4 font-bold">
                Bảo quản trái cây đúng cách{" "}
              </Text>
              <Text className=" ml-4 mt-2 mb-3 text-[15px]">00:15, 22/07</Text>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 pr-0 pl-0">
        <Text className="font-bold text-xl">Kỹ thuật cây trồng</Text>
        <div className="flex flex-col">
          <div className="relative flex overflow-x-auto whitespace-nowrap scroll-container mt-2 right-0 ">
            <div className="shadow-lg bg-white mr-3 rounded-lg">
              <div className="flex bg-white rounded-lg w-48 p-1">
                <img
                  className="h-32 w-full object-cover rounded-lg"
                  src={products[4].photo_url}
                  alt=""
                />
              </div>
              <div className="w-[180px]">
                <Text className="mt-2 ml-4 font-bold truncate">
                  8 ĐIỀU VỀ AMINO AXIT ĐỐI VỚI CÂY TRỒNG, BẠN CẦN...
                </Text>
                <Text className="ml-4 mt-2 mb-3 text-[15px]">10:22, 22/07</Text>
              </div>
            </div>
            <div className="shadow-lg bg-white mr-3 rounded-lg">
              <div className="flex bg-white rounded-lg w-48 p-1">
                <img
                  className="h-32 w-full object-cover rounded-lg"
                  src={banner}
                  alt=""
                />
              </div>
              <div className="w-[180px]">
                <Text className="mt-2 ml-4 font-bold truncate">
                Kỹ Thuật Trồng Rau Và Cách Chăm Sóc Rau Sạch Nhanh Tốt
                </Text>
                <Text className="ml-4 mt-2 mb-3 text-[15px]">10:22, 22/07</Text>
              </div>
            </div>
          </div>
          <div className="relative flex overflow-x-auto whitespace-nowrap scroll-container mt-2 right-0 ">
            <div className="shadow-lg bg-white mr-3 rounded-lg">
              <div className="flex bg-white rounded-lg w-48 p-1">
                <img
                  className="h-32 w-full object-cover rounded-lg"
                  src="https://xuannong.vn/images/ky-thuat-trong-cay-an-qua.jpg"
                  alt=""
                />
              </div>
              <div className="w-[180px]">
                <Text className="mt-2 ml-4 font-bold truncate">
                Kỹ thuật trồng cây ăn quả an toàn và hiệu quả
                </Text>
                <Text className="ml-4 mt-2 mb-3 text-[15px]">10:22, 22/07</Text>
              </div>
            </div>
            <div className="shadow-lg bg-white mr-3 rounded-lg">
              <div className="flex bg-white rounded-lg w-48 p-1">
                <img
                  className="h-32 w-full object-cover rounded-lg"
                  src="https://vinamacca.com.vn/wp-content/uploads/2023/12/ky-thuat-trong-cay-mac-ca-2.jpg"
                  alt="Quy trình kỹ thuật trồng và chăm sóc vườn cây macca - vinamacca"
                />
              </div>
              <div className="w-[180px]">
                <Text className="mt-2 ml-4 font-bold truncate">
                Quy trình kỹ thuật trồng và chăm sóc vườn cây macca - vinamacca
                </Text>
                <Text className="ml-4 mt-2 mb-3 text-[15px]">10:22, 22/07</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Page>
  );
};

export default HomePage;
