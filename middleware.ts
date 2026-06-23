import { NextRequest, NextResponse } from 'next/server'

// Password-gate the private "classes Minta should take" page.
// HTTP Basic Auth: the browser shows its native password prompt and the page
// content is only served after a correct password. Username can be anything.
// Override the default by setting MINTA_CLASSES_PASSWORD in the environment.
export function middleware(req: NextRequest) {
  const expected = process.env.MINTA_CLASSES_PASSWORD || 'MintaLearns26'
  const auth = req.headers.get('authorization')
  if (auth) {
    const [scheme, encoded] = auth.split(' ')
    if (scheme === 'Basic' && encoded) {
      try {
        const decoded = atob(encoded)
        const pass = decoded.slice(decoded.indexOf(':') + 1)
        if (pass === expected) return NextResponse.next()
      } catch {
        // fall through to 401
      }
    }
  }
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Plan B — private", charset="UTF-8"' },
  })
}

export const config = { matcher: ['/minta-classes', '/minta-classes/:path*'] }
