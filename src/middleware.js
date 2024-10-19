// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token"); // Use get method

  console.log(token); // Log to see if token is retrieved

  // Check if token exists
  /* if (!token) {
    // If not authenticated, redirect to login with the desired route as a query parameter
    const desiredRoute = req.nextUrl.pathname;
    return NextResponse.redirect(
      new URL(`/login?redirect=${encodeURIComponent(desiredRoute)}`, req.url)
    );
  } */

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/package-booking/:path*",
    "/ticket-booking/:path*",
  ], // Adjust this to match your dashboard routes
};
