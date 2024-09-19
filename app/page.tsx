import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect("/dashboard");
  }

  return (
    <section className="flex items-center justify-center bg-background h-[90vh]">
      <div className="relative items-center w-full max-w-7xl mx-auto px-5 py-12 md:px-12 lg:px-16 ">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <span className="w-auto px-6 py-3 rounded-full bg-secondary">
              <span className="text-sm font-medium text-primary">
                SaaSNote로 메모를 정리하세요
              </span>
            </span>
            <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
              메모 쉽게 작성하기
            </h1>
            <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
              쉽고 빠르게 메모를 작성할 수 있는 사용하기 쉬운 메모패드를
              원하시나요? 이 무료 노트 작성 앱, 필기장 및 메모장 앱이 모든
              필요를 충족시켜 드립니다.
            </p>
          </div>
          <div className="flex justify-center max-w-sm mx-auto mt-10">
            <RegisterLink>
              <Button size="lg" className="w-full">
                무료로 가입하기
              </Button>
            </RegisterLink>
          </div>
        </div>
      </div>
    </section>
  );
}
