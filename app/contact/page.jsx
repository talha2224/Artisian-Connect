import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

export const metadata = {
  title: 'Artisian Connect- Contact-Page',
  description: 'Artisian Connect Contact-Page ',
}
const page = () => {
  return (
    <div>
      <Navbar/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page
