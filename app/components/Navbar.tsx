import Link from "next/link";
import { ModeToggle } from "./darkmode/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b bg-background h-[10vh] flex items-center px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-2xl">SaaS Note</h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <div className="flex items-center gap-x-5">
            <Button>로그인</Button>
            <Button variant="secondary">회원가입</Button>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
