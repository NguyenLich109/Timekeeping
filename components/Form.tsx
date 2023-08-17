"use client";
import React from "react";
import { typeUser } from "../types";

export default function Form({
  open,
  user,
}: {
  open: boolean;
  user: typeUser;
}) {
  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="mt-8 md:col-span-4 mx-2 md:flex md:items-center">
        <img
          src={`${
            user?.image ||
            "https://img.freepik.com/free-icon/user_318-875902.jpg"
          }`}
          className="px-8 md:px-12"
        ></img>
        {open && (
          <label
            htmlFor="id"
            className="text-center px-4 py-2 rounded-lg border bg-blue text-white flex justify-center mt-4 cursor-pointer"
          >
            Chọn ảnh
          </label>
        )}
        <input type="file" id="id" className="hidden"></input>
      </div>
      <div className="col-span-3 mt-8 md:col-span-4 md:mt-0">
        <div className="flex items-center justify-between">
          <div className="mb-3 mx-2 w-full">
            <label
              htmlFor="name"
              className="block mb-2 text-base font-medium text-[#000] dark:text-white"
            >
              Họ tên
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 text-[#000] rounded-md p-2 w-full"
              placeholder="Họ tên"
              defaultValue={user?.name}
            ></input>
          </div>
          <div className="mb-3 mx-2 w-full">
            <label
              htmlFor="sex"
              className="block mb-2 text-base font-medium text-[#000] dark:text-white"
            >
              Giới tính
            </label>
            <input
              type="text"
              className="border border-gray-300 text-[#000] rounded-md p-2 w-full"
              placeholder="Giới tính"
              defaultValue={user?.sex}
            ></input>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="mb-3 mx-2 w-full">
            <label
              htmlFor="phone"
              className="block mb-2 text-base font-medium text-[#000] dark:text-white"
            >
              Số điện thoại
            </label>
            <input
              type="text"
              id="phone"
              className="border border-gray-300 text-[#000] rounded-md p-2 w-full"
              placeholder="Số điện thoại"
              defaultValue={user?.phone}
            ></input>
          </div>
          <div className="mb-3 mx-2 w-full">
            <label
              htmlFor="key_login"
              className="block mb-2 text-base font-medium text-[#000] dark:text-white"
            >
              Tài khoản đăng nhập
            </label>
            <input
              type="text"
              id="key_login"
              className="border border-gray-300 text-[#000] rounded-md p-2 w-full"
              placeholder="Tài khoản đăng nhập"
              defaultValue={user?.key_login}
            ></input>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="mb-3 mx-2 w-full">
            <label
              htmlFor="cmnd"
              className="block mb-2 text-base font-medium text-[#000] dark:text-white"
            >
              CMND
            </label>
            <input
              type="text"
              id="cmnd"
              className="border border-gray-300 text-[#000] rounded-md p-2 w-full"
              placeholder="CMND"
              defaultValue={user?.cmnd}
            ></input>
          </div>
          <div className="mb-3 mx-2 w-full">
            <label
              htmlFor="address"
              className="block mb-2 text-base font-medium text-[#000] dark:text-white"
            >
              Địa chỉ
            </label>
            <input
              type="text"
              id="address"
              className="border border-gray-300 text-[#000] rounded-md p-2 w-full"
              placeholder="Địa chỉ"
              defaultValue={user?.address}
            ></input>
          </div>
        </div>
        {open && (
          <div className="mt-8 mx-2">
            <button className="w-full p-2 border rounded-md bg-blue hover:bg-blue-hover text-white">
              Đăng kí
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
