import { chain } from '@/middlewares/chain';
import { mainMiddleware } from '@/middlewares/mainMiddleware';

export default chain([mainMiddleware]);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images/).*)'],
};
