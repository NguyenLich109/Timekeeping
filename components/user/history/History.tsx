"use client";
import Table from "../../Table";
import Link from "next/link";
import { GridColDef } from "@mui/x-data-grid";
import moment from "moment-timezone";
import { dataHistory, typeTimekeeping } from "../../../types";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  {
    field: "date",
    headerName: "Thời gian",
    renderCell: (params) => {
      const time = moment
        .utc(params.value)
        .tz("Asia/Ho_Chi_Minh")
        .format("YYYY-MM-DD HH:mm:ss");
      return <span>{time}</span>;
    },
    flex: 2,
  },
  { field: "fullName", headerName: "Họ tên", flex: 2, editable: true },
  { field: "choose_shift", headerName: "Ca làm", flex: 2, editable: true },
  {
    field: "url",
    headerName: "Khu vực",
    renderCell: (params) => (
      <Link href={params.value} target="_blank" rel="noopener noreferrer">
        <span className="underline decoration-1 text-sm1 font-[400] text-red-500">
          Xem khu vực tại đây
        </span>
      </Link>
    ),
    flex: 2,
  },
];

export default function History({
  timekeepings,
}: {
  timekeepings: typeTimekeeping;
}) {
  const rows: dataHistory[] = timekeepings?.data?.map((value) => {
    return {
      id: value?._id,
      date: value?.createdAt,
      fullName: value?.user.name,
      choose_shift: value?.choose_shift,
      url: value?.file.urlFile,
    };
  });

  return (
    <div className="">
      <div className="bg-[#f5f5f5] px-4">
        <h1 className="text-[#000] pt-8 pb-4 text-4xl flex items-center">
          Lịch sử chấm công
        </h1>
        <ul className="flex border-b">
          <li className="-mb-px mr-1">
            <span className="text-[#000] bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700">
              Lịch sử
            </span>
          </li>
        </ul>
      </div>
      <div className="px-4 pt-4">
        <Table
          columns={columns}
          rows={rows}
          page={timekeepings?.page}
          pages={timekeepings?.pages}
          url={"/user/historyAttendance"}
        />
      </div>
    </div>
  );
}
