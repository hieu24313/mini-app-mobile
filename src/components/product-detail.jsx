import React, { useState, useEffect } from "react";
import { Header, Page, Spinner } from "zmp-ui";
import json from "../mock_data/products.json";
import { useParams } from "react-router-dom";

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
        />
        <div>
          {product ? (
            <div className="w-full h-1/2 mt-8">
              <img src={product.photo_url} alt={product.name} />
            </div>
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              <Spinner />
            </div>
          )}
        </div>
      </Page>
    </>
  );
};

export default ProductDetail;
