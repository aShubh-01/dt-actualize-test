import { auth } from "@/auth"
import { NextRequest } from "next/server"

// Review if we need this, and why
function stripContentEncoding(result: Response) {
  const responseHeaders = new Headers(result.headers)
  responseHeaders.delete("content-encoding")

  return new Response(result.body, {
    status: result.status,
    statusText: result.statusText,
    headers: responseHeaders,
  })
}

async function handler(request: NextRequest) {
return new Response("Page not found", { status: 501 })
}

export const dynamic = "force-dynamic"

export { handler as GET, handler as POST }
