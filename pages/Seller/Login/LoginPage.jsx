import Form from '@/components/form/Form'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <Navbar />
        <Form heading='Seller Login' isLogin={true} span='Register' link='/seller/register' buttonText='Login' alreadytext="Don't have an account"/>
    </div>
  )
}

export default LoginPage