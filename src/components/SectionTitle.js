import React from 'react';
import css from './SectionTitle.module.css';

const SectionTitle = ({ title }) => {
  return (
    <>
      <div className={`container-fluid ${css['container']}`}>
        <div className={`row mt-0 text-center py-3 ${css['row']}`}>
          <h3 className={`fw-bold ${css['title']}`}>{title}</h3>
          <div className={`${css['shape']}`}>
            <svg width={244} height={41} viewBox="0 0 244 41" fill="none">
              <path
                d="M1.5 37.525C121.04 -7.98533 172.66 -6.35727 241.5 37.525"
                stroke="#FF3333"
                strokeWidth={7}
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
