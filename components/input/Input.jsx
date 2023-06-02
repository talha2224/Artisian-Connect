import React from 'react';

const Input = ({ placeholder, inputStyle,type,Icon,inputContainerStyle}) => {

  return (
    <div className={inputContainerStyle}>
      <input type={type} className={inputStyle} placeholder={placeholder} />
      {
        Icon ? Icon : <></>
      }
    </div>
  );
};

export default Input;

