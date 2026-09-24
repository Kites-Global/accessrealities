import { auth } from "@/lib/admin/auth";
import { getUpload } from "@/lib/admin/storage";
import { PUBLIC_MEDIA_FOLDERS } from "@/lib/admin/media";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ key: string[] }> }) {
  const { key: segments } = await params;

  // Nothing may climb out of the folder it was uploaded into.
  if (segments.length < 2 || segments.some((segment) => !segment || segment === "." || segment === "..")) {
    return new Response("Not found", { status: 404 });
  }

  const folder = segments[0];
  const isPublic = PUBLIC_MEDIA_FOLDERS.includes(folder);

  // Private folders (CVs) are admin-only. 404 rather than 401 so the route doesn't
  // confirm which keys exist to anyone who isn't signed in.
  if (!isPublic) {
    const session = await auth();
    if (!session?.user) return new Response("Not found", { status: 404 });
  }

  const object = await getUpload(segments.join("/"));
  if (!object) return new Response("Not found", { status: 404 });

  const headers = new Headers({
    "Content-Type": object.contentType,
    // Keys are UUIDs, so a stored object never changes under the same URL.
    "Cache-Control": isPublic ? "public, max-age=31536000, immutable" : "private, no-store",
  });
  if (object.contentLength !== undefined) headers.set("Content-Length", String(object.contentLength));
  if (object.etag) headers.set("ETag", object.etag);

  return new Response(object.body, { headers });
}
