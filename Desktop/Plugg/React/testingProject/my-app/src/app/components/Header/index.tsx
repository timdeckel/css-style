import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex h-[10%] w-full items-center pl-8 bg-gray-300'>
        <Link rel="stylesheet" href="/">
            <div className="">HOME</div>
        </Link>
        <p className='ml-8'>click here to get to the start!</p>
    </div>
  )
}
