// import { NextResponse } from "next/server";
// import { withAuth } from "next-auth/middleware";

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     const { details: user, access, refresh } = req.nextauth.token;

//     if (user?.is_staff && req.url.includes("/dashboard")) {
//       return NextResponse.redirect(new URL("/admin", req.url));
//     }
//     if (req.url.includes("/admin") && !user.is_staff) {
//       return NextResponse.redirect(new URL("/dashboard", req.url));
//     }
//     if (user.is_active !== true) {
//       return NextResponse.redirect(new URL("/unauthorized", req.url));
//     }
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => token?.details?._id,
//     },
//   }
// );

// export const config = {
//   matcher: ["/dashboard/:path*", "/admin/:path*"],
// };

import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
