import React from 'react';

const Input = ({ placeholder, inputStyle,type,Icon,inputContainerStyle,value,onchange}) => {

  return (
    <div className={inputContainerStyle}>
      <input type={type} className={inputStyle} placeholder={placeholder} value={value} onChange={(e)=>onchange(e)} />
      {
        Icon ? Icon : <></>
      }
    </div>
  );
};

export default Input;

