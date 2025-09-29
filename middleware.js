import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const userRole = token?.role;

  // --- Protected Routes ---
  const isAdminRoute = pathname.startsWith('/admin-dashboard');
  const isStudentRoute = pathname.startsWith('/student-dashboard');

  // If the user is not authenticated, redirect them to the sign-in page
  if (!token) {
    if (isAdminRoute || isStudentRoute) {
      console.log(`[MIDDLEWARE] No token found. Redirecting to /signin from ${pathname}`);
      const signinUrl = req.nextUrl.clone();
      signinUrl.pathname = '/signin';
      signinUrl.searchParams.set('callbackUrl', pathname); // Save where they were going
      return NextResponse.redirect(signinUrl);
    }
    return NextResponse.next();
  }

  // --- Role-Based Protection ---

  // If a student tries to access an admin route
  if (isAdminRoute && userRole !== 'admin') {
    console.log(`[MIDDLEWARE] Student tried to access admin route. Redirecting.`);
    const studentDashboardUrl = req.nextUrl.clone();
    studentDashboardUrl.pathname = '/student-dashboard';
    return NextResponse.redirect(studentDashboardUrl);
  }

  // If an admin tries to access a student route
  if (isStudentRoute && userRole !== 'student') {
    console.log(`[MIDDLEWARE] Admin tried to access student route. Redirecting.`);
    const adminDashboardUrl = req.nextUrl.clone();
    adminDashboardUrl.pathname = '/admin-dashboard';
    return NextResponse.redirect(adminDashboardUrl);
  }

  // If all checks pass, allow the request to continue
  return NextResponse.next();
}

// This config specifies which routes the middleware should run on.
export const config = {
  matcher: ['/admin-dashboard/:path*', '/student-dashboard/:path*'],
};