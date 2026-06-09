import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const CONTACT_EMAIL = 'contact@joahtvera.com';

type ContactRequest = {
    name?: unknown;
    email?: unknown;
    subject?: unknown;
    message?: unknown;
    website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
    let body: ContactRequest;

    try {
        body = (await request.json()) as ContactRequest;
    } catch {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const name = normalize(body.name);
    const email = normalize(body.email);
    const subject = normalize(body.subject);
    const message = normalize(body.message);
    const website = normalize(body.website);

    if (website) {
        return NextResponse.json({ ok: true });
    }

    if (!name || !email || !subject || !message) {
        return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }

    if (!emailPattern.test(email)) {
        return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (name.length < 2 || subject.length < 4 || message.length < 20) {
        return NextResponse.json({ error: 'Please provide a bit more detail.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !from) {
        return NextResponse.json(
            { error: 'Contact email is not configured yet.' },
            { status: 500 },
        );
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from,
            to: CONTACT_EMAIL,
            reply_to: email,
            subject: `Portfolio contact: ${subject}`,
            text: buildPlainText({ name, email, subject, message }),
        }),
    });

    if (!resendResponse.ok) {
        return NextResponse.json(
            { error: 'I could not send your message right now. Please try again later.' },
            { status: 502 },
        );
    }

    return NextResponse.json({ ok: true });
}

function normalize(value: unknown) {
    return typeof value === 'string' ? value.trim() : '';
}

function buildPlainText({
    name,
    email,
    subject,
    message,
}: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    return [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        '',
        'Message:',
        message,
    ].join('\n');
}
