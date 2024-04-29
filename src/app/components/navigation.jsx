import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <div className='w-full  z-10 py-2 border-b-[0.2px]  bg-black  border-slate-900 fixed top-0'>
        <div className='max-w-[1140px] mx-auto pl-4   flex py-2 gap-6 text-main-text'>
            <div>
                <Link className='text-4xl font-semibold italic' href={'/'}>qid</Link>
            </div>
            <div className='flex-1 flex justify-end px-6 '>
                <div className='flex gap'>
                    <Link className='px-5 hover:text-white py-3' href={'/app'}>App</Link>
                    <Link  className='px-5 hover:text-white py-3' href={'/home/c-form-automation-for-hotels'}>C-form</Link>

                    <Link className='px-5 hover:text-white py-3' href={'/support'}>Contact</Link>

                </div>


            </div>
        </div>

    </div>
  )
}
