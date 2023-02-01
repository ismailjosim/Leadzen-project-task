import React from 'react'

const HomeBanner = () => {
    return (
        <div>
            <section className='bg-slate-100'>
                <div className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
                    <div className='mx-auto text-center'>
                        <h1 className='text-3xl font-extrabold sm:text-5xl'>
                            First, solve the problem.
                            <strong className='font-extrabold text-primary sm:block leading-normal'>Then, write the code.</strong>
                        </h1>
                        <p className='mt-4 sm:text-xl sm:leading-relaxed lg:w-8/12 mx-auto'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
                            illo tenetur fuga ducimus numquam ea!
                        </p>
                        <div className='mt-8 flex flex-wrap justify-center gap-4'>
                            <button className='btn btn-primary text-white rounded-md capitalize'>Get Started</button>
                            <button className='btn btn-outline btn-primary'>Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeBanner
