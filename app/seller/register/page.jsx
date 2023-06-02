import Form from '@/components/form/Form'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

export const metadata = {
  title: 'Artisian Connect-Seller-Register',
  description: 'Artisian Connect Seller-Register',
}

const page = () => {
  return (
    <div>
      <Navbar/>
      <Form heading='Seller Register' isLogin={false} span='Login' link='/seller/login' buttonText='Register' alreadytext='Already have an account'/>
    </div>
  )
}

export default page
