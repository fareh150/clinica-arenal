import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, treatment, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Faltan campos obligatorios' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      // En desarrollo sin API key, simulamos éxito
      console.log('Formulario recibido (sin RESEND_API_KEY):', { name, email, phone, treatment, message });
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Clínica Arenal Web <noreply@fisioarenal.com>',
        to: ['clinica@fisioarenal.com'],
        subject: `Nueva consulta web — ${name}`,
        html: `
          <h2>Nueva consulta desde la web</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Nombre</td><td style="padding:8px">${name}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Teléfono</td><td style="padding:8px">${phone || 'No indicado'}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Tratamiento</td><td style="padding:8px">${treatment || 'No indicado'}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Mensaje</td><td style="padding:8px">${message}</td></tr>
          </table>
        `,
      }),
    });

    if (!res.ok) {
      throw new Error('Error al enviar el email');
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Error en /api/contact:', err);
    return new Response(JSON.stringify({ error: 'Error interno' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
