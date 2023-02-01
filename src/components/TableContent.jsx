import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../utilities/SectionHeading';

const TableContent = () => {
    const heading = {
        subHeading: "Team", headingOne: "All", headingTwo: "Team member", describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    }

    const [userDetails, setUserDetails] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUserDetails(data))


    }, [])

    return (
        <div>
            <SectionHeading heading={ heading } />
            <div className='flex flex-col gap-5 bg-slate-200 py-5 md:px-10 px-5 lg:px-20'>
                { userDetails.map(((data) => {
                    const { id, name, username, address } = data;

                    return <div className='grid lg:grid-cols-5 sm:grid-flow-row text-left shadow-lg p-10 bg-white rounded-lg'>
                        <div className='flex justify-start items-center'>
                            <h2 className='text-lg font-medium hover:text-primary cursor-pointer transition-all duration-150 ease-in-out'>Hello { username }</h2>
                        </div>
                        <div>
                            <h1 className='text-lg font-medium'>Contact</h1>
                            <p>{ name }</p>
                        </div>
                        <div>
                            <h1 className='text-lg font-medium'>Street</h1>
                            <p>{ address.street }</p>
                        </div>
                        <div>
                            <h1 className='text-lg font-medium'>City</h1>
                            <p>{ address.city }</p>
                        </div>
                        <div className='flex justify-end items-center'>
                            <Link className="btn btn-primary hover:btn-secondary text-white rounded-full capitalize" to={ `/details/${ id }` }>View Details</Link>
                        </div>
                    </div>
                }))
                }
            </div>
        </div>
    );
};

export default TableContent;
