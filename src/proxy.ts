import NextAuth from "next-auth";
import { authConfig } from "@/lib/admin/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/admin/:path*"],
};
