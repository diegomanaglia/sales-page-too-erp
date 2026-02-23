import { Resend } from 'resend';

export default async function handler(req, res) {
    // Configurando os cabecalhos de CORS para permitir requisições seguras da Landing Page
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Lido com a requisição de pré-vôo do navegador
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Apenas aceitamos POST na nossa API
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido.' });
    }

    try {
        const { nome, whatsapp, email } = req.body;

        // Validação básica
        if (!nome || !whatsapp || !email) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        // Instancia o cliente do Resend usando a chave mapeada em .env
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Constrói o corpo em HTML do email que o cliente receberá
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

        // Dispara o email através da API do Resend
        const { data, error: resendError } = await resend.emails.send({
            from: 'Acesso Antecipado ERP <onboarding@resend.dev>',
            to: process.env.EMAIL || process.env.RECEIVER_EMAIL, // O e-mail definido pelo usuário no .env
            subject: `🚨 Novo Lead [Acesso Antecipado]: ${nome}`,
            html: emailHtml,
        });

        if (resendError) {
            console.error('Erro detalhado do Resend:', resendError);
            return res.status(400).json({ error: 'Erro ao enviar o email através do Resend.' });
        }

        return res.status(200).json({ success: true, id: data?.id });

    } catch (error) {
        console.error('Erro ao enviar email pelo Resend:', error);
        return res.status(500).json({ error: 'Houve um problema ao salvar seu cadastro. Tente novamente mais tarde.' });
    }
}
