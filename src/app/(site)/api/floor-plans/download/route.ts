import { verifyFloorPlanToken } from "@/lib/site/floorPlanToken";
import { floorPlanKey, towerLabel } from "@/lib/floorPlans";
import { getUpload } from "@/lib/admin/storage";

export const dynamic = "force-dynamic";

function errorPage(message: string, status: number): Response {
  const html = `<!doctype html><html><body style="font-family:sans-serif;text-align:center;padding:60px 20px;">
    <h1>${message}</h1>
    <p>Please go back and submit the download form again to get a new link.</p>
  </body></html>`;
  return new Response(html, { status, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");
  if (!token) return errorPage("Missing download link.", 400);

  const payload = verifyFloorPlanToken(token);
  if (!payload) return errorPage("This download link has expired or is invalid.", 410);

  const object = await getUpload(floorPlanKey(payload.tower));
  if (!object) {
    return errorPage(`The ${towerLabel(payload.tower)} floor plan isn't available right now.`, 404);
  }

  const headers = new Headers({
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment; filename="${payload.tower}-tower-floor-plan.pdf"`,
    "Cache-Control": "private, no-store",
  });
  if (object.contentLength !== undefined) headers.set("Content-Length", String(object.contentLength));

  return new Response(object.body, { headers });
}
