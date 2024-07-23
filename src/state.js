import { atom } from "recoil";

export const userState = atom({
  key: "user",
  default: {
    id: '12345678',
    name: 'Chưa đăng nhập',
    avatar: 'ZA',
    phone_number: "0123456789",
    email: "ZA@ZA.zalo",
    dob: "2002-06-22",
    gender: "Male"
  }
})
