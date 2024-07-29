import React, { useState, useEffect } from "react";
import { Header, Icon, Page, Spinner, Text } from "zmp-ui";
import json from "../mock_data/products.json";
import { useParams } from "react-router-dom";
import share from "../../public/share.png";
import { useCart } from "../context/CartContext";

const ProductDetail = (props) => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const { products, removeFromCart, updateQuantity, count, total, addToCart } = useCart();
  useEffect(() => {
    // console.log(json);
    const foundProduct = json.find((prod) => prod.id == id);
    setProduct(foundProduct);
  }, [id]);

  return (
    <>
      <Page>
        <Header
          className="bg-customGreen text-white"
          title="Chi tiết sản phẩm"
          backIcon={
            <div className="text-white">
              <Icon icon="zi-chevron-left-header" />
            </div>
          }
        />
        <div className="mb-[70px]">
          {product ? (
            <div className="bg-white h-full">
              <div className="w-full h-1/3 mt-8 relative">
                <img src={product.photo_url} alt={product.name} />
                <img
                  className="bg-[#666666] w-[8%] absolute top-5 right-2 rounded"
                  src={share}
                  alt="share"
                />
              </div>
              <div className="ml-3 mt-3 ">
                <Text.Title bold>{product.name}</Text.Title>
              </div>
              <div className="ml-3 mt-3 text-customGreen font-bold text-lg">
                {product.price.toLocaleString()} đ
              </div>
              {/* <div className="h-16 w-full flex justify-center items-center mt-1 bg-green-50">
                <div className="flex bg-[#D8BFD8] h-14 w-[96%] rounded-sm">
                  <div className="">
                    <div>
                      <img src={share} alt="share" className="rounded-full" />
                    </div>
                  </div>
                  <div className=""><Text className="text-fuchsia-900 " bold>Chia sẻ ngay cho bạn bè</Text></div>
                </div>
              </div> */}
              <div className="h-full w-full ml-3 mt-1 bg-white">
                <div className="flex mb-2">
                  <Text className="mr-1" bold>
                    Đơn vị:
                  </Text>
                  <Text> {product.unit}</Text>
                </div>
                <Text className="mb-2" bold>
                  Chi tiết sản phẩm
                </Text>
                <div className="">{product.description}</div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              <Spinner />
            </div>
          )}
        </div>
        {/* <div className="fixed bottom-0 flex bg-white w-full justify-around items-center h-[70px] pb-2 space-x-3">
          <div className="flex flex-col justify-center items-center w-20">
            <Icon icon="zi-chat" />
            <div>Chat ngay</div>
          </div>
          <div className="text-customGreen bg-white rounded flex justify-center w-2/5 h-3/5 items-center border-customGreen border-2">
            <button className="bold">Thêm vào giỏ hàng</button>
          </div>
          <div className="bg-customGreen text-white flex justify-center w-2/5 h-3/5 items-center">
            <button className="">Mua ngay</button>
          </div>
        </div> */}
        <div className="fixed bottom-0 flex bg-white w-full justify-around items-center h-[70px] border-t border-gray-200 shadow-lg">
          <div className="flex flex-col justify-center items-center w-20">
            <Icon icon="zi-chat" className="text-gray-600" />
            <div className="text-sm mt-1">Chat ngay</div>
          </div>
          <button onClick={() => addToCart(product)} className="text-customGreen bg-white rounded flex justify-center items-center w-2/5 h-3/5 border-customGreen border-2">
            <span className="font-bold">Thêm vào giỏ hàng</span>
          </button>
          <button className="bg-customGreen text-white rounded flex justify-center items-center w-2/5 h-3/5">
            <span className="font-bold">Mua ngay</span>
          </button>
        </div>
      </Page>
    </>
  );
};

export default ProductDetail;
