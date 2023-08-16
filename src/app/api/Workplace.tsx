import axios from "axios";
import { cookies } from "next/headers";

export const cookie = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const id = cookieStore.get("id");
  return { token, id };
};

export const getAllWorkplace = async () => {
  const { token } = await cookie();
  try {
    const { data } = await axios.get(
      `${process.env.URL_SERVER}/api/workplace/all`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value}`,
        },
      }
    );
    return { data };
  } catch (error: any) {
    const message =
      error?.response && error?.response.data.message
        ? error?.response.data.message
        : error?.message;
    return { message };
  }
};
