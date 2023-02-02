import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Details = () => {
    const { name, email, address, phone, website, company } = useLoaderData();
    return (
        <div className="bg-slate-200 shadow-lg mx-auto rounded-lg">
            <div className='w-11/12 py-20 mx-auto'>
                <div className='grid lg:grid-cols-5 gap-5 lg:gap-0 md:gap-0 sm:grid-flow-row text-left shadow-sm bg-slate-50 p-10 rounded-lg'>
                    <div className='flex justify-start items-center'>
                        <h2 className='text-lg font-medium hover:text-primary cursor-pointer transition-all duration-150 ease-in-out'>{ name }</h2>
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
                        <Link to={ `/` }><button className="btn btn-primary">Back</button></Link>
                    </div>
                </div>
                <div className='text-left mt-10'>
                    <div className='flex flex-col items-center gap-2'>
                        <h2 className='text-2xl font-semibold mb-3 text-center underline text-primary'>Company Details</h2>
                        <p className='text-2xl'>
                            <span className='font-semibold uppercase'>Name: </span>
                            <span className='text-primary font-bold'>{ company.name }</span>
                        </p>
                        <p>
                            <span className='font-medium'>Catch Phrase: </span>
                            { company.catchPhrase }</p>
                        <p>
                            <span className='font-medium'>BS: </span>
                            { company.bs }
                        </p>
                    </div>
                    <div className='divider'></div>
                    <div className='flex lg:flex-row justify-center sm:flex-col lg:gap-96 gap-10 mt-8'>
                        <div className='flex flex-col gap-5'>
                            <div  >
                                <h2 className='text-lg font-medium'>Contact Person</h2>
                                <p>{ name }</p>
                            </div>

                            <div  >
                                <h2 className='text-lg font-medium'>Website</h2>
                                <p>{ website }</p>
                            </div>

                            <div  >
                                <h2 className='text-lg font-medium'>Email</h2>
                                <p>{ email }</p>
                            </div>

                            <div>
                                <h2 className='text-lg font-medium'>Phone</h2>
                                <p>{ phone }</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div data-aos="fade-up" >
                                <h2 className='text-lg font-medium'>Street</h2>
                                <p>{ address.street }</p>
                            </div>

                            <div data-aos="fade-up" >
                                <h2 className='text-lg font-medium'>Suite</h2>
                                <p>{ address.suite }</p>
                            </div>

                            <div data-aos="fade-up" >
                                <h2 className='text-lg font-medium'>City</h2>
                                <p>{ address.city }</p>
                            </div>

                            <div data-aos="fade-up" >
                                <h2 className='text-lg font-medium'>Zip Code</h2>
                                <p>{ address.zipcode }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Details;
