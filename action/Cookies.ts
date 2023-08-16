import Cookies from "js-cookie";

const token = Cookies.get("token");
const id = Cookies.get("id");

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export { token, id, config };
