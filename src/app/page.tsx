import { redirect } from "next/navigation";
import { getUser } from "./api/User";
import Login from "./Login";

export default async function Home() {
  const { data: user } = await getUser();
  if (user) {
    redirect("/user/attendance");
  }
  return <Login />;
}
