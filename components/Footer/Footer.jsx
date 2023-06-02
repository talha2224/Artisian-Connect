import Link from 'next/link'
import React from 'react'
import {BiRightArrow} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='bg-black w-screen p-10 md:flex md:justify-between md:flex-wrap '>

      <div className='mb-6 md:mb-0'>
        <h1 className='text-white mb-2 tracking-wide text-lg'>Artisian Connect .</h1>
        <h2 className='text-white mb-2 tracking-wide text-sm cursor-pointer'>Subscribe</h2>
        <p className='text-white mb-2 tracking-wider text-xs cursor-pointer'>Get 10% off your first order</p>
        <div className='flex items-center'>
            <input type="text" className='rounded-lg pl-4 pr-10 h-10 outline-none bg-black text-white border-solid border-2 border-sky-500' placeholder='Enter your email' />
            <BiRightArrow className='bg-gray text-white text-2xl cursor-pointer -ml-10'/>
        </div>
      </div>

      <div className='mb-6 md:mb-0'>
        <h1 className='text-white mb-2 tracking-wide text-lg'>Support</h1>
        <h2 className='text-white mb-2 tracking-wide text-sm cursor-pointer'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h2>
        <p className='text-white mb-2 tracking-wider text-sm cursor-pointer'>exclusive@gmail.com</p>
        <p className='text-white text-sm cursor-pointer'>+88015-88888-9999</p>
      </div>

      <div className='mb-6 md:mb-0'>
        <h1 className='text-white mb-2 tracking-wide text-lg'>Accounts</h1>
        <h2 className='text-white mb-2 tracking-wide text-sm cursor-pointer'>My Account</h2>

        <Link href='/buyer/register'>
            <p className='text-white mb-2 tracking-wider text-sm cursor-pointer'>Login / Register</p>
        </Link>
        <p className='cursor-pointer text-white mb-2 text-sm'>Cart</p>
        <p className='cursor-pointer text-white mb-2 text-sm'>Whishlist</p>
      </div>

      <div className='mb-6 md:mb-0'>
        <h1 className='text-white mb-2 tracking-wide text-lg'>Quick Link</h1>
        <h2 className='text-white mb-2 tracking-wide text-sm cursor-pointer'>Privacy</h2>
        <p className='text-white mb-2 tracking-wider text-sm cursor-pointer'>Policy</p>
        <p className='cursor-pointer text-white mb-2 text-sm' >Terms of use</p>
        <p className='cursor-pointer text-white mb-2 text-sm'>FAQ</p>
        <p className='cursor-pointer text-white mb-2 text-sm' >Contact</p>
      </div>

    </div>
  )
}

export default Footer
