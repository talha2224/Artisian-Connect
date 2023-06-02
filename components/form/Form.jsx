"use client"
import Input from '@/components/input/Input'
import Link from 'next/link'
import React, { useState } from 'react'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import PopUp from '../errorPopUp/PopUp'

const Form = ({heading,isLogin,buttonText,alreadytext,link,span}) => {

  const [showpassword,setshowpassword] = useState(false)
  const [msg,setMsg] = useState('')
  const [error, seterror] = useState(false)
  const [showPopup, setshowPopup] = useState(false)

  const submitForm = ()=>{
    setMsg('All fields are required')
    seterror(!error)
    setshowPopup(true)
    setTimeout(()=>{
      setshowPopup (false)
      seterror(false)
      setMsg('')
    },4000)
  }
  return (

    <div>
      <div className={`flex w-screen  fixed top-[8rem] -z-50 justify-center items-center flex-col ${isLogin ? 'top-[11.5rem] md:top-[10.6rem]' : null}`}>
        <div className='shadow-custom p-4 h-max rounded-md'>

          <div>
            <p className='font-semibold text-center mb-2'>{heading}</p>
          </div>
            {
              !isLogin ? 
                <div>
                  <p>Name</p>
                  <Input placeholder='Name' inputStyle='mt-4 w-[17rem] pl-4 pr-4 h-9 border border-gray-300 rounded-md outline-none' type='text'/>
                </div>
              : <></>
            }

          <div>
            <p className='mt-4'>Email</p>
            <Input placeholder='Email' inputStyle='mt-4 w-[17rem] pl-4 pr-4 h-9 border border-gray-300 rounded-md outline-none' type='text'/>
          </div>

          <div>
            <p className='mt-4'>Password</p>

            <div className='flex items-center mt-4'>
              <Input placeholder='Password' inputStyle='pl-4 pr-8 h-9 border border-gray-300 rounded-md outline-none'type={showpassword ? 'text' : 'password'} />
              {
                showpassword ? <AiFillEye onClick={()=>setshowpassword(!showpassword)} className='ml-[-24px] cursor-pointer'/>
                : <AiFillEyeInvisible onClick={()=>setshowpassword(!showpassword)} className='ml-[-24px] cursor-pointer'/>
              }
            </div>

          </div>

          <div className='mt-4 text-center'>
            <button className='bg-blue-500 text-white p-2 w-44 h-10 rounded-md' onClick={submitForm}>{buttonText}</button>
          </div>

          <div className='mt-4'>
            <p>{alreadytext} ?
              <Link href={link}>
                <span className='font-semibold cursor-pointer'> {span}</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      {
        showPopup ?<PopUp message={msg} msgStyle={error ?'text-white' : 'text-white'} containerStyle={error?'bg-red-500' :'bg-blue-400'}/> :<></>
      }
    </div>
  )
}

export default Form