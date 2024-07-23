import React from "react";
import {
  Avatar,
  List,
  Text,
  Box,
  Page,
  Button,
  Icon,
  useNavigate,
} from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import UserCard from "../components/user-card";
import { useAuth } from "../context/AuthContext";
import cydeva_icon from "../../public/cydeva.png";
import gift from "../../public/gift.png";
import review from "../../public/review_xam.png";
import waitting_payment from "../../public/waiting_payment.png"
import delivery from "../../public/delivery.png"
import waiting from "../../public/waiting.png"

const UserPage = () => {
  // const user = useRecoilValue(userState);
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <Page className="page" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
      <div className="pl-4 pr-4">
        <div
          className="absolute inset-0 bg-customGreen w-full h-1/3"
          style={{
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            // borderRadius: "0 0 33% 33%",
            zIndex: -1,
          }}
        ></div>
        <div className="section-container">
          <UserCard user={user} />
        </div>
        <div
          className="bg-white rounded-2xl"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex justify-between">
            <div className="text-center flex items-center ml-4 text-customGreen font-sans font-bold">
              Member
            </div>
            <div className="flex justify-end h-12">
              <span className="mt-4">0</span>
              <Icon className="mt-4 mr-6" icon="zi-chevron-right" />
            </div>
          </div>
          <hr />
          <div className="p-4 rounded-2xl mb-2 flex justify-between pr-0">
            <div className="w-8 max-w-full object-cover flex justify-between items-center border-gray-300">
              <img src={gift} alt="gift" />
              <div className="whitespace-nowrap text-center ml-2">Ưu đãi</div>
            </div>
            <div className="flex justify-end h-12">
              <Icon className="mt-4 mr-6" icon="zi-chevron-right" />
            </div>
          </div>
        </div>
        {/* <div></div> */}
        {/* <div className="w-full h-full"></div> */}
      </div>
      <div className=" bg-white">
        <div
          className="flex justify-between items-center h-12 border-b-[1px] mr-2 ml-2 pl-4 pr-4"
          onClick={() => navigate("/about")}
        >
          <div className="flex">
            <Icon className="text-green-500 mr-2" icon="zi-edit-text" />
            <div>Chỉnh sửa thông tin</div>
          </div>
          <Icon className="" icon="zi-chevron-right" />
        </div>

        <div className="border-b-[1px] pl-4 pr-4 mr-2 ml-2 pb-3">
          <div className="flex justify-between items-center h-12 mb-3">
            <div className="flex">
              <Icon className="text-green-500 mr-2" icon="zi-setting" />
              <div>Đơn hàng</div>
            </div>
            <div className="flex">
              <div className="text-gray-500">Xem tất cả</div>
              <Icon className="" icon="zi-chevron-right" />
            </div>
          </div>

          <div className="flex justify-between items-center text-gray-500">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8">
                <img src={waitting_payment} alt="" />
              </div>
              <div>Chờ thanh toán</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8">
                <img src={waiting} alt="" />
              </div>
              <div>Đang xử lý</div>
            </div>
            <div className="flex flex-col items-center">
            <div className="w-8 h-8">
                <img src={delivery} alt="" />
              </div>
              <div>Đang giao</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8">
                <img src={review} alt="" />
              </div>
              <div>Đánh giá</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center h-12 border-b-[1px] pl-4 pr-4 mr-2 ml-2 mt-2">
          <div className="flex">
            <Icon className="text-green-500 mr-2" icon="zi-location" />
            <div>Sổ địa chỉ</div>
          </div>
          <div className="flex">
            <div className="text-gray-500">Xem tất cả</div>
            <Icon className="" icon="zi-chevron-right" />
          </div>
        </div>
      </div>
      <div className="bg-white mt-2 pl-4 pr-4">
        <div className="ml-3 border-b-[1px] pt-2 pb-2 text-[14px] ">
          Quan tâm OA để nhận các chương trình đặc quyền ưu đãi
        </div>
        <div className="flex justify-between p-2 mb-2">
          <div className="ml-3 pt-2 pb-2 w-6 max-w-full object-cover flex justify-between items-center border-gray-300">
            <img src={cydeva_icon} alt="gift" />
            <div className="whitespace-nowrap text-center ml-2 font-bold">
              Nông nghiệp xanh
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-green-500 text-white rounded-full h-8 w-24">
              Quan tâm
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white mt-2">
        <div className="text-center pt-2">
          Chia sẻ QR này để kết bạn nhanh chóng, bảo mật
        </div>
        <div className="flex items-center text-center justify-center mt-3">
          <img src={cydeva_icon} alt="gift" className="w-6" />
        </div>
        <div className="text-center pt-2 font-bold text-lg">
          Greenway Agri Nông nghiệp xanh
        </div>
        <div className="flex justify-center">
          <img
            className="w-[40%]"
            src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC"
            alt="QR"
          />
        </div>
        <div className="flex justify-center space-x-12 pb-6 mt-4">
          <div
            className="rounded-full shadow-2xl flex flex-row justify-center  h-10 w-32"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <Icon className="mt-2" icon="zi-download" />
            <button>Tải xuống</button>
          </div>
          <div
            className="rounded-full shadow-2xl flex flex-row justify-center  h-10 w-32"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <Icon className="mt-2" icon="zi-share" />
            <button>Chia sẻ</button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default UserPage;
