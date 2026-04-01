import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { nome, whatsapp, email } = await request.json();

    if (!nome || !whatsapp || !email) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios.' },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailHtml = `
      <div style="font-family: sans-serif; padding: 20px; color: #333;">
        <h2>🎉 Novo Usuário na Lista de Acesso Antecipado!</h2>
        <p>Um novo proprietário de oficina acabou de se cadastrar na sua Landing Page:</p>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Nome (Responsável):</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${nome}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>WhatsApp:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${whatsapp}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>E-mail:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
          </tr>
        </table>

        <p style="margin-top: 30px; font-size: 14px; color: #666;">
          Dica: Salve o número dele no celular e mande uma mensagem de boas vindas para iniciar o relacionamento.
        </p>
      </div>
    `;

    const data = await resend.emails.send({
      from: 'Acesso Antecipado ERP <onboarding@resend.dev>',
      to: process.env.RECEIVER_EMAIL,
      subject: `🚨 Novo Lead [Acesso Antecipado]: ${nome}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error('Erro ao enviar email pelo Resend:', error);
    return NextResponse.json(
      { error: 'Houve um problema ao salvar seu cadastro. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
