import React, { useState, useEffect } from "react";
import { Header, Icon, Page, Spinner, Text } from "zmp-ui";
import json from "../mock_data/products.json";
import { useParams } from "react-router-dom";
import share from "../../public/share.png";

const ProductDetail = (props) => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    console.log(json);
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
        <div>
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
            </div>
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              <Spinner />
            </div>
          )}
        </div>
        <div className="fixed bottom-0 flex bg-white w-full justify-around items-center h-[70px] pb-2 space-x-3">
          <div className="flex flex-col justify-center items-center w-20">
            <Icon icon="zi-chat" />
            <div>Chat ngay</div>
          </div>
          <div className="text-customGreen bg-white rounded flex justify-center w-2/5 h-3/5 items-center border-customGreen border-2">
            <button className="bold">Thêm vào giỏ hàng</button>
          </div>
          <div className="bg-customGreen text-white flex justify-center w-2/5 h-3/5 items-center">
            <button>Mua ngay</button>
          </div>
        </div>
      </Page>
    </>
  );
};

export default ProductDetail;
