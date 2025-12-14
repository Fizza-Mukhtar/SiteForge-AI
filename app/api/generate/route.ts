import { NextResponse } from 'next/server';
import { ai } from '../../../lib/gemini';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert web developer and UI/UX designer.
        Create a complete, single-file HTML responsive landing page for a user who wants: "${prompt}".
        
        Rules:
        1. Use Tailwind CSS via CDN (script tag) for styling.
        2. Use the 'Inter' font from Google Fonts.
        3. Use high-quality placeholder images from Unsplash Source (source.unsplash.com/random) or Picsum (picsum.photos) matching the theme.
        4. The design must be modern, professional, and mobile-responsive.
        5. Include sections like Hero, Features, About, and Footer if appropriate for the request.
        6. Return ONLY the raw HTML code starting with <!DOCTYPE html>. Do not wrap it in markdown code blocks like \`\`\`html.
        
        Generate the full code now.`,
    });

    let code = response.text || '';
    // Clean up markdown code blocks if present
    code = code.replace(/```html/g, '').replace(/```/g, '');

    return NextResponse.json({ code });
  } catch (error) {
    console.error('Error generating website:', error);
    return NextResponse.json(
      { error: 'Failed to generate website' },
      { status: 500 }
    );
  }
}