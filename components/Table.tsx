"use client";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import { dataHistory } from "../types";
import { useRouter } from "next/navigation";
import ReactPaginate from 'react-paginate';
import './style.css'

export default function Table({
  rows,
  columns,
  page,
  pages,
  url,
}: {
  rows: dataHistory[];
  columns: any;
  page: number;
  pages: number;
  url: string;
}) {
  const router = useRouter();

  return (
    <>
      <div className="h-auto w-full overflow-auto">
        <DataGrid
          className="md:w-[1200px] max-h-[460px]"
          rows={rows}
          columns={columns}
          rowHeight={45}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 25 },
            },
          }}
          localeText={{
            noRowsLabel: "Không có dữ liệu",
          }}
          hideFooter={true}
        />
      </div>
      <div className="mt-2 mb-6 flex justify-end">
       <ReactPaginate
       previousLabel="<"
            nextLabel=">"
            breakLabel="..."
            pageCount={pages}
            pageRangeDisplayed={3}
            onPageChange={(data) => router.push(`${url}/${data.selected + 1}`)}
            containerClassName="pagination justify-content-center"
            className="flex items-center text-lg"
            pageClassName="page-item overflow-hidden border mx-1 text-[#242424]  "
            previousClassName="page-item overflow-hidden border  text-[#242424] text-center "
            nextClassName="page-item overflow-hidden border text-[#242424] text-center"
            activeClassName="bg-[#00000014]"
            forcePage={page - 1}
      />
      </div>
    </>
  );
}
