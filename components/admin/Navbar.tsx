import Link from "next/link";
import React from "react";

const navbarUser: { text: string; link: string }[] = [
  { text: "Chấm công", link: "#" },
  { text: "Lịch sử", link: "#" },
  { text: "Thông tin", link: "#" },
];

const navbarAdmin: { text: string; link: string }[] = [
  { text: "Tài khoản", link: "#" },
  { text: "Lịch sử", link: "#" },
  { text: "Thông tin", link: "#" },
];

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center px-4 h-[42px] bg-blue ">
      <ul className="flex">
        <li>
          <Link
            className="inline-block h-[42px] leading-[42px] border-blue-500 px-3 bg-blue-hover text-white text-lg"
            href="#"
          >
            Active Pill
          </Link>
        </li>
      </ul>
      <div>
        <span>Đăng nhập</span>
      </div>
    </div>
  );
}
