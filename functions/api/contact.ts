interface Env {
  RESEND_API_KEY: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  location?: string;
  message?: string;
  consent?: boolean;
  website?: string; // honeypot
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: 'Neveljavna zahteva.' }, 400);
  }

  const name = payload.name?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const phone = payload.phone?.trim() ?? '';
  const service = payload.service?.trim() ?? '';
  const location = payload.location?.trim() ?? '';
  const message = payload.message?.trim() ?? '';

  // Honeypot: bots fill hidden fields. Pretend success without sending anything.
  if (payload.website?.trim()) {
    return json({ ok: true });
  }

  if (!name || !email || !EMAIL_RE.test(email) || !payload.consent) {
    return json({ ok: false, error: 'Prosimo, izpolnite zahtevana polja.' }, 400);
  }

  const subject = `Povpraševanje${service ? ' – ' + service : ''}`;
  const text = [
    `Ime in priimek: ${name}`,
    `Email: ${email}`,
    `Telefon: ${phone}`,
    `Storitev: ${service}`,
    `Lokacija projekta: ${location}`,
    '',
    message,
  ].join('\n');

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'BTON kontaktni obrazec <noreply@bton.si>',
        to: ['info@bton.si'],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!resendRes.ok) {
      return json({ ok: false, error: 'Napaka pri pošiljanju sporočila.' }, 502);
    }

    return json({ ok: true });
  } catch {
    return json({ ok: false, error: 'Napaka pri pošiljanju sporočila.' }, 502);
  }
};
