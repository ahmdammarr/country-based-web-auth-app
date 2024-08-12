import { ENDPOINTS } from "@core/enums/enpoints";
import { AuthResponse, ILogin } from "@core/types/user.type";
import { Post } from "@core/utils/api-client";
import { getCountry } from "@core/utils/getCountry";
import { getClientLocale } from "@core/utils/getClientLocale";
import { getServerSession, type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { setCountry } from "../setCountry";
import { setClientLocale } from "../setLocale";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt(props) {
      const { token, account } = props;
      if (account && account.access_token) {
        token.accessToken = account.access_token; // <-- adding the access_token here
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      console.log("====================================");
      console.log("token", session?.accessToken);
      console.log("====================================");
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },

  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "username" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials: { username: string; password: string }) {
        const { username, password } = credentials;
        const country = getCountry();
        const locale = getClientLocale();

        setCountry(country);
        setClientLocale(locale);

        try {
          const user = await Post<ILogin, AuthResponse>(ENDPOINTS.LOGIN, {
            username,
            password,
          });
          return user.data;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
