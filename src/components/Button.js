import React from 'react';
import css from './Button.module.css';

const Button = ({name,children,addClass,type,func}) => {
  const btnType=type||'';
  return (
    <>
        <button onClick={func&&func} type={btnType} className={`${addClass} ${css[name]}`}>{children}</button>
    {/*    <button className={name}>{children}</button> */}
    </>
  );
};

export default Button;
