"use client";
import React from "react";
import { typeUser } from "../../../types";
import Form from "../../Form";

export default function Personal({ user }: { user: typeUser }) {
  return (
    <>
      <div className="bg-[#f5f5f5] px-4">
        <h1 className="pt-8 pb-4 text-4xl flex items-center">
          Thông tin cá nhân
        </h1>
        <ul className="flex border-b">
          <li className="-mb-px mr-1">
            <span className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700">
              Thông tin
            </span>
          </li>
        </ul>
      </div>
      <div className="mx-4">
        <Form user={user} open={false} />
      </div>
    </>
  );
}
