import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { userProps } from "../components/Dashboard_components/utils/Interfaces";

export async function getCurrentUser() {
  const session: any = await getServerSession(authOptions);
  const user: userProps = session?.user;
  return user;
}
