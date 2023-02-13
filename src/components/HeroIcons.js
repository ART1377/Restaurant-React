import React from 'react';
import css from '../components/HeroIcons.module.css'

const HeroIcons = ({children}) => {
  return (
    <>
      <div className={css.icon}>{children}</div>
    </>
  );
};

export default HeroIcons;
