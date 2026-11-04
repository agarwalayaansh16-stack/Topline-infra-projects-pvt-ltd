const RECIPIENT = 'viaanagarwal396@gmail.com';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const SCOPES = new Set([
  'Highways & Expressways',
  'Bridges & Flyovers',
  'Industrial Parks & Urban Infra',
  'Equipment partnership',
  'Other'
]);

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    return res.status(503).json({ error: 'Email delivery is not configured yet. Please try again later.' });
  }

  let data = req.body;
  if (typeof data === 'string') {
    try { data = JSON.parse(data); } catch { data = null; }
  }
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return res.status(400).json({ error: 'Invalid inquiry details.' });
  }

  const name = typeof data.name === 'string' ? data.name.trim() : '';
  const company = typeof data.company === 'string' ? data.company.trim() : '';
  const email = typeof data.email === 'string' ? data.email.trim() : '';
  const scope = typeof data.scope === 'string' ? data.scope.trim() : '';
  const message = typeof data.message === 'string' ? data.message.trim() : '';
  if (name.length < 2 || name.length > 120 || company.length < 2 || company.length > 160 ||
      !EMAIL_RE.test(email) || email.length > 254 || !SCOPES.has(scope) ||
      message.length < 20 || message.length > 5000) {
    return res.status(400).json({ error: 'Please check the form details and try again.' });
  }

  const safeName = escapeHtml(name);
  const safeCompany = escapeHtml(company);
  const safeEmail = escapeHtml(email);
  const safeScope = escapeHtml(scope);
  const safeMessage = escapeHtml(message);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: [RECIPIENT],
        reply_to: email,
        subject: `Website inquiry: ${scope}`,
        text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nScope: ${scope}\n\n${message}`,
        html: `<h2>New website inquiry</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Company:</strong> ${safeCompany}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Scope:</strong> ${safeScope}</p><p><strong>Message:</strong><br>${safeMessage.replace(/\n/g, '<br>')}</p>`
      })
    });

    if (!response.ok) {
      console.error('Resend rejected inquiry email:', response.status, await response.text());
      return res.status(502).json({ error: 'Email delivery failed. Please try again later.' });
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Inquiry email request failed:', error);
    return res.status(502).json({ error: 'Email delivery failed. Please try again later.' });
  }
};
