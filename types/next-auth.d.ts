import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
    // verified: boolean;
    timestamp: int;
  }
  interface Session {
    user: User & {
      username: string;
      // verified: boolean;
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
    // verified?: boolean;
    timestamp?: number;
  }
}
