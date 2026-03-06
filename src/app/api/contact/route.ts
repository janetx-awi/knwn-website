import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_ADDRESS = "KNWN Brand <noreply@knwnbrand.com>";
const SEAN_EMAIL = "info@knwnbrand.com";
const INSTAGRAM_URL = "https://instagram.com/the.knwnbrand";
const RESPONSE_HOURS = 24;

// ── Per-service copy ──────────────────────────────────────────────────────────

const SERVICE_MESSAGES: Record<string, { subject: string; body: string }> = {
  "personalized-coaching": {
    subject: "Your One-on-One Coaching Inquiry | KNWN Brand",
    body: `One-on-one coaching at KNWN is built around one thing — you. Every session is structured around your athlete's current skill profile, movement efficiency, and long-term goals. No wasted reps. No generic plans.

Sean will reach out to review your athlete's background and goals, and to discuss what a personalized training plan looks like for them. Come ready to talk about where your athlete is today and where they want to be.`,
  },
  "semi-private-training": {
    subject: "Your Small-Group Training Inquiry | KNWN Brand",
    body: `Small-group training at KNWN is intentionally capped — which means every athlete in the session gets real attention, real feedback, and real progression. This isn't a class. It's structured development in a competitive environment.

Sean will reach out to discuss your athlete's current level and to confirm the right group fit. Placement is intentional — so come ready to share where your athlete is and what they're working toward.`,
  },
  "knwn-academy": {
    subject: "Your KNWN Academy Inquiry | KNWN Brand",
    body: `KNWN Academy is built for programs that want more than gym time — they want measurable growth. Full floor access, structured progressions, and coaching support designed around your entire roster.

Sean will reach out to learn more about your program, your current training schedule, and what development goals you're working toward this season. This is a partnership — and it starts with a real conversation.`,
  },
  "classes-tumbling-stunting": {
    subject: "Your Curated Classes Inquiry | KNWN Brand",
    body: `KNWN classes are structured, capped, and coached — not drop-in sessions. Every class is built around clear progressions with measurable outcomes, whether your athlete is building fundamentals or advancing to higher-level skills.

Sean will reach out to confirm your athlete's current skill level and to place them in the right class block. Placement matters — expect an honest conversation about where your athlete is and where they're headed.`,
  },
  "high-school-college-pathway": {
    subject: "Your College Consulting Inquiry | KNWN Brand",
    body: `The college path doesn't have to be uncertain. KNWN's college consulting program is a structured roadmap — built around your athlete's skill level, timeline, and goals — not a general prep course.

Sean will reach out to review your athlete's profile and start outlining what intentional preparation looks like for their specific collegiate goals. Come ready to talk skill expectations, timelines, and what success looks like for your family.`,
  },
  "mental-performance-training": {
    subject: "Your Mental Performance Inquiry | KNWN Brand",
    body: `The mental side of performance is where most athletes fall behind — and where KNWN athletes gain the edge. The KNWN Mental Performance Program is a structured 6 or 10-week journey built around focus, composure, and competitive consistency.

Sean will reach out to discuss your athlete's specific mental performance goals and to determine which program structure fits best. Come ready to talk about where the mental game is showing up — or not showing up — in practice and competition.`,
  },
  "social-media-guidance": {
    subject: "Your Social Media Guidance Inquiry | KNWN Brand",
    body: `Visibility matters — but only when it's built on something real. KNWN's Social Media Guidance program is built for athletes who want to stand out without chasing trends. Authentic positioning. Professional presence. Purpose-driven content.

Sean will reach out to review your athlete's current online presence and goals, and to outline what a visibility strategy looks like at their level. Come ready to talk about where your athlete wants to be seen and why.`,
  },
};

const DEFAULT_MESSAGE = {
  subject: "Your KNWN Inquiry | KNWN Brand",
  body: `Thank you for reaching out to KNWN. We take every inquiry seriously and review each one before responding.

Sean will be in touch within ${RESPONSE_HOURS} hours to discuss your goals and next steps.`,
};

// ── HTML email builders ───────────────────────────────────────────────────────

