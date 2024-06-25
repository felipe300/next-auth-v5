import { DefaultSession } from "nex-auth";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"];
  }

  interface User {
    role: string | null;
  }
}
