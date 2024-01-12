import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { useStore } from "./store/store";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/lista/:path*", "/nueva-persona/:path*", "/recolectores/:path*"],
};