function customerEmail(name: string, serviceSlug: string): string {
  const msg = SERVICE_MESSAGES[serviceSlug] ?? DEFAULT_MESSAGE;
  const firstName = name.split(" ")[0];

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,sans-serif;color:#e5e5e5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;">
    <tr><td align="center" style="padding:40px 16px;">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Logo -->
        <tr><td style="padding-bottom:32px;">
          <img src="https://www.knwnbrand.com/images/knwn/knwn-logo.png" alt="KNWN Brand" height="48" style="display:block;" />
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#111111;border-radius:12px;padding:32px;">

          <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#e5e5e5;">
            Hi ${firstName},
          </p>

          <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#d4d4d4;">
            We received your inquiry and your spot is noted. Here's what to expect next.
          </p>

          <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#d4d4d4;">
            ${msg.body.replace(/\n\n/g, '</p><p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#d4d4d4;">')}
          </p>

          <!-- Response time callout -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="background:#1a1a1a;border-left:3px solid #00A5E9;border-radius:0 8px 8px 0;padding:16px 20px;margin:24px 0;">
              <p style="margin:0;font-size:14px;color:#a3a3a3;">
                <strong style="color:#e5e5e5;">What happens next:</strong> Sean will personally review your inquiry and reach out within <strong style="color:#e5e5e5;">${RESPONSE_HOURS} hours</strong> to discuss your goals and next steps.
              </p>
            </td></tr>
          </table>

          <!-- Instagram CTA -->
          <p style="margin:24px 0 8px;font-size:14px;color:#a3a3a3;">
            In the meantime, follow along on Instagram to see what we're building at KNWN:
          </p>
          <a href="${INSTAGRAM_URL}" style="display:inline-block;background:#00A5E9;color:#ffffff;text-decoration:none;padding:10px 20px;border-radius:999px;font-size:14px;font-weight:bold;">
            @the.knwnbrand →
          </a>

        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:24px 0 0;text-align:center;">
          <p style="margin:0;font-size:12px;color:#525252;">
            KNWN Brand &bull; Colorado&apos;s Premier Cheerleading Training Center<br />
            <a href="mailto:info@knwnbrand.com" style="color:#737373;text-decoration:none;">info@knwnbrand.com</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function seanNotificationEmail(data: {
  name: string;
  email: string;
  phone: string;
  intent: string;
  service: string;
  sport: string;
  referralSource: string;
  message: string;
}): string {
  const serviceLabel =
    SERVICE_MESSAGES[data.service]
      ? data.service.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
      : data.service || "Not specified";

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:32px 16px;background:#f5f5f5;font-family:Arial,sans-serif;color:#111;">
  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#fff;border-radius:8px;padding:32px;">
    <tr><td>
      <h2 style="margin:0 0 4px;font-size:20px;color:#111;">New Inquiry — ${data.name}</h2>
      <p style="margin:0 0 24px;font-size:13px;color:#666;">${new Date().toLocaleString("en-US", { timeZone: "America/Denver" })} MT</p>

      <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
        ${[
          ["Name", data.name],
          ["Email", `<a href="mailto:${data.email}">${data.email}</a>`],
          ["Phone", data.phone],
          ["Intent", data.intent === "book-consultation" ? "Book Consultation" : "Learn More About"],
          ["Service", serviceLabel],
          ["Sport", data.sport],
          ["How they heard about us", data.referralSource],
        ]
          .map(
            ([label, value], i) =>
              `<tr style="background:${i % 2 === 0 ? "#f9f9f9" : "#fff"};">
                <td style="padding:8px 12px;font-weight:bold;color:#444;width:40%;border:1px solid #eee;">${label}</td>
                <td style="padding:8px 12px;color:#111;border:1px solid #eee;">${value || "—"}</td>
              </tr>`
          )
          .join("")}
        ${
          data.message
            ? `<tr style="background:#f9f9f9;">
                <td style="padding:8px 12px;font-weight:bold;color:#444;vertical-align:top;border:1px solid #eee;">Message</td>
                <td style="padding:8px 12px;color:#111;border:1px solid #eee;">${data.message}</td>
              </tr>`
            : ""
        }
      </table>

      <p style="margin:24px 0 0;font-size:13px;color:#999;">
        Reply directly to this email to respond to ${data.name}.
      </p>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      name: string;
      email: string;
      phone: string;
      intent: string;
      service: string;
      sport: string;
      referralSource: string;
      message: string;
    };

    const { name, email, service } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const serviceMsg = SERVICE_MESSAGES[service] ?? DEFAULT_MESSAGE;

    await Promise.all([
      // Customer auto-reply
      resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        replyTo: SEAN_EMAIL,
        subject: serviceMsg.subject,
        html: customerEmail(name, service),
      }),
      // Sean notification
      resend.emails.send({
        from: FROM_ADDRESS,
        to: SEAN_EMAIL,
        replyTo: email,
        subject: `New Inquiry — ${name} — ${service || "No service selected"}`,
        html: seanNotificationEmail(body),
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
