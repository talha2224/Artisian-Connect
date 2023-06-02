import React from 'react'

const PopUp = ({message,msgStyle,containerStyle}) => {
  return (
    <div className='mt-20 ml-4'>
      <div className={`w-[15rem] flex justify-center items-center h-12 shadow-custom ${containerStyle} rounded-lg`}>
        <p className={msgStyle}>{message}</p>
      </div>
    </div>
  )
}

export default PopUp
