import React from "react";
import { Header, Icon, Page, Tabs, Text } from "zmp-ui";
import products from "../mock_data/products.json";

const News = () => {
  return (
    <>
      <Page className="">
        <Header
          backIcon={
            <Icon
              className="text-white text-lg"
              icon="zi-chevron-left-header"
            />
          }
          title="Tin tức"
          className="bg-customGreen text-white"
        />
        <div className="mt-11 w-full h-full">
          <Tabs className="">
            <Tabs.Tab key="all" label="Tất cả">
              <div className=" bg-white h-1/3 pb-2">
                <div className="flex justify-between m-2">
                  <Text className="mt-2 font-bold">Tin tức nổi bật</Text>
                  <Text className="mt-2 text-green-600">Tất cả</Text>
                </div>
                <div className="relative flex overflow-x-auto whitespace-nowrap scroll-container mt-2 right-0 ">
                  <div className="shadow-lg bg-white mr-3 rounded-lg border-2">
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
                      <Text className=" ml-4 mt-2 mb-3 text-[15px]">
                        10:22, 22/07
                      </Text>
                    </div>
                  </div>
                  <div className="shadow-lg bg-white mr-3 rounded-lg border-2">
                    <div className="flex bg-white rounded-lg w-48 p-4 mr-4">
                      <img
                        className="h-32 w-full object-cover rounded-lg"
                        src={products[2].photo_url}
                        alt=""
                      />
                    </div>
                    <div>
                      <Text className="mt-2 ml-4 font-bold truncate">
                        Dưa hấu không hạt{" "}
                      </Text>
                      <Text className=" ml-4 mt-2 mb-3 text-[15px]">
                        10:22, 22/07
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bg-white h-1/3 pb-2">
                <div className="flex justify-between m-2">
                  <Text className="mt-2 font-bold">Kỹ thuật trồng cây</Text>
                  <Text className="mt-2 text-green-600">Tất cả</Text>
                </div>
                <div className="relative flex overflow-x-auto whitespace-nowrap scroll-container mt-2 right-0 ">
                  <div className="shadow-lg bg-white mr-3 rounded-lg border-2">
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
                      <Text className=" ml-4 mt-2 mb-3 text-[15px]">
                        10:22, 22/07
                      </Text>
                    </div>
                  </div>
                  <div className="shadow-lg bg-white mr-3 rounded-lg border-2">
                    <div className="flex bg-white rounded-lg w-48 p-4 mr-4">
                      <img
                        className="h-32 w-full object-cover rounded-lg"
                        src={products[2].photo_url}
                        alt=""
                      />
                    </div>
                    <div>
                      <Text className="mt-2 ml-4 font-bold truncate">
                        Dưa hấu không hạt{" "}
                      </Text>
                      <Text className=" ml-4 mt-2 mb-3 text-[15px]">
                        10:22, 22/07
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="relative flex overflow-x-auto whitespace-nowrap scroll-container mt-2 right-0 ">
                  <div className="shadow-lg bg-white mr-3 rounded-lg border-2">
                    <div className="flex bg-white rounded-lg w-48 p-4 mr-4">
                      <img
                        className="h-32 w-full object-cover rounded-lg"
                        src={products[9].photo_url}
                        alt=""
                      />
                    </div>
                    <div>
                      <Text className="mt-2 ml-4 font-bold">
                        Lợi ích của việc ăn rau củ{" "}
                      </Text>
                      <Text className=" ml-4 mt-2 mb-3 text-[15px]">
                        10:22, 22/07
                      </Text>
                    </div>
                  </div>
                  <div className="shadow-lg bg-white mr-2 rounded-lg border-2 w-[198px] ">
                    <div className="flex bg-white rounded-lg w-48 p-2 mr-2">
                      <img
                        className="h-32 w-full object-cover rounded-lg"
                        src="https://cdn.tgdd.vn/Files/2021/06/28/1363897/huong-dan-cach-trong-cay-huong-thao-chi-tiet-nhat-ai-cung-lam-duoc-202106281616382320.png"
                        alt=""
                      />
                    </div>
                    <div className="pr-2">
                      <Text className="mt-1 ml-2 font-bold truncate max-w-xs">
                        Hướng dẫn cách trồng cây hương thảo chi tiết nhất, ai
                        cũng làm được
                      </Text>
                      <Text className="ml-2 mt-1 mb-2 text-[15px]">
                        10:22, 22/07
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.Tab>
            <Tabs.Tab key="plant" label="Kỹ thuật trồng cây">
              <div className=" bg-white h-1/3 pb-2">
                <div className="flex justify-between m-2">
                  <Text className="mt-2 font-bold">Kỹ thuật trồng cây</Text>
                  <Text className="mt-2 text-green-600">Tất cả</Text>
                </div>
                <div className="relative flex overflow-x-auto whitespace-nowrap scroll-container mt-2 right-0 ">
                  <div className="shadow-lg bg-white mr-3 rounded-lg border-2 w-[198px]">
                    <div className="flex bg-white rounded-lg w-48 p-4 mr-4">
                      <img
                        className="h-32 w-full object-cover rounded-lg"
                        src="https://cdn.tgdd.vn/Files/2021/06/28/1363897/huong-dan-cach-trong-cay-huong-thao-chi-tiet-nhat-ai-cung-lam-duoc-202106281616382320.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <Text className="mt-2 ml-4 font-bold truncate max-w-xs">
                        Hướng dẫn cách trồng cây hương thảo chi tiết nhất, ai
                        cũng làm được
                      </Text>
                      <Text className=" ml-4 mt-2 mb-3 text-[15px]">
                        10:22, 22/07
                      </Text>
                    </div>
                  </div>
                  <div className="shadow-lg bg-white mr-3 rounded-lg border-2 w-[198px]">
                    <div className="flex bg-white rounded-lg w-48 p-4 mr-4">
                      <img
                        className="h-32 w-full object-cover rounded-lg"
                        src={products[2].photo_url}
                        alt=""
                      />
                    </div>
                    <div>
                      <Text className="mt-2 ml-4 font-bold truncate max-w-xs">
                        Cách trồng dưa hấu bằng hạt tại nhà đúng kỹ thuật ra
                        nhiều quả
                      </Text>
                      <Text className=" ml-4 mt-2 mb-3 text-[15px]">
                        10:22, 22/07
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.Tab>
            <Tabs.Tab key="news" label="Tin tức"></Tabs.Tab>
          </Tabs>
        </div>
      </Page>
    </>
  );
};
export default News;
