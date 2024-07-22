import {clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(/^(?!\/(sign-in|sign-up)).*$/);
const isPublicRoute = createRouteMatcher(/^\/api\/.*$/);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) return;
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
