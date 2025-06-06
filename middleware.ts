import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  // Only apply middleware to API routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    // Skip auth check for NextAuth routes and public endpoints
    const publicRoutes = [
      '/api/auth',
      '/api/health',
      '/api/public'
    ]
    
    const isPublicRoute = publicRoutes.some(route => 
      request.nextUrl.pathname.startsWith(route)
    )
    
    if (isPublicRoute) {
      return NextResponse.next()
    }
    
    try {
      // Get the JWT token from the request
      const token = await getToken({ 
        req: request, 
        secret: process.env.AUTH_SECRET 
      })
      
      if (!token) {
        return NextResponse.json(
          { 
            error: 'Unauthorized', 
            message: 'No valid session found' 
          },
          { status: 401 }
        )
      }
      
      // Optional: Add user info to headers for API routes to use
      const response = NextResponse.next()
      response.headers.set('x-user-id', token.sub || '')
      response.headers.set('x-user-email', token.email || '')
      response.headers.set('x-user-role', (token.role as string) || '')
      
      return response
      
    } catch (error) {
      console.error('Middleware auth error:', error)
      return NextResponse.json(
        { 
          error: 'Authentication Error', 
          message: 'Failed to verify session' 
        },
        { status: 401 }
      )
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/api/:path*'
  ]
}