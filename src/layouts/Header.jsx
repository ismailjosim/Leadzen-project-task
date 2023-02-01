import React from 'react'
import logo from '../assets/logo.png';
import { AiOutlineAlignRight } from 'react-icons/ai'

const Header = () => {
	return (
		<header className='bg-white py-1'>
			<div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
				<div className='flex h-16 items-center justify-between'>
					<div className='md:flex md:items-center md:gap-12'>
						<a className='block text-teal-600' href='/'>
							<img className='w-10' src={ logo } alt='' />
						</a>
					</div>
					<div className='hidden md:block'>
						<nav aria-label='Site Nav'>
							<ul className='flex items-center gap-6 text-sm'>
								<li>
									<a className='text-gray-500 transition hover:text-gray-500/75' href='/'>About</a>
								</li>
								<li>
									<a className='text-gray-500 transition hover:text-gray-500/75' href='/'>Careers</a>
								</li>
								<li>
									<a className='text-gray-500 transition hover:text-gray-500/75' href='/'>History</a>
								</li>
								<li>
									<a className='text-gray-500 transition hover:text-gray-500/75' href='/'>Services</a>
								</li>
								<li>
									<a className='text-gray-500 transition hover:text-gray-500/75' href='/'>Projects</a>
								</li>
								<li>
									<a className='text-gray-500 transition hover:text-gray-500/75' href='/'>Blog</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className='flex items-center gap-4'>
						<div className='sm:flex sm:gap-4'>
							<button className='rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow'>Login</button>
							<div className='hidden sm:flex'>
								<a className='rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary' href='/'>Register</a>
							</div>
						</div>

						<div className='block md:hidden'>
							<button className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75'><AiOutlineAlignRight /></button>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
