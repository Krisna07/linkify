import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
    timestamp: int;
  }
  interface Session {
    user: User & {
      username: string;
      timestamp: number;
    };
    token: {
      username: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username?: string;
    timestamp?: number;
  }
}
