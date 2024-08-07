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
        // Add logic here to look up the user from the credentials supplied
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const existingUser = await db.user.findFirst({
          where: {
            OR: [
              { email: credentials?.email },
              {
                username: credentials?.email,
              },
            ],
          },
        });

        if (!existingUser) {
          return null;
        }
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          existingUser.password
        );

        if (!passwordMatch) {
          return null;
        }
        return {
          id: `${existingUser.id}`,
          username: existingUser.username,
          email: existingUser.email,
          image: existingUser.imageUrl,
          name: existingUser.name,
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
          id: token.id,
        },
      };
      return session;
    },
  },
};
