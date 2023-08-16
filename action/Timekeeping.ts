import axios from "axios";
import { config } from "./Cookies";
import http from "./Axios";

const createTimekeeping = async (url: string, { arg }: { arg: any }) => {
  try {
    const { data } = await http.post(url, arg, config);
    return { timekeeping: data };
  } catch (error: any) {
    const message =
      error?.response && error?.response.data.message
        ? error?.response.data.message
        : error?.message;
    return { message };
  }
};

export { createTimekeeping };
