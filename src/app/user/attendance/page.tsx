import { getUser } from "@/app/api/User";
import { getAllWorkplace } from "@/app/api/Workplace";
import { redirect } from "next/navigation";
import Attendance from "../../../../components/user/attendance/Attendance";
import Navbar from "../../../../components/user/Navbar";

export const metadata = {
  title: "Chấm công",
  images: "https://flowbite.com/docs/images/logo.svg",
  description: "Chấm công mỗi ngày, giúp một ngày làm việc hiệu quả",
  openGraph: {
    title: "Chấm công",
    images: "https://flowbite.com/docs/images/logo.svg",
    description: "Chấm công mỗi ngày, giúp một ngày làm việc hiệu quả",
  },
};

export default async function Page() {
  const { data: user, message } = await getUser();
  const { data: allWorkplace } = await getAllWorkplace();
  if (message) {
    redirect("/");
  }
  return (
    <div>
      <Navbar user={user} />
      <Attendance allWorkplace={allWorkplace} />
    </div>
  );
}
