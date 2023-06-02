import React from 'react'

const Content = () => {
  return (
    <div className='mt-20   md:mt-20 -z-50'>

        <div className='pl-6 md:flex md:justify-between md:items-center'>
            <div>
                <h1 className='text-xl font-bold mb-6 '>Welcome to Artisan Connect</h1>
                <p className='font-semibold md:w-96'>Discover unique handcrafted creations from local artisans at Artisan Connect. Support small businesses and embrace authenticartistry while shopping with confidence. Join our vibrant artisan community and explore a curated selection of one-of-a-kind products.Start your journey into the world of handmade treasures today.</p> 
            </div>
            <img src="./home.png" alt="" className='mt-10 md:mt-0 md:mb-0 w-[22rem] h-[22rem] object-cover	bg-center'/>
        </div>

        {/* ACTIVE CLEINTS  */}
        <div className='flex md:justify-between justify-center  gap-4 items-center flex-wrap mt-10 mb-20 pl-6 pr-6'>

            <div className='shadow-custom w-56 h- h-52 mt-10 rounded-md flex justify-center items-center flex-col'>
                <div className='flex justify-center mt-3 '>
                    <div className='w-12 h-12 rounded-full bg-[#2F2E30] flex justify-center items-center backdrop-opacity-5 -z-50'>
                        <img src="./shop.png" alt="" className='w-10 h-10 rounded-full bg-black p-2 -z-50' />
                    </div>
                </div>
                <h1 className='text-center mt-2 font-bold text-xl'>10.5k </h1>
                <p className='text-center mt-2 font-semibold'>Sellers active our site</p>
            </div>

            <div className='shadow-custom  w-56 h-52 mt-10 flex justify-center items-center flex-col rounded-md bg-[#DB4444]'>
                <div className='flex justify-center mt-3 '>
                    <div className='w-12 h-12 bg-slate-400 flex justify-center items-center rounded-full'>
                        <img src="./sale.png" alt="none" className='w-10 h-10 bg-white rounded-full'/>
                    </div>
                </div>
                <h1 className='text-center mt-2 font-bold text-xl text-white'>33k </h1>
                <p className='text-center mt-2 font-semibold text-white'>Monthly Product Sale</p>
            </div>


            
            <div className='shadow-custom flex justify-center items-center flex-col w-56 h-52 mt-10 rounded-md'>
                <div className='flex justify-center mt-3 '>
                    <div className='w-12 h-12 rounded-full bg-[#2F2E30] flex justify-center items-center backdrop-opacity-5 -z-50'>
                        <img src="./shoping.png" alt="" className='w-10 h-10 rounded-full bg-black p-2 -z-50'/>
                    </div>
                </div>
                <h1 className='text-center mt-2 font-bold text-xl'>45.5k</h1>
                <p className='text-center mt-2 font-semibold'>Customer active in our site</p>
            </div>

            
            <div className='shadow-custom flex justify-center items-center flex-col w-56 h-52 mt-10 rounded-md'>
                <div className='flex justify-center mt-3 '>
                    <div className='w-12 h-12 rounded-full bg-[#2F2E30] flex justify-center items-center -z-50'>
                        <img src="./shop.png" alt="" className='w-10 h-10 rounded-full bg-gray  m-2 p-2 -z-50'/>
                    </div>
                </div>
                <h1 className='text-center mt-2 font-bold text-xl'>25k</h1>
                <p className='text-center mt-2 font-semibold'>Annual gross sale in our site</p>
            </div>


        </div>
    </div>
  )
}

export default Content
