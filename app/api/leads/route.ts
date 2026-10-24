import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, discord } = body || {};

    if (!email || !discord) {
      return NextResponse.json(
        { message: "E-mail e Discord são campos obrigatórios." },
        { status: 400 }
      );
    }

    // Processamento / Webhook / DB
    return NextResponse.json(
      {
        status: "success",
        message: "Acesso solicitado! Você receberá a chave no seu Discord/E-mail.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Falha interna ao processar requisição." },
      { status: 500 }
    );
  }
}