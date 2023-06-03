import Footer from '@/components/Footer/Footer'
import Input from '@/components/input/Input'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-center  gap-6 items-center flex-wrap h-[59vh]'>
          <Input placeholder={'Your country'} inputStyle=' md:mb-0 mb-12 mt-4 w-[17rem] pl-4 pr-4 h-9 border border-gray-300 rounded-md outline-none' type='text'/>
          <Input placeholder={'Your city'} inputStyle='mt-4 w-[17rem] pl-4 pr-4 h-9 border border-gray-300 rounded-md outline-none' type='text'/>
          <button className='mt-4 bg-blue-500 text-white p-2 w-44 h-10 rounded-md'>Submit</button>
      </div>
      <Footer/>
    </div>
  )
}

export default page
