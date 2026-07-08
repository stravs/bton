import { services, faqs } from '../data/services';

export async function GET() {
  const serviceLines = services
    .map(
      (service) => `- [${service.title}](https://bton.si/storitve/${service.id}/): ${service.summary}`
    )
    .join('\n');
  const faqLines = faqs.map((faq) => `Q: ${faq.q}\nA: ${faq.a}`).join('\n\n');

  const body = `# BTON

> BTON, nizke gradnje, Dejan Hodžić, s.p. iz Bleda izdeluje estetske in trpežne betonske površine po meri za zunanje in notranje prostore.

Website: https://bton.si/
Language: Slovenian (sl-SI)
Location: Kajuhova 19, 4260 Bled, Slovenija
Phone: +386 30 638 685
Email: info@bton.si
Facebook: https://www.facebook.com/bton.si

## Core services

${serviceLines}

## Service area

BTON izvaja projekte v Sloveniji, s poudarkom na Bledu, Gorenjski in okolici.

## Contact and quoting

For project enquiries, use https://bton.si/#kontakt or email info@bton.si. Useful enquiry details: desired service, project location, approximate surface area, photos or plans, and desired finish.

## Frequently asked questions

${faqLines}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
