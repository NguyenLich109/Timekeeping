import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center pt-20 md:flex-col">
      <div>
        <img className="max-w-[481px] md:max-w-[283px]" src="/404.png"></img>
      </div>
      <div>
        <h1 className="text-[2rem] text-center font-[300] my-4 md:text-2xl md:my-2">
          Xin lỗi, chúng tôi không <br></br> tìm thấy trang mà bạn cần!
        </h1>
        <p className="text-center text-base">Trở về trang chủ</p>
        <Link href="#" className="flex justify-center my-2">
          <span className="py-2 px-4 rounded-md bg-blue text-center text-white">
            Trang chủ
          </span>
        </Link>
      </div>
    </div>
  );
}
