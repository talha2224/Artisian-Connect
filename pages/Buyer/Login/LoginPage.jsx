import Form from '@/components/form/Form'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <Navbar />
        <Form heading='Buyer Login' isLogin={true} span='Register' link='/buyer/register' buttonText='Login' alreadytext="Don't have an account"/>
    </div>
  )
}

export default LoginPage