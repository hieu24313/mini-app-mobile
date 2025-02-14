import React, { useState } from "react";
import category_json from "../mock_data/category.json";
import {
  Box,
  Header,
  Icon,
  Input,
  Page,
  Select,
  Slider,
  Text,
  useNavigate,
} from "zmp-ui";
import json from "../mock_data/products.json";
import { useCart } from "../context/CartContext";

const Category = () => {
  const [category, setCategory] = useState(category_json);
  const [products, setProducts] = useState(json);
  const [baseProducts, setBaseProducts] = useState(json);
  const [choiceCategory, setChoiceCategory] = useState("");
  const { addToCart, products: cartProducts } = useCart();
  const navigate = useNavigate();

  const filterProduct = (key) => {
    if (key == choiceCategory) {
      setProducts(baseProducts);
      setChoiceCategory("");
    } else {
      setChoiceCategory(key);
      const filteredProducts = baseProducts.filter(
        (product) => product.category.toLowerCase() === key.toLowerCase()
      );
      setProducts(filteredProducts);
    }
  };

  const searchProduct = (text) => {
    const searchedProducts = baseProducts.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setProducts(searchedProducts);
  };

  const sortProduct = (sort = "desc") => {
    let new_Products = [...products].sort((a, b) =>
      sort === "desc" ? b.price - a.price : a.price - b.price
    );
    setProducts(new_Products);
  };

  return (
    <>
      <Page className="page padding-lr-0">
        <div>
          <Header
            showBackIcon={false}
            className="text-center text-white bg-customGreen"
            title="Danh mục sản phẩm"
          />
        </div>
        <div className="mb-1 relative mt-8">
          <Input.Search
            label="Tìm kiếm sản phẩm"
            helperText="Helper text"
            clearable="focus"
            placeholder="Tìm kiếm sản phẩm"
            onSearch={(text) => searchProduct(text)}
            onChange={(text) => searchProduct(text)}
            className="rounded-none"
          />
        </div>
        <div className="max-w-full max-h-full">
          <div className="w-full h-3/5 flex">
            <div className="w-full h-full flex items-center justify-around overflow-x-auto scroll-container">
              {category.length > 0 ? (
                <>
                  {category.map((c) => (
                    <div
                      key={c.key}
                      className=" w-24 ml-[2px] mr-[2px] h-30"
                      onClick={() => filterProduct(c.key)}
                    >
                      <div
                        className={
                          choiceCategory == c.key
                            ? "shadow-lg bg-white p-3 rounded-lg mt-1 mb-1 relative h-28 items-center flex flex-col text-customGreen"
                            : "p-3 mt-1 mb-1 relative h-28 items-center flex flex-col"
                        }
                      >
                        <img
                          className="h-12 w-12 object-cover rounded-lg"
                          src={c.image}
                          alt={c.name}
                          style={{ mixBlendMode: "multiply" }}
                        />
                        <Text className="">{c.name}</Text>
                        {choiceCategory === c.key ? (
                          <>
                            <div
                              id={c.key}
                              className="h-1 w-full bg-customGreen absolute left-0 right-0 bottom-0 shadow-lg rounded-lg"
                            ></div>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div>Không có danh mục</div>
                </>
              )}
            </div>
          </div>

          <div className="bg-white border-b-2 border-customGreen">
            <div className="p-3">
              <Text className="text-lg font-bold">Lọc theo giá</Text>
              {/* <div className="flex justify-evenly mt-2">
                <button className="">Từ cao đến thấp</button>
                <button>Từ thấp đến cao</button>
              </div> */}
            </div>
          </div>

          <div className="flex bg-white">
            <div className="h-full w-full mt-0 bg-white border-b mb-[48px]">
              <div className="flex flex-wrap mt-5">
                {products.length > 0 ? (
                  products.map((p) => (
                    <div
                      key={p.id}
                      className="shadow-lg bg-white m-0 rounded-lg w-[47%] p-3 ml-2 mb-2"
                    >
                      <img
                        className="h-32 w-full object-cover rounded-lg"
                        src={p.photo_url}
                        alt={p.name}
                        onClick={() => {
                          navigate(`/product/${p.id}`);
                        }}
                      />

                      {/* <div>
                  <Text className="mt-2 ml-4">{p.name}</Text>
                  <div className="flex justify-between items-center">
                    <Text className="font-bold ml-4 mt-2 mb-3">
                      Giá: {p.price} đ
                    </Text>
                    <Icon
                      icon="zi-add-story"
                      onClick={() => addToCart(p)}
                      color="green"
                      className="mr-3 text-green-500"
                    />
                  </div>
                </div> */}

                      <div>
                        <Text
                          className="mt-2"
                          onClick={() => {
                            navigate(`/product/${p.id}`);
                          }}
                        >
                          {p.name}
                        </Text>
                        <div className="flex justify-between items-center">
                          <Text className="font-bold mt-2 mb-3">
                            Giá: {p.price.toLocaleString()} đ
                          </Text>
                          <Icon
                            icon="zi-plus-circle-solid"
                            onClick={() => addToCart(p)}
                            color="green"
                            className="mr-0 text-green-500 right-0"
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
          </div>
        </div>
      </Page>
    </>
  );
};
export default Category;
