"use client";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ModalNavbar({
  navbarUser,
}: {
  navbarUser: { text: string; link: string; icon: any }[];
}) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div className="hidden md:block">
      <span className="p-2 text-white" onClick={handleDrawerToggle}>
        <MenuOutlined className="text-xl" />
      </span>
      {/* Toggle Button */}

      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 z-40"
          onClick={handleDrawerToggle}
        />
      )}

      {/* Drawer Content */}
      <div
        className={`h-[100vh] w-[260px] bg-white overflow-y-auto fixed top-0 left-0 transition-transform duration-300 transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <span
          className="flex justify-end py-4 px-4 cursor-pointer text-xl font-semibold text-[#000]"
          onClick={handleDrawerToggle}
        >
          <CloseOutlined className="text-xl" />
        </span>
        <ul>
          {navbarUser.map((data, index) => (
            <Link href={data.link} key={index}>
              <li
                className={`pl-5 pr-3 py-3 cursor-pointer ${
                  pathname === data.link ? "bg-[#f5f5f5]" : "hover:bg-[#f5f5f5]"
                }`}
              >
                <div className="flex items-center">
                  <p className="text-base pr-2 flex justify-center text-[#000]">
                    {data.icon}
                  </p>
                  <p className="text-lg text-[#000]">{data.text}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
