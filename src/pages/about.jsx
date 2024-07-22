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
    <Page className="page padding-lr-0">
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
      <div className="bg-white mt-3">
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
              label="Ngày sinh"
              columnsFormat="DD-MM-YYYY"
              defaultValue={new Date(user.dob)}
              onChange={(args) => change("dob", args.target.value)}
              // helperText="Helper text"
              mask
              maskClosable
              dateFormat="dd/mm/yyyy"
              title="Ngày sinh"
            />
          </div>
          {/* <div className="flex justify-around mt-4 mb-4">
            <Radio name="gender" value="Male" label="Nam" />
            <Radio name="gender" value="Female" label="Nữ" />
            <Radio name="gender" value="Other" label="Khác" />
          </div> */}
          <div className="flex mt-4 mb-4">
            <Radio.Group className="flex ">
              <Radio name="gender" value="Male" label="Nam" />
              <Radio name="gender" value="Female" label="Nữ" />
              <Radio name="gender" value="Other" label="Khác" />
            </Radio.Group>
          </div>
        </div>
      </div>
      <div className="w-full h-20 fixed bottom-0 bg-white border-t-[1px] shadow-md">
        <button className="bg-customGreen w-full h-14 mr-3 ml-3 rounded-sm">
          Lưu
        </button>
      </div>
    </Page>
  );
};

export default AboutPage;
