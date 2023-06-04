import Form from '@/components/form/Form'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const RegisterPage = () => {
  return (
    <div>
        <Navbar/>
        <Form heading='Buyer Register' isLogin={false} span='Login' link='/buyer/login' buttonText='Register' alreadytext='Already have an account'/>
    </div>
  )
}

export default RegisterPage