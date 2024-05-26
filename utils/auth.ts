import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export function authenticateAndRedirect(): string {
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  return userId;
}
