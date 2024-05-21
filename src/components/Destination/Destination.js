import Link from 'next/link'
import React from 'react'

function Destination() {
    return (
        <div className='mt-[110px] mb-[124px]'>
            <div className='container max-w-[1200px] mx-auto '>
                <h2 className='font-bold text-[38px] text-customcol pb-[36px]'>Top Destinations</h2>
                <div className="grid grid-cols-12 gap-6 mb-[30px]">
                    <div className="col-span-6 relative">
                        <div className="rounded-[24px] overflow-hidden h-full">
                            <img
                                src="Icons\Rectangle1.jpg"
                                alt="Hiking Adventure"
                                className="w-full h-full object-cover transition duration-500 
                                hover:scale-110"
                            />
                        </div>
                        <div className="absolute bottom-0 p-[53px]">
                            <h4 className="font-bold text-2xl text-white">Hiking Adventure</h4>
                            <p className="text-white text-lg font-medium">306 Destinations</p>
                        </div>
                    </div>


                    <div className="col-span-6 grid grid-cols-12 gap-6">
                        <div className="col-span-12 mb-[30px] h-full relative">


                            <div className="rounded-[24px] overflow-hidden h-full">
                                <Link href='#'>
                                    <img
                                        src="Icons\Rectangle2.jpg"
                                        alt="Top Image"
                                        className="w-full h-full object-cover  transition duration-500 
                                     hover:scale-110"
                                    />
                                </Link>

                            </div>

                            <div className="absolute bottom-0  p-[42px]  ">
                                <h4 className="font-bold text-2xl text-white">Outdoor Adventure</h4>
                                <p className="text-white text-white text-lg font-medium ">418 Destinations</p>
                            </div>
                        </div>


                        <div className="col-span-6 h-full relative">
                            <div className="rounded-[24px] overflow-hidden mb-[30px] h-full">
                                <img
                                    src="Icons\Rectangle3.jpg"
                                    alt="Bottom Left Image"
                                    className="w-full h-full object-cover  transition duration-500 
                                    hover:scale-110"
                                />
                            </div>
                            <div className="absolute bottom-0  p-[42px]">
                                <h4 className="font-bold text-2xl text-white">Beach Adventure</h4>
                                <p className="text-white text-white text-lg font-medium">85 Destinations</p>
                            </div>
                        </div>
                        <div className="col-span-6 h-full relative">
                            <div className="rounded-[24px] overflow-hidden mb-[30px] h-full">
                                <img
                                    src="Icons\Rectangle4.jpg"
                                    alt="Bottom Right Image"
                                    className="w-full h-full object-cover  transition duration-500 
                                    hover:scale-110"
                                />
                            </div>
                            <div className="absolute bottom-0  p-[42px] ">
                                <h4 className="font-bold text-2xl text-white">Pilgrimage Destination</h4>
                                <p className="text-white text-white text-lg font-medium">29 Destinations</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-[64px]'>
                    <button className='text-customblue bg-white border font-medium text-lg py-[13px] px-[36px] rounded-lg border-customblue fill' >View More</button>

                </div>
            </div >
        </div >
    )
}

export default Destination
