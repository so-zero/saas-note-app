"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import { nanoid } from "nanoid";

const featureItems = [
  { name: "Lorem Ipsum something" },
  { name: "Lorem Ipsum something" },
  { name: "Lorem Ipsum something" },
  { name: "Lorem Ipsum something" },
  { name: "Lorem Ipsum something" },
];

const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || "";

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const tossPayments = await loadTossPayments(clientKey);

  try {
    tossPayments.requestPayment("카드", {
      amount: 10000,
      orderId: nanoid(),
      orderName: "유료결제",
      successUrl: `${window.location.origin}/success`,
      failUrl: `${window.location.origin}/fail`,
    });
  } catch (error) {
    console.error("Error requesting payment:", error);
  }
};

export default function BillingPage() {
  return (
    <div className="max-w-md mx-auto space-y-4">
      <Card className="flex flex-col">
        <CardContent className="py-8">
          <div>
            <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary/10 text-primary">
              Monthly
            </h3>
          </div>
          <div className="mt-4 flex items-baseline text-5xl font-extrabold">
            10,000
            <span className="ml-1 text-xl text-muted-foreground">/원</span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            한 달에 10,000원으로 원하는 만큼 노트를 작성하세요!
          </p>
        </CardContent>
        <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-secondary rounded-lg m-1 space-y-6 sm:p-10 sm:pt-6">
          <ul className="space-y-4">
            {featureItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <p className="ml-3 text-base">{item.name}</p>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="w-full">
            <Button type="submit" className="w-full">
              결제하기
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
