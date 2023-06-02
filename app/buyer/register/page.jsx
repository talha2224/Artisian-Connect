import React from 'react'
import Form from '@/components/form/Form'
import Navbar from '@/components/navbar/Navbar'


export const metadata = {
  title: 'Artisian Connect-Buyer-Register',
  description: 'Artisian Connect Buyer-Register',
}

const page = () => {
  return (
    <div>
      <Navbar/>
      <Form heading='Buyer Register' isLogin={false} span='Login' link='/buyer/login' buttonText='Register' alreadytext='Already have an account'/>
    </div>
  )
}

export default page
