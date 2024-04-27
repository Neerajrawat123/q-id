import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <div className='w-full  z-10 py-2 border-b-[0.2px]  bg-black  border-slate-900 fixed top-0'>
        <div className='max-w-[1040px] mx-auto   flex py-2 gap-6 text-white'>
            <div>
                <Link className='text-4xl font-semibold italic' href={'/'}>qid</Link>
            </div>
            <div className='flex-1 flex justify-end px-6 '>
                <div className='flex gap'>
                    <Link className='px-5 py-3' href={'/'}>App</Link>
                    <Link  className='px-5 py-3' href={'/'}>C-form</Link>

                    <Link className='px-5 py-3' href={'/'}>Contact</Link>

                </div>


            </div>
        </div>

    </div>
  )
}
