import {Dialog, Disclosure, Menu, Transition} from '@headlessui/react'
import cn from "clsx";
import {Fragment, useState} from "react";
import {AiOutlinePlus} from "react-icons/ai";
import {BiDownArrowAlt} from "react-icons/bi";
import {BsFillGridFill} from "react-icons/bs";
import {IoMdClose} from "react-icons/io";
import PageWrapper from "../ui/Layout/pageWraper/PageWrapper";
import ProductCard from "../ui/productCard";

const Catalog = () => {
	const sortOptions = [
		{ name: 'Most Popular', href: '#', current: true },
		{ name: 'Best Rating', href: '#', current: false },
		{ name: 'Newest', href: '#', current: false },
		{ name: 'Price: Low to High', href: '#', current: false },
		{ name: 'Price: High to Low', href: '#', current: false },
	]

	const filters = [
		{
			id: 'category',
			name: 'Category',
			options: [
				{ value: 'Running', label: 'Running', checked: false },
				{ value: 'Casual', label: 'Casual', checked: true },
				{ value: 'Football', label: 'Football', checked: false },
			],
		},
		{
			id: 'color',
			name: 'Color',
			options: [
				{ value: 'white', label: 'White', checked: false },
				{ value: 'beige', label: 'Beige', checked: false },
				{ value: 'blue', label: 'Blue', checked: true },
				{ value: 'brown', label: 'Brown', checked: false },
				{ value: 'green', label: 'Green', checked: false },
				{ value: 'purple', label: 'Purple', checked: false },
			],
		},
		{
			id: 'Price',
			name: 'Price',
			options: [
				{ value: '0-50', label: '$0-50', checked: false },
				{ value: '50-100', label: '$50-100', checked: false },
				{ value: '100-150', label: '$100-150', checked: false },
				{ value: '150-200', label: '$150-200', checked: false },
				{ value: '200-250', label: '$200-250', checked: false },
				{ value: '250+', label: '$250+', checked: false },
			],
		},

		{
			id: 'size',
			name: 'Size',
			options: [
				{ value: '39', label: '39', checked: false },
				{ value: '40', label: '40', checked: false },
				{ value: '41', label: '41', checked: false },
				{ value: '42', label: '42', checked: false },
				{ value: '43', label: '43', checked: false },
				{ value: '44', label: '44', checked: true },
			],
		},
	]
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
	return <PageWrapper>
	<div>
		<div className="">
			<div>
				<Transition.Root show={mobileFiltersOpen} as={Fragment}>
					<Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-black bg-opacity-25" />
						</Transition.Child>
						
						<div className="fixed inset-0 z-40 flex">
							<Transition.Child
								as={Fragment}
								enter="transition ease-in-out duration-300 transform"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transition ease-in-out duration-300 transform"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto py-4 pb-12 shadow-xl">
									<div className="flex items-center justify-between px-4">
										<h2 className="text-lg font-medium text-gray-900">Filters</h2>
										<button
											type="button"
											className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md  p-2 text-gray-400"
											onClick={() => setMobileFiltersOpen(false)}
										>
											<span className="sr-only">Close menu</span>
											<BiDownArrowAlt className="h-6 w-6" aria-hidden="true" />
										</button>
									</div>
									
									<form className="mt-4 border-t border-gray">
										<h3 className="sr-only">Categories</h3>
										{filters.map((section) => (
											<Disclosure as="div" key={section.id} className="border-t border-gray px-4 py-6">
												{({ open }) => (
													<>
														<h3 className="-mx-2 -my-3 flow-root">
															<Disclosure.Button className="flex w-full items-center justify-between  px-2 py-3 text-gray-400 hover:text-gray-500">
																<span className="font-medium text-gray-900">{section.name}</span>
																<span className="ml-6 flex items-center">
                                  {open ? (
	                                  <IoMdClose className="h-5 w-5" aria-hidden="true" />
                                  ) : (
	                                  <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
															</Disclosure.Button>
														</h3>
														<Disclosure.Panel className="pt-6">
															<div className="space-y-6">
																{section.options.map((option, optionIdx) => (
																	<div key={option.value} className="flex items-center">
																		<input
																			id={`filter-mobile-${section.id}-${optionIdx}`}
																			name={`${section.id}[]`}
																			defaultValue={option.value}
																			type="checkbox"
																			defaultChecked={option.checked}
																			className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																		/>
																		<label
																			htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
																			className="ml-3 min-w-0 flex-1 text-gray-500"
																		>
																			{option.label}
																		</label>
																	</div>
																))}
															</div>
														</Disclosure.Panel>
													</>
												)}
											</Disclosure>
										))}
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition.Root>
				
				<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex items-baseline justify-between  border-b border-gray pb-6">
						<h1 className="text-4xl font-bold  text-gray-900">Catalog</h1>
						
						<div className="flex items-center">
							<Menu as="div" className="relative inline-block text-left">
								<div>
									<Menu.Button className="group inline-flex z-50 justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
										Sort
										<BiDownArrowAlt
											className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
											aria-hidden="true"
										/>
									</Menu.Button>
								</div>
								
								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<Menu.Items className="absolute bg-[#121212] right-0 z-10 mt-2 w-40 origin-top-right rounded-md  shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
										<div className="py-1">
											{sortOptions.map((option) => (
												<Menu.Item key={option.name}>
													{({ active }) => (
														<a
															href={option.href}
															className={cn(
																option.current ? 'font-medium text-gray-900' : 'text-gray-500',
																active ? 'bg-gray-100' : '',
																'block px-4 py-2 text-sm'
															)}
														>
															{option.name}
														</a>
													)}
												</Menu.Item>
											))}
										</div>
									</Menu.Items>
								</Transition>
							</Menu>
							
			
							<button
								type="button"
								className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
								onClick={() => setMobileFiltersOpen(true)}
							>
								<span className="sr-only">Filters</span>
								<BsFillGridFill className="h-5 w-5" aria-hidden="true" />
							</button>
						</div>
					</div>
					
					<section aria-labelledby="products-heading" className="pb-24 pt-6">
						<h2 id="products-heading" className="sr-only">
							Products
						</h2>
						
						<div className=" flex gap-x-8 gap-y-10 lg:grid-cols-4">
						<form className="hidden w-[25%] lg:block">
								
								{filters.map((section) => (
									<Disclosure defaultOpen={true} as="div" key={section.id} className=" py-6">
										{({ open }) => (
											<>
												<h3 className="-my-3 flow-root">
													<Disclosure.Button className="flex w-full items-center justify-between  py-3 text-sm text-gray-400 hover:text-gray-500">
														<span className="font-medium text-lg text-gray">{section.name}</span>
														<span className="ml-6 flex items-center">
                              {open ? (
	                              <IoMdClose className="h-5 w-5" aria-hidden="true" />
                              ) : (
	                              <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
													</Disclosure.Button>
												</h3>
												<Disclosure.Panel className="pt-6">
													<div className="space-y-4">
														{section.options.map((option, optionIdx) => (
															<div key={option.value} className="flex items-center">
																<input
																	id={`filter-${section.id}-${optionIdx}`}
																	name={`${section.id}[]`}
																	defaultValue={option.value}
																	type="checkbox"
																	defaultChecked={option.checked}
																	className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																/>
																<label
																	htmlFor={`filter-${section.id}-${optionIdx}`}
																	className="ml-3 text-sm text-gray-600"
																>
																	{option.label}
																</label>
															</div>
														))}
													</div>
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
								))}
							</form>
							
							
								<div className='w-full grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
								
								<ProductCard/>
									<ProductCard/>
								<ProductCard/>
								<ProductCard/>
								<ProductCard/>
								<ProductCard/>
								<ProductCard/>
								<ProductCard/>	<ProductCard/>
								<ProductCard/>
								<ProductCard/>
								<ProductCard/>	<ProductCard/>
								<ProductCard/>
								<ProductCard/>
								<ProductCard/>
								</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	</div>
	</PageWrapper>
}

export default Catalog
