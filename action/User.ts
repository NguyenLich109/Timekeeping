import axios from "axios";
import Cookies from "js-cookie";
import { config } from "./Cookies";
import { typeLogin } from "../types";
import http from "./Axios";

const SignIn = async (url: string, { arg }: { arg: typeLogin }) => {
  try {
    const { data } = await http.post(url, arg);
    if (data) {
      Cookies.set("token", data.token, { expires: 1 });
      Cookies.set("id", data._id, { expires: 1 });
    }
    return { user: data };
  } catch (error: any) {
    const message =
      error?.response && error?.response.data.message
        ? error?.response.data.message
        : error?.message;
    return { message };
  }
};

const Logout = async () => {
  Cookies.remove("id");
  Cookies.remove("token");
};

export { SignIn, Logout };
