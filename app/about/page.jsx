import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'


export const metadata = {
    title: 'Artisian Connect-About-Page',
    description: 'Artisian Connect About Page',
}
const page = () => {
  return (
    <div>
      <Navbar/>
      <p>ABOUT</p>
      <Footer/>
    </div>
  )
}

export default page
