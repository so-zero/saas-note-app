export default async function SuccessPage(req, res) {
  const { orderId, paymetKey, amount } = req.query;
  const secretKey = process.env.NEXT_PUBLIC_TOSS_SECRET_KEY;

  const url = "https://api.tosspayments.com/v1/payments/confirm";
  const basicToken = Buffer.from(`${secretKey}:`, "utf-8").toString("base64");

  await fetch(url, {
    method: "post",
    body: JSON.stringify({
      amount,
      orderId,
      paymetKey,
    }),
    headers: {
      Authorization: `Basic ${basicToken}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
