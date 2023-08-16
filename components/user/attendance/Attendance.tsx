"use client";
import Link from "next/link";
import { useState } from "react";
import useSWRMutation from "swr/mutation";
import toast from "react-hot-toast";

import { createTimekeeping } from "../../../action/Timekeeping";
import { typeWorkplace } from "../../../types";
import Loading from "../../Loading";

export default function Attendance({
  allWorkplace,
}: {
  allWorkplace: typeWorkplace[];
}) {
  const [chooseShift, setChooseShift] = useState<string>("");
  const [noteTitle, setNoteTitle] = useState<string>("");
  const [file, setFile] = useState<any>("");
  const [check, setCheck] = useState<boolean>(false);

  const { trigger, data, isMutating } = useSWRMutation(
    "/timekeeping/create",
    createTimekeeping,
    {
      onSuccess: (data) => {
        if (!!data?.timekeeping) {
          toast.success("Bạn đã chấm công");
          setChooseShift("");
          setNoteTitle("");
          setFile("");
        } else {
          toast.error(data?.message);
        }
      },
    }
  );

  const handleSubmit = async () => {
    let formdata = new FormData();
    if (!chooseShift && !file) {
      setCheck(true);
    } else {
      formdata.append("choose_shift", chooseShift);
      formdata.append("note_title", noteTitle);
      formdata.append("file", file);

      await trigger(formdata);
    }
  };

  return (
    <div className="">
      <div className="bg-[#f5f5f5] px-4">
        <h1 className="pt-8 pb-4 text-4xl flex items-center">
          <Link href="/user/historyAttendance">Lịch sử chấm công</Link>
          <span className="text-sm text-red-500">(Xem thêm)</span>
        </h1>
        <ul className="flex border-b">
          <li className="-mb-px mr-1">
            <span className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700">
              Chấm công
            </span>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-3 gap-4 px-4 pt-4">
        <div className="md:col-span-3">
          <h1 className="font-semibold text-xl py-2">Thông tin chấm công</h1>
          <span>
            Nhập các thông tin đây đủ của bạn để tiến hành chấm công vào - ra hệ
            thống
          </span>
        </div>
        <div className="col-span-2 md:col-span-3">
          <div className="grid grid-cols-2 gap-6 ">
            <div className="md:col-span-2">
              <h1 className="font-semibold text-xl py-2">
                Ca đã chọn{" "}
                <span className="text-sm1 text-blue font-normal cursor-pointer">
                  (Chọn ca khác)
                </span>
              </h1>
              <select
                id="countries"
                defaultValue={chooseShift}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 "
                onChange={(e) => setChooseShift(e.target.value)}
              >
                <option value="" className="text-[0.85rem]">
                  Chọn ca làm
                </option>
                {allWorkplace?.map((value, index) => {
                  return (
                    <option
                      key={index}
                      value={`${value.name} - Vào làm( Buổi sáng)`}
                      className="text-[0.85rem]"
                    >
                      {`${value.name} - Vào làm( Buổi sáng)`}
                    </option>
                  );
                })}
              </select>
              {!chooseShift && check && (
                <p className="text-red-500 text-sm1">Vui lòng chọn ca làm</p>
              )}
              <h1 className="font-semibold text-base py-2">Ghi chú:</h1>
              <textarea
                name="ghi_chu"
                className="border outline-none text-sm1 w-full"
                rows={5}
                onChange={(e) => setNoteTitle(e.target.value)}
              ></textarea>
            </div>
            <div className="py-2 flex justify-center md:col-span-2 flex-col">
              <div className="flex justify-center pb-2">
                <label
                  className="text-center py-2 px-4 rounded-2xl border h-[40px] cursor-pointer bg-blue text-white hover:bg-blue-hover"
                  htmlFor="file"
                >
                  Chọn ảnh
                </label>
                <input
                  className="hidden"
                  type="file"
                  id="file"
                  onChange={(e: any) => setFile(e.target.files[0])}
                />
              </div>
              {!file && check && (
                <p className="text-red-500 text-sm1">Vui lòng chọn ảnh</p>
              )}
              <img
                className="p-1"
                src={file ? URL.createObjectURL(file) : ""}
              ></img>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 md:mb-8">
            <button
              onClick={handleSubmit}
              className="flex justify-center items-center mt-6 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-lg border-4 text-white py-1 px-2 rounded"
            >
              {isMutating && <Loading />}
              Chấm công
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
