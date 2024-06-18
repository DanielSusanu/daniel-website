import { cookies } from 'next/headers';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { CustomMiddleware } from './chain';
import { UNDER_CONSTRUCTION } from '@/lib/constants';

export function mainMiddleware(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    // The first middleware in the chain has to create the response
    // object and pass it down the chain.
    const requestHeaders = new Headers(request.headers);

    let response = NextResponse.next();
    const pathname = request.nextUrl.pathname;

    if (UNDER_CONSTRUCTION) {
      const canPreviewCookie = cookies().get('can_preview');
      if (
        !canPreviewCookie &&
        pathname != '/comming-soon' &&
        pathname != '/api/bypass-under-construction'
      ) {
        return NextResponse.redirect(new URL(`/comming-soon`, request.url));
      }
    }
    return middleware(request, event, response);
  };
}
