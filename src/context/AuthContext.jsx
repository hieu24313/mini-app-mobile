import React, { createContext, useState, useContext, useEffect } from "react";
import { setStorage, getStorage, removeStorage } from "zmp-sdk/apis";
import { authApi, endpoints } from "../config/APIs";
import { authorize, getSetting, getUserInfo } from "zmp-sdk";
import { userState } from "../state";
import { useRecoilValue } from "recoil";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(useRecoilValue(userState));

  useEffect(() => {
    // Hàm lấy thông tin người dùng từ Zalo
    const getUserInfoZalo = async () => {
      return new Promise((resolve, reject) => {
        getUserInfo({
          success: (data) => {
            const { userInfo } = data;
            console.log(userInfo);
            resolve(userInfo);
          },
          fail: (error) => {
            console.log(error);
            reject(null);
          },
        });
      });
    };

    const getUserInfoPerm = async () => {
      try {
        // Kiểm tra quyền
        const dataSetting = await getSetting({});
        let permUserInfo = dataSetting.authSetting["scope.userInfo"];
        if (permUserInfo) {
          const user = await getUserInfoZalo();
          // Xử lý với user ở đây
          setUser(user);
          console.log(user);
          setUser((pre) => ({
            ...pre,
            phone_number: "0123456789",
            email: "ZA@ZA.zalo",
            dob: "",
            gender: "Male",
          }));
        } else {
          // Xin quyền name, avatar
          const permResult = await authorize({ scopes: ["scope.userInfo"] });

          // console.log(permResult);
          if (permResult) {
            const user = await getUserInfoZalo();
            setUser(user);
            console.log(user);
            setUser((pre) => ({
              ...pre,
              phone_number: "0123456789",
              email: "ZA@ZA.zalo",
              dob: "",
              gender: "Male",
            }));
            // Xử lý với user ở đây
          } else {
            console.log(false);
          }
        }
      } catch (e) {
        console.log(e);
      }
    };

    getUserInfoPerm();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
