
import { NextRequest, NextResponse } from 'next/server'
import { getSessionData } from './utils/createCookie'

export async function middleware(request: NextRequest) {
 
  const currentUser =  await getSessionData()



  if (!currentUser?.isAdmin && request.nextUrl.pathname.startsWith('/admin')) {
     return Response.redirect(new URL("/auth/admin/login", request.url))
  }

  return NextResponse.next()

}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}