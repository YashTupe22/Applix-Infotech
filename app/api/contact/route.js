import { NextResponse } from 'next/server'

export async function POST(req) {
    const { name, email, brief, budget } = await req.json()

    if (!name || !email || !brief || !budget) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // ─── Option A: Resend API (recommended — install with: npm install resend) ──
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'website@synplixinfotech.in',
    //   to: 'outreach@synplixinfotech.in',
    //   subject: `New enquiry from ${name}`,
    //   html: `
    //     <h2>New project enquiry</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Budget:</strong> ${budget}</p>
    //     <p><strong>Brief:</strong><br/>${brief}</p>
    //   `,
    // })

    // ─── Option B: Nodemailer + Gmail SMTP ───────────────────────────────────────
    // import nodemailer from 'nodemailer'
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.GMAIL_USER,      // Add to .env.local
    //     pass: process.env.GMAIL_APP_PASS,  // Gmail app password (not regular password)
    //   },
    // })
    // await transporter.sendMail({
    //   from: `"Synplix Website" <${process.env.GMAIL_USER}>`,
    //   to: 'outreach@synplixinfotech.in',
    //   subject: `New enquiry from ${name}`,
    //   html: `
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Budget:</strong> ${budget}</p>
    //     <p><strong>Brief:</strong> ${brief}</p>
    //   `,
    // })

    // ─── Uncomment ONE option above, then remove this console.log ────────────────
    console.log('Contact form submission:', { name, email, brief, budget })

    return NextResponse.json({ ok: true })
}
