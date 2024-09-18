import Link from "next/link";
import UserNav from "./UserNav";
import { ModeToggle } from "../darkmode/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="border-b bg-background h-[10vh] flex items-center px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-2xl">
            <span className="text-primary">SaaS</span>Note
          </h1>
        </Link>
        <div className="flex items-center gap-x-5">
          {(await isAuthenticated()) ? (
            <UserNav
              name={user?.given_name as string}
              email={user?.email as string}
              image={user?.picture as string}
            />
          ) : (
            <div className="flex items-center gap-x-5">
              <LoginLink>
                <Button>로그인</Button>
              </LoginLink>
              <RegisterLink>
                <Button variant="secondary">회원가입</Button>
              </RegisterLink>
            </div>
          )}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
