import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { exec } from "@/gateways/persistence/prisma";
import { cryptoGatewayFactory } from "@/gateways/crypto";
import { playerRespositoryFactory } from "@/gateways/persistence/prisma/playerRepository";

import { authorize } from "@/core/behaviors/authorize";

const authorizeHandler = authorize({
  playerRepository: playerRespositoryFactory(),
  crypto: cryptoGatewayFactory(),
});

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
        return (await exec(authorizeHandler, credentials)) ?? null;
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      const rootUrl = process.env.NEXTAUTH_URL ?? baseUrl;
      if (url.startsWith("/")) return `${rootUrl}${url}`;
      if (new URL(url).origin === rootUrl) return url;
      return rootUrl;
    },
  },
});

export { handler as GET, handler as POST };
