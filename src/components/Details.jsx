import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const { name, email, address, phone, website, company } = useLoaderData();
    return (
        <div className='bg-zinc-200 shadow-lg mt-10 py-10 px-20 rounded-lg'>
            <div className='lg:flex justify-between m-5' data-aos="fade-down" data-aos-duration="1500">
                <h2 className='text-lg font-medium flex sm:flex-row items-center justify-center'>Hello Travels</h2>
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
                <div>
                    <Link to={ `/` }><button className="btn btn-primary">Back</button></Link>
                </div>
            </div>
            <div className="divider"></div>
            <div className='text-left px-16 mt-10'>
                <div data-aos="fade-right" data-aos-duration="1500">
                    <h2 className='text-2xl font-semibold mb-3'>Description</h2>
                    <p className='mb-5'>Lorem invidunt sanctus sit justo sea sed. Accusam justo no dolore nonumy nonumy sit takimata erat erat, labore aliquyam duo sea et, sit sadipscing rebum erat ut dolor vero kasd, et justo consetetur ea gubergren, et no sit dolore labore magna gubergren, voluptua et aliquyam accusam at takimata et diam..</p>
                </div>

                <div data-aos="fade-right" data-aos-duration="1500">
                    <h2 className='text-2xl font-semibold mb-3'>Company</h2>
                    <p><span className='font-medium'>Name:</span> { company.name }</p>
                    <p><span className='font-medium'>Catch Phrase:</span> { company.catchPhrase }</p>
                    <p><span className='font-medium'>BS:</span> { company.bs }</p>
                </div>

                <div className='flex lg:flex-row sm:flex-col lg:gap-96 sm:gap-5 mt-8'>
                    <div className='flex flex-col gap-5'>
                        <div data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='text-lg font-medium'>Contact Person</h2>
                            <p>{ name }</p>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='text-lg font-medium'>Website</h2>
                            <p>{ website }</p>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='text-lg font-medium'>Email</h2>
                            <p>{ email }</p>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='text-lg font-medium'>Phone</h2>
                            <p>{ phone }</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='text-lg font-medium'>Street</h2>
                            <p>{ address.street }</p>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='text-lg font-medium'>Suite</h2>
                            <p>{ address.suite }</p>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='text-lg font-medium'>City</h2>
                            <p>{ address.city }</p>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='text-lg font-medium'>Zip Code</h2>
                            <p>{ address.zipcode }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Details;
