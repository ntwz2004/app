// Vercel Serverless Function: ส่งข้อมูลต่อไปยัง Google Apps Script (เขียนลง Google Sheet)
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  const url = process.env.APPS_SCRIPT_URL;
  if (!url) return res.status(500).json({ ok: false, error: 'APPS_SCRIPT_URL not set' });
  try {
    const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body, redirect: 'follow' });
    const text = await r.text();
    res.status(200).json({ ok: true, result: text.slice(0, 200) });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e) });
  }
}
