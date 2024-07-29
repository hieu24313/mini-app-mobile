import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Header, Icon, Page, Tabs, Text, useNavigate } from "zmp-ui";
import gift_black from "../../public/gift-black.png";

const Discount = () => {
  const { isAuth, user } = useAuth();
  const navigate = useNavigate();
    console.log("isAuth". isAuth)
  return (
    <>
      <Page className={isAuth ? "" : "page bg-white flex items-center"}>
        <div>
          <Header
            showBackIcon={true}
            className=" text-white bg-customGreen"
            title="Ưu đãi"
            backIcon={
              <div className="text-white">
                <Icon icon="zi-chevron-left-header" />
              </div>
            }
          />
        </div>
        <div className="mt-10">
          {isAuth ? (
            <>
              <Tabs className="w-full">
                <Tabs.Tab className="flex-1" key="Tất cả" label="Tất cả">
                  <div className="pt-3 flex bg-white h-8 w-22">
                  <input className="w-[85%] pl-5 focus:none focus:border-none " placeholder="Nhập mã ưu đãi của bạn..." />
                  <button className=" bg-customGreen text-white h-6 w-20">Áp dụng</button>
                  </div>
                </Tabs.Tab>
                <Tabs.Tab key="Đã dùng" label="Đã dùng">
                  456
                </Tabs.Tab>
              </Tabs>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center justify-center h-52 ">
                <div className="bg-green-100 rounded-full flex items-center justify-center h-20 w-20 ">
                  <img className="w-[65%]" src={gift_black} alt="gift" />
                </div>
                <div className="mt-4 text-center">
                  <Text className="font-semibold">
                    Tính năng cần phải kích hoạt tài khoản
                  </Text>
                  <Text className="mt-2">
                    Cho phép Nông nghiệp xanh xác minh số điện thoại để xem đầy
                    đủ thông tin và quyền lợi
                  </Text>
                </div>
                <div className="mt-5 flex w-full justify-evenly">
                  <div onClick={() => navigate("/")}>
                    <button className="rounded-2xl bg-slate-200 h-9 w-36 text-black">
                      Để sau và thoát
                    </button>
                  </div>
                  <div>
                    <button className="rounded-2xl bg-customGreen h-9 w-36 text-white">
                      Kích hoạt ngay
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Page>
    </>
  );
};
export default Discount;
