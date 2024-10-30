import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex h-[10%] w-full items-center pl-5 bg-gray-300'>
        <Link rel="stylesheet" href="/">
            <div className="p-3">HOME</div>
        </Link>
        <p className='ml-8'> click home to get to the start!</p>
    </div>
  )
}
