import { revalidateTag, revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

/**
 * Webhook endpoint for Sanity to trigger content revalidation
 * Configure this URL in Sanity Studio at Project Settings → API → Webhooks
 * Endpoint: {YOUR_DOMAIN}/api/revalidate
 * Method: POST
 * Events: Publish, Create, Update, Delete
 */

export async function POST(request: NextRequest) {
  try {
    // Verify webhook secret
    const secret = request.headers.get("X-Sanity-Webhook-Secret");

    if (!secret || secret !== WEBHOOK_SECRET) {
      console.warn("Unauthorized webhook request");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { _type, _id } = body;

    console.log(`Webhook triggered for ${_type} (${_id})`);

    // Revalidate based on document type
    switch (_type) {
      case "project":
        console.log("Revalidating product content...");
        revalidateTag("projects");
        revalidatePath("/projects");
        revalidatePath("/projects/[slug]", "page");
        revalidatePath("/");
        break;

      case "lookbook":
        console.log("Revalidating lookbook content...");
        revalidateTag("lookbooks");
        revalidatePath("/lookbook");
        revalidatePath("/lookbook/[slug]", "page");
        revalidatePath("/");
        break;

      default:
        console.log(`Unknown document type: ${_type}`);
    }

    return NextResponse.json(
      {
        success: true,
        message: `Content revalidated for ${_type}`,
        documentId: _id,
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      {
        error: "Webhook processing failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json(
    {
      status: "healthy",
      message: "Revalidation webhook endpoint is running",
      timestamp: new Date().toISOString(),
    },
    { status: 200 },
  );
}
