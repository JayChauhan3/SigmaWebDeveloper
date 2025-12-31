import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

  return NextResponse.json({message:"Hello from the about page"})   //add message to /about page(Export on the particular page)
  return NextResponse.redirect(new URL('/', request.url))
}
 
// upper message shown on this page
export const config = {                 
  matcher: '/about/:path*',
}

 //Rewrite
// export function middleware(request) {
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.rewrite(new URL('/', request.url))
//   }
 
//Redirect
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.redirect(new URL('/', request.url))
//   }
// }

