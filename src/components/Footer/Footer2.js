import Link from 'next/link'
import React from 'react'

function Footer2() {
    return (

        <div className='mt-[104px] relative'>
            <div className='w-full  max-w-[1200px] mx-auto'>
                <div className="grid grid-cols-12">
                    <div className="col-span-5">
                        <div className="grid h-full">
                            <div className='h-full flex flex-col items-start justify-between'>
                                <img src="https://svgshare.com/i/16FL.svg" className='max-w-[140px] z-0 '>
                                </img>
                                <div className="flex space-x-4 z-10">
                                    <Link href="#">
                                        <img src="\Icons\facebook 1.svg" alt="Facebook" />
                                    </Link>
                                    <Link href="#">
                                        <img src="\Icons\twitter 1.svg" alt="Twitter" />
                                    </Link>
                                    <Link href="#">
                                        <img src="\Icons\linkedin 1.svg" alt="LinkedIn" />
                                    </Link>
                                </div>
                            </div>
                            <div className="absolute top-[125px] left-[100px]">
                                <img src="https://svgshare.com/i/16KL.svg" >
                                </img>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-7">
                        <div className="grid gap-[76px] ">
                            <div className="flex gap-[56px] ">
                                <div>
                                    <p className=" w-full font-medium  text-customcol text-base ">PHONE</p>

                                    <p className="text-customcol font-medium text-[24px] ">(630) 0536 220</p>
                                </div>
                                <div>
                                    <p className=" w-full font-medium  text-customcol text-base">EMAIL</p>

                                    <p className="text-customcol font-medium text-[24px] ">info@avenue.com</p>
                                </div>
                            </div>
                            <div className="border-t-2 ">
                                <div>
                                    <div className="text-textclr font-medium flex text-lg pt-[30px] pb-[12px] ">
                                        <p className="mr-[118px] mb-[12px]">Company</p>
                                        <p className="mr-[150px] mb-[12px] ">Travel</p>
                                        <p className=" mb-[12px] ">Quick Links</p>
                                    </div>
                                    <div className="flex text-lablecolor ">
                                        <div className="mr-[83px] ">
                                            <Link href="#">
                                                <p className="text-ooftext text-base ">About Us</p>
                                            </Link>
                                            <Link href="#">
                                                <p className="text-ooftext text-base ">Blog</p>
                                            </Link>
                                            <Link href="#">
                                                <p className="text-ooftext text-base ">Success Stories</p>
                                            </Link>
                                            <Link href="#">
                                                <p className="text-ooftext text-base ">Careers</p>
                                            </Link>
                                        </div>
                                        <div className="mr-[108px] ">
                                            <Link href="#">
                                                <p className="text-ooftext text-base ">Stay</p>
                                            </Link>
                                            <Link href="#">
                                                <p className="text-ooftext text-base ">Flight</p>
                                            </Link>
                                            <Link href="#">
                                                <p className="text-ooftext text-base ">Train</p>
                                            </Link>
                                            <Link href="#">
                                                <p className="text-ooftext text-base ">Destinations</p>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="#">
                                                <p className="text-ooftext text-base ">Contact us</p>
                                            </Link>
                                            <Link href="#">
                                                <p className="text-ooftext text-base ">Top Destinations</p>
                                            </Link>
                                            <Link href="#">
                                                <p className="text-ooftext text-base ">Featured Destinations</p>
                                            </Link>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="flex items-center mt-[53px] justify-between">
                            <div>
                                <p className='font-medium text-lg text-customcol mr-[109px]'> Newsletter</p>
                            </div>
                            <div>


                                <input
                                    type="email"
                                    placeholder="Eamil Address"
                                    className="border border-gray-300 py-[11px] px-[28px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="bg-blue-500 text-[17px] text-white px-[16px] py-[9px] rounded-[8px] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default Footer2
