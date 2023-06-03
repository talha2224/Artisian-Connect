import React from 'react'

const About = () => {
  return (
    <div className='mt-24 pl-6 pr-6 mb-10'>
        <div className='md:flex md:justify-between '>
            <div>
                <h1 className='text-lg font-bold mb-5'>Our Story</h1>
                <p className='text-sm font-bold mb-5 text-gray-600 md:w-[28rem] w-[100%]'>
                    Artisan Connect, established in 2023, is a global platform that showcases the best artisans from around the world. We bring together a diverse community of talented craftsmen and women who create unique, handcrafted products. Our mission is to support local artisans, preserve traditional techniques, and provide a marketplace where buyers can discover exceptional artistry from across cultures and continents. 
                </p>
                <p className='text-sm font-bold mb-5 text-gray-600 md:w-[28rem] w-[100%]'>
                    Discover the beauty of handmade creations and connect with artisans worldwide at Artisan Connect. From traditional craftsmanship to contemporary designs, our platform offers a curated selection of quality, authentic products. Join our global artisan community, engage in conversations, and support talented individuals who pour their passion into every creation. Start exploring today and uncover the extraordinary artistry that exists around the globe.
                </p>

            </div>

            <div>
                <img src="./painting.jpg" alt="" className='mt-10 md:mt-0 md:mb-0 md:w-[22rem] md:h-[22rem] w-screen object-cover bg-center'/>
            </div>
        </div>
    </div>
  )
}

export default About
