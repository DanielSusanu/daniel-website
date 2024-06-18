import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Comming soon',
  description: 'This site is under construction',
};

function page() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div>
        <h1 className='font-bold text-2xl'>#Comming Soon</h1>
        <h2 className='text-lg'>Daniel Susanu</h2>
      </div>
    </div>
  );
}

export default page;
