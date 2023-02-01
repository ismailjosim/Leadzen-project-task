import React from 'react';
import '../styles/Custom.css'

const SectionHeading = ({ heading }) => {
    const { subHeading, headingOne, headingTwo, describe } = heading
    return (
        <div className='lg:py-10 py-5 text-center'>
            <h3 className='text-secondary text-2xl font-semibold'>{subHeading}</h3>
            <h2 className='font-extrabold lg:text-5xl md:text-3xl text-2xl my-2'>{headingOne} <span className='text-primary'>{headingTwo}</span></h2>
            <p className='lg:w-1/2 mx-auto text-base'>{describe}</p>
        </div>
    );
};

export default SectionHeading;
