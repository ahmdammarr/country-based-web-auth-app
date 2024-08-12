import { ILogin } from "./user.type";

declare module "next-auth" {
  interface Session {
    accessToken: string;
  }
  interface User extends ILogin {}
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
  }
}

declare module "next-auth/providers/credentials" {
  interface CredentialsConfig<
    C extends Record<string, CredentialInput>,
    K extends keyof C,
  > extends CommonProviderOptions {
    type: "credentials";
    credentials: C;
    authorize(
      credentials: Record<K, string>,
      req: NextApiRequest
    ): Awaitable<ILogin | null>;
  }
  export type CredentialsProvider = <C extends Record<string, CredentialInput>>(
    options: Partial<CredentialsConfig<C, keyof C>>
  ) => CredentialsConfig;
}
