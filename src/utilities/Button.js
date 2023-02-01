import React from 'react';

import '../styles/Custom.css'
import { Link } from 'react-router-dom';

const Button = ({ btnText, destination }) => {
    return (
        <Link to={destination} className='btn btn-primary px-5 py-1 text-base relative z-10 text-white btn-custom font-semibold'>{btnText}</Link>
    );
};

export default Button;
