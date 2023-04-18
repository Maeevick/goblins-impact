import { authorize, exec } from "@/gateways/persistence/prisma";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        nickname: { label: "nickname", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        return (await exec(authorize, credentials)) ?? null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
