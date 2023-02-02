import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Details = () => {
    const { name, email, address, phone, website, company } = useLoaderData();
    return (
        <div className="bg-slate-200 py-20 shadow-lg mx-auto rounded-lg">
            <div className='w-11/12 bg-white mx-auto p-10 rounded-md shadow-md'>
                <div className='grid lg:grid-cols-6 gap-5 lg:gap-0 md:gap-0 sm:grid-flow-row text-left mb-20'>
                    <div className='flex justify-start items-center'>
                        <h2 className='text-lg hover:text-primary cursor-pointer transition-all duration-150 ease-in-out'>{ name }</h2>
                    </div>
                    <div>
                        <strong className='text-lg font-semibold'>Contact</strong>
                        <p>{ name }</p>
                    </div>
                    <div>
                        <strong className='text-lg font-semibold'>Street</strong>
                        <p>{ address.street }</p>
                    </div>
                    <div>
                        <strong className='text-lg font-semibold'>City</strong>
                        <p>{ address.city }</p>
                    </div>
                    <div>
                        <strong className='text-lg font-semibold'>zipcode</strong>
                        <p>{ address.zipcode }</p>
                    </div>
                    <div className='flex justify-end items-center'>
                        <Link to={ `/` }><button className="btn btn-primary">Back</button></Link>
                    </div>
                </div>
                <div className='text-left mt-10 shadow-md p-5 rounded-md'>
                    <div>
                        <strong className='text-lg font-semibold'>Description</strong>
                        <p className='text-justify'>Providing service of domestic flight booking @ lowest price guaranteed and also for railway e ticket booking. also offering international flight tickets. giving services to our customers since 1985, now going to start hajj and umrah very soon for our valuable customers it will be also @ very affordable prices.
                        </p>
                    </div>
                    <div className='flex justify-start lg:gap-40 md:gap-20 gap-10 mt-8'>
                        <div className='flex flex-col gap-5'>
                            <div  >
                                <h2 className='text-lg font-semibold'>Contact Person</h2>
                                <p>{ name }</p>
                            </div>

                            <div  >
                                <h2 className='text-lg font-semibold'>Website</h2>
                                <p>{ website }</p>
                            </div>

                            <div  >
                                <h2 className='text-lg font-semibold'>Email</h2>
                                <p>{ email }</p>
                            </div>

                            <div>
                                <h2 className='text-lg font-semibold'>Phone</h2>
                                <p>{ phone }</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div>
                                <h2 className='text-lg font-semibold'>Street</h2>
                                <p>{ address.street }</p>
                            </div>
                            <div>
                                <h2 className='text-lg font-semibold'>Suite</h2>
                                <p>{ address.suite }</p>
                            </div>
                            <div>
                                <h2 className='text-lg font-semibold'>City</h2>
                                <p>{ address.city }</p>
                            </div>
                            <div>
                                <h2 className='text-lg font-semibold'>Zip Code</h2>
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
