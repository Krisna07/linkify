import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email/ Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required.");
        }

        const existingUser = await db.user.findFirst({
          where: {
            OR: [{ email: credentials.email }, { username: credentials.email }],
          },
        });

        if (!existingUser) {
          throw new Error("No user found with the provided credentials.");
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          existingUser.password
        );

        if (!passwordMatch) {
          const userDetails = {
            id: `${existingUser.id}`,
            username: existingUser.username,
            email: existingUser.email,
          };
          throw new Error(
            JSON.stringify({
              data: userDetails,
              message: "Password doesnot match",
            })
          );
        }

        return {
          id: `${existingUser.id}`,
          username: existingUser.username,
          email: existingUser.email,
          image: existingUser.avatar,
          name: existingUser.name,
          timestamp: existingUser.timestamp,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user.username,
          id: user.id,
          timestamp: user.timestamp,
        };
      }
      return token;
    },

    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
          timestamp: token.timestamp,
          id: token.id,
        },
      };
    },
  },
};
