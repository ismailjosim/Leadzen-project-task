import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer aria-label="Site Footer" className="bg-white">
			<div
				className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
			>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div>
						<div className="text-primary">
							<img className='w-16' src={ logo } alt="" />
						</div>

						<p className="max-w-xs mt-4 text-gray-500">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
							cupiditate quae nam molestias.
						</p>

						<ul className="flex gap-6 mt-8">
							<li>
								<button className='bg-primary text-white p-1 rounded-full hover:bg-secondary transition-all duration-300'><FaFacebookF /></button>
							</li>
							<li>
								<button className='bg-primary text-white p-1 rounded-full hover:bg-secondary transition-all duration-300'><FaTwitter /></button>
							</li>
							<li>
								<button className='bg-primary text-white p-1 rounded-full hover:bg-secondary transition-all duration-300'><FaInstagram /></button>
							</li>
							<li>
								<button className='bg-primary text-white p-1 rounded-full hover:bg-secondary transition-all duration-300'><FaGithub /></button>
							</li>
							<li>
								<button className='bg-primary text-white p-1 rounded-full hover:bg-secondary transition-all duration-300'><FaLinkedinIn /></button>
							</li>
						</ul>
					</div>

					<div
						className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
					>
						<div>
							<p className="font-medium text-gray-900">Services</p>

							<nav className="mt-6">
								<ul className="space-y-4 text-sm">
									<li>
										<button className="text-gray-700 transition hover:opacity-75">
											1on1 Coaching
										</button>
									</li>

									<li>
										<button className="text-gray-700 transition hover:opacity-75">
											Company Review
										</button>
									</li>

									<li>
										<button className="text-gray-700 transition hover:opacity-75">
											Accounts Review
										</button>
									</li>

									<li>
										<button className="text-gray-700 transition hover:opacity-75">
											HR Consulting
										</button>
									</li>

									<li>
										<button className="text-gray-700 transition hover:opacity-75">
											SEO Optimisation
										</button>
									</li>
								</ul>
							</nav>
						</div>

						<div>
							<p className="font-medium text-gray-900">Company</p>

							<nav aria-label="Footer Navigation - Company" className="mt-6">
								<ul className="space-y-4 text-sm">
									<li>
										<button className="text-gray-700 transition hover:opacity-75">
											About
										</button>
									</li>

									<li>
										<button className="text-gray-700 transition hover:opacity-75">
											Meet the Team
										</button>
									</li>

									<li>
										<button className="text-gray-700 transition hover:opacity-75">
											Accounts Review
										</button>
									</li>
								</ul>
							</nav>
						</div>

						<div>
							<p className="font-medium text-gray-900">Helpful Links</p>

							<nav aria-label="Footer Navigation - Company" className="mt-6">
								<ul className="space-y-4 text-sm">
									<li>
										<button className="text-gray-700 transition hover:opacity-75">
											Contact
										</button>
									</li>

									<li>
										<button className="text-gray-700 transition hover:opacity-75">
											FAQs
										</button>
									</li>

									<li>
										<button className="text-gray-700 transition hover:opacity-75">
											Live Chat
										</button>
									</li>
								</ul>
							</nav>
						</div>

						<div>
							<p className="font-medium text-gray-900">Legal</p>

							<nav aria-label="Footer Navigation - Legal" className="mt-6">
								<ul className="space-y-4 text-sm">
									<li>
										<button className="text-gray-700 transition hover:opacity-75">
											Accessibility
										</button>
									</li>

									<li>
										<button className="text-gray-700 transition hover:opacity-75">
											Returns Policy
										</button>
									</li>

									<li>
										<button className="text-gray-700 transition hover:opacity-75">
											Refund Policy
										</button>
									</li>

									<li>
										<button className="text-gray-700 transition hover:opacity-75">
											Hiring Statistics
										</button>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

				<p className="text-xs text-gray-500">
					&copy; 2022. Company Name. All rights reserved.
				</p>
			</div>
		</footer>

	)
}

export default Footer
