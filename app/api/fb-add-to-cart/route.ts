import { NextRequest, NextResponse } from "next/server";

// Pas besoin d’email ici, même raison que pour InitiateCheckout.
export async function POST(req: NextRequest) {
  const {
    eventTime,
    eventSourceUrl,
    userAgent,
    pixelId,
    content_ids,
    value,
    currency,
    content_name,
    content_type
  } = await req.json();

  const token = process.env.FB_PIXEL_EVENT_ACCESS_TOKEN;
  const apiVersion = "v19.0";

  if (!token || !pixelId) {
    return NextResponse.json({ error: "Token or PixelID missing" }, { status: 400 });
  }

  const payload = {
    data: [
      {
        event_name: "AddToCart",
        event_time: eventTime,
        event_source_url: eventSourceUrl,
        action_source: "website",
        user_data: {
          user_agent: userAgent, // Peut servir à l’appariement Meta.
        },
        custom_data: {
          content_ids,
          content_name,
          content_type,
          value,
          currency,
        }
      }
    ]
  };

  try {
    const fbRes = await fetch(
      `https://graph.facebook.com/${apiVersion}/${pixelId}/events?access_token=${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    const data = await fbRes.json();
    return NextResponse.json(data, { status: fbRes.ok ? 200 : 500 });
  } catch (err) {
    return NextResponse.json({ error: "Internal server error", err }, { status: 500 });
  }
}
