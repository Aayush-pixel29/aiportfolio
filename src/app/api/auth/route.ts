import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    // Save to captured_emails.json
    const filePath = path.join(process.cwd(), 'captured_emails.json');
    let emails = [];
    
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      if (fileData) {
        try {
          emails = JSON.parse(fileData);
        } catch {
          emails = [];
        }
      }
    }

    if (!emails.some((e: { email: string }) => e.email === email)) {
      emails.push({ email, timestamp: new Date().toISOString() });
      fs.writeFileSync(filePath, JSON.stringify(emails, null, 2));
    }

    // Set the cookie
    cookies().set('portfolio_lead_email', email, { 
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 365 // 1 year
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
