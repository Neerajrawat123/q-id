import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <div className='w-full  z-10 py-2 border-b-[0.2px] font-primary-font  bg-black  border-slate-900 fixed top-0'>
        <div className='max-w-[1140px] w-full mx-auto  flex py-[10px]  text-main-text'>
            <div className='pl-6'>
                <Link className='text-[38px] font-semibold text-logo-col italic' href={'/'}>qid</Link>
            </div>
            <div className='flex-1 flex justify-end px-6 '>
                <div className='flex gap font-semibold'>
                    <Link className='px-5 hover:text-white py-3' href={'/app'}>App</Link>
                    <Link  className='px-5 hover:text-white py-3' href={'/home/c-form-automation-for-hotels'}>C-form Pro</Link>

                    <Link className='px-5 hover:text-white py-3' href={'/support'}>Contact</Link>

                </div>


            </div>
        </div>

    </div>
  )
}
