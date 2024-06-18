import { UNDER_CONSTRUCTION_COOKIE_NAME } from '@/lib/constants';
import { time } from '@/lib/utils';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET() {
  cookies().set({
    name: UNDER_CONSTRUCTION_COOKIE_NAME,
    value: '1',
    httpOnly: true,
    secure: true,
    path: '/',
    expires: Date.now() + time.daysToMilliseconds(30),
  });
  redirect('/');
}
