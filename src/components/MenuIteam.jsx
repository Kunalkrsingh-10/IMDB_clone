import React from 'react';
import Link from 'next/link';

export default function MenuIteam({ title, address, icon: Icon }) {
  return (
    <Link href={address} className="flex items-center gap-2 hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline">{title}</p>
    </Link>
  );
}
