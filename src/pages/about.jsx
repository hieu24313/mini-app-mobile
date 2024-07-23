import React, { useState } from "react";
import {
  Sheet,
  Button,
  Page,
  Text,
  useNavigate,
  Header,
  Icon,
  Input,
  DatePicker,
  Radio,
} from "zmp-ui";
import { useAuth } from "../context/AuthContext";

const AboutPage = (props) => {
  const [actionSheetOpened, setActionSheetOpened] = React.useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const [newInfo, setNewInfo] = useState(user);

  const change = (key, value) => {
    setNewInfo((current) => {
      return { ...current, [key]: value.trim() };
    });
  };

  return (
    <Page style={{ paddingBottom: "0px" }} className="page padding-lr-0">
      <Header
        backIcon={
          <Icon className="text-white text-lg" icon="zi-chevron-left-header" />
        }
        title="Chỉnh sửa thông tin"
        className="bg-customGreen text-white"
      />
      <div className="flex justify-center bg-white w-full">
        <img className="pt-14 w-[25%] pb-6" src={user.avatar} alt={user.name} />
      </div>
      <div className="bg-white mt-3 h-4/5">
        <div className="bg-white ml-4">
          <Text.Header>Thông tin cá nhân</Text.Header>

          <div className="mt-4 mr-4">
            <Input
              className="h-11"
              label="Họ và tên"
              defaultValue={user.name}
              onChange={(args) => change("name", args.target.value)}
            />
          </div>

          <div className="mt-4 mr-4">
            <Input
              className="h-11"
              label="Số điện thoại"
              defaultValue={user.phone_number}
              onChange={(args) => change("phone_number", args.target.value)}
            />
          </div>

          <div className="mt-4 mr-4">
            <Input
              className="h-11"
              label="Email"
              defaultValue={user.email}
              onChange={(args) => change("email", args.target.value)}
            />
          </div>

          <div className="mt-4 mr-4">
            {/* <Input
              className="h-11"
              label="Ngày sinh"
              defaultValue={user.dob}
              onChange={(args) => change("dob", args.target.value)}
            /> */}

            <DatePicker
              label="Chọn ngày"
              helperText="Vui lòng chọn ngày từ lịch."
              errorText="Ngày không hợp lệ."
              status="success"
              placeholder="Chọn ngày..."
              title="Chọn ngày sinh"
              startDate={new Date("2024-01-01")}
              endDate={new Date("2024-12-31")}
              startYear={2020}
              endYear={2025}
              dateFormat="dd/MM/yyyy"
              columnsFormat="DD-MM-YYYY"
              // defaultValue={new Date("2024-06-10")}
              // value={selectedDate}
              // onChange={handleDateChange}
              onVisibilityChange={(isOpen) =>
                console.log("DatePicker is open:", isOpen)
              }
              mask
              maskClosable
              action={{
                text: "Xong",
                close: true,
                onClick: () => console.log("Action button clicked"),
              }}
              inputClass="custom-input-class"
              // prefix={<span>📅</span>}
              // suffix={<span>▼</span>}
              locale="vi-VN"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="gender">Giới tính</label>
          </div>

          <div
            name="gender"
            id="gender"
            className="flex mt-2 mb-4 items-center justify-between"
          >
            <Radio.Group vlaue={user.gender} className="flex ">
              <Radio checked name="gender" value="Male" label="Nam" />
              <Radio
                // checked={user.gender == "Female" ? true : false}
                name="gender"
                value="Female"
                label="Nữ"
              />
              <Radio
                // checked={user.gender == "Other" ? true : false}
                name="gender"
                value="Other"
                label="Khác"
              />
            </Radio.Group>
          </div>
        </div>
        <div className="bg-white  w-full flex items-center justify-center mt-8">
          <button
          onClick={() => navigate('/user')}
          className="rounded-xl h-12 bottom-0 bg-customGreen text-white w-4/5 text-center mb-4 flex items-center justify-center">
            Lưu
          </button>
        </div>
      </div>
      {/* <div className="w-full h-20 fixed flex bottom-0 bg-white border-t-[1px] shadow-md"> */}
      {/* <button className="bg-customGreen w-full h-14 pr-3 pl-3 rounded-sm">
          Lưu
        </button> */}
      {/* <button className="bg-customGreen w-full h-14 pr-3 pl-3 rounded-sm">
          Lưu
        </button>
      </div> */}
    </Page>
  );
};

export default AboutPage;
