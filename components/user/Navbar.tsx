"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LogoutOutlined,
  UserOutlined,
  ExceptionOutlined,
  HistoryOutlined,
} from "@ant-design/icons";

import { typeUser } from "../../types";
import Menu from "@mui/material/Menu";
import { Logout } from "../../action/User";
import ModalNavbar from "../ModalNavbar";
import "./style.css";

const navbarUser: { text: string; link: string; icon: any }[] = [
  {
    text: "Chấm công",
    link: "/user/attendance",
    icon: <ExceptionOutlined />,
  },
  {
    text: "Lịch sử",
    link: "/user/historyAttendance/1",
    icon: <HistoryOutlined />,
  },
  { text: "Thông tin", link: "/user/personal", icon: <UserOutlined /> },
];

export default function Navbar({ user }: { user: typeUser }) {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center px-4 h-[42px] bg-blue ">
        <ul className="flex md:hidden">
          {navbarUser.map((data, index) => {
            return (
              <li
                key={index}
                className={`${
                  pathname.replace(/\/\d+$/, "") ===
                  data.link.replace(/\/\d+$/, "")
                    ? "bg-blue-hover"
                    : ""
                }`}
              >
                <Link
                  className="inline-block h-[42px] leading-[42px] border-blue-500 px-3 hover:bg-blue-hover text-white text-lg"
                  href={data.link}
                >
                  {data.text}
                </Link>
              </li>
            );
          })}
        </ul>

        <ModalNavbar navbarUser={navbarUser} />
        <div>
          <span
            aria-controls={Boolean(open) ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={Boolean(open) ? "true" : undefined}
            onClick={handleClick}
            className="text-lg text-white cursor-pointer flex items-center font-[400]"
          >
            <img
              src="https://img.freepik.com/free-icon/user_318-875902.jpg"
              className="h-[32px] w-[32px] rounded-full mr-2"
            ></img>
            {user?.name}
          </span>
          <Menu
            id="basic-menu"
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            {user?.isAdmin && (
              <li className="flex items-center pl-4 pr-3 py-2.5 text-sm1 cursor-pointer hover:bg-[#f5f5f5]">
                <UserOutlined className="mr-2 text-lg" />
                Admin
              </li>
            )}
            <li
              onClick={async () => {
                await Logout();
                router.push("/");
              }}
              className="flex items-center pl-4 pr-3 py-2.5 text-sm1 cursor-pointer hover:bg-[#f5f5f5]"
            >
              <LogoutOutlined className="mr-2 text-lg" />
              Đăng xuất
            </li>
          </Menu>
        </div>
      </div>
    </>
  );
}
