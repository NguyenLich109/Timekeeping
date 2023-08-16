import { getAllTimekeeping } from "@/app/api/Timekeeping";
import { getUser } from "@/app/api/User";
import { redirect } from "next/navigation";
import History from "../../../../../components/user/history/History";
import Navbar from "../../../../../components/user/Navbar";

export const metadata = {
  title: "Lịch sử chấm công",
  images: "https://flowbite.com/docs/images/logo.svg",
  description: "Chấm công mỗi ngày, giúp một ngày làm việc hiệu quả",
  openGraph: {
    title: "Lịch sử chấm công",
    images: "https://flowbite.com/docs/images/logo.svg",
    description: "Chấm công mỗi ngày, giúp một ngày làm việc hiệu quả",
  },
};

export default async function Page({ params }: { params: { id: string } }) {
  const { data: user, message } = await getUser();
  const { data: timekeepings } = await getAllTimekeeping({
    page: Number(params.id),
  });
  if (message) {
    redirect("/");
  }
  return (
    <div>
      <Navbar user={user} />
     {!!timekeepings &&  <History timekeepings={timekeepings} />}
    </div>
  );
}
