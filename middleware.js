import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;
  const hasWorkFull = url.searchParams.get('work') === 'full';
  const isWorkPage = url.pathname === '/work';
  const response = NextResponse.next();

  if (hasWorkFull || isWorkPage) {
    // Set a session cookie
    response.cookies.set('fullWorkHistory', 'true', { path: '/' });
  }

  return response;
}

// Optionally, configure which paths the middleware runs on
export const config = {
  matcher: [
    /*
      Match all pages except static files and API routes
      Adjust as needed for your site
    */
    '/((?!_next|api|static|favicon.ico).*)',
  ],
};

export async function getServerSideProps({ req }) {
  // Read the cookie from the request headers
  const cookie = req.headers.cookie || '';
  const fullWorkHistory = cookie.includes('fullWorkHistory=true');
  return {
    props: {
      fullWorkHistory,
    },
  };
}