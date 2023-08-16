import { getUser } from "@/app/api/User";
import { redirect } from "next/navigation";
import Navbar from "../../../../components/user/Navbar";
import Personal from "../../../../components/user/personal/Personal";

export const metadata = {
  title: "Thông tin cá nhân",
  images: "https://flowbite.com/docs/images/logo.svg",
  description: "Chấm công mỗi ngày, giúp một ngày làm việc hiệu quả",
  openGraph: {
    title: "Thông tin cá nhân",
    images: "https://flowbite.com/docs/images/logo.svg",
    description: "Chấm công mỗi ngày, giúp một ngày làm việc hiệu quả",
  },
};

export default async function Page() {
  const { data: user, message } = await getUser();
  if (message) {
    redirect("/");
  }
  return (
    <div>
      <Navbar user={user} />
      <Personal user={user} />
    </div>
  );
}
