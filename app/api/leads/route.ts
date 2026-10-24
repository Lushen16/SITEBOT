import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, discord, plan } = body || {};

    if (!email || !discord) {
      return NextResponse.json(
        { message: "E-mail e Discord são campos obrigatórios." },
        { status: 400 }
      );
    }

    const planLabel = plan === "daily" ? "Plano Teste Diário (R$ 9,90)" : "Plano Mensal Pro (R$ 49,90)";

    return NextResponse.json(
      {
        status: "success",
        message: `Solicitação confirmada para ${planLabel}! As instruções foram enviadas para o seu Discord.`,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Falha interna ao processar a licença." },
      { status: 500 }
    );
  }
}