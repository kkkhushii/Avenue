import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <div className='mt-[109px]'>
            <div className='max-w-[1200px] mx-auto px-6'>
                <div className='bg-customblue overflow-hidden relative h-[442px] rounded-3xl flex '>
                    <div className="justify-between flex-col  px-[89px] pt-[123px]">
                        <div>
                            <p className="text-white max-w-[535px] w-full  font-bold text-[38px] mb-[28px]" >A journey of a thousand<br /> miles begins with a single step</p>
                        </div>
                        <div className="flex gap-[17px]">
                            <div>
                                <Link href="#">
                                    <img src="https://imgur.com/SUcYvTJ.jpg" className="rounded-xl">
                                    </img>
                                </Link>

                            </div>
                            <div>
                                <Link href="#">
                                    <img src="https://imgur.com/6q4ZExw.jpg" className="rounded-xl">
                                    </img>
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div>
                            <div className="z-0">
                                <img src="https://svgshare.com/i/16N5.svg" className="absolute right-0" />

                            </div>
                            <div className="z-10">
                                <img src="https://svgshare.com/i/16Lo.svg" className="absolute right-[70px] top-[41px] ">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
