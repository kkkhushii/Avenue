import React from 'react'

function Destination() {
    return (
        <div className='py-[30px]'>
            <div className='container max-w-[1200px] mx-auto '>
                <h2 className='font-bold text-[38px] text-customcol pb-[36px]'>Top Destinations</h2>
                {/* <div className='flex flex-row mb-[30px]'>
                    <div className='w-1/2'>
                        <div className='flex mb-[30px] relative'>
                            <div className='rounded-[24px] overflow-hidden Destinationimg1'>  </div>
                            <div className='absolute bottom-0 p-[53px]'>
                                <h4 className='font-bold text-2xl text-white'>Hiking Adventure</h4>
                                <p className='
                            '>306 Destinations</p>
                            </div>

                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='mb-[30px]'>
                            <div className='rounded-[24px] overflow-hidden Destinationimg2'> </div>
                        </div>
                        <div className='flex flex-row flex-wrap'>
                            <div className='pr-[30px]'>
                                <div className='mb-[30px] Destinationimg3'></div>
                            </div>
                            <div >
                                <div className='mb-[30px] Destinationimg4'></div>
                            </div>

                        </div>
                    </div>
                </div> */}
                {/* <div className="grid grid-cols-2     gap-6 mb-[30px]">
                    <div className="col-span-1">
                        <div className="relative mb-[30px]">
                            <div className="rounded-[24px] overflow-hidden Destinationimg1"></div>
                            <div className="absolute bottom-0 p-[53px]">
                                <h4 className="font-bold text-2xl text-white">Hiking Adventure</h4>
                                <p className="text-white">306 Destinations</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="mb-[30px]">
                            <div className="rounded-[24px] overflow-hidden Destinationimg2"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <div className="mb-[30px] rounded-[24px] overflow-hidden Destinationimg3"></div>
                            </div>
                            <div>
                                <div className="mb-[30px] rounded-[24px] overflow-hidden Destinationimg4"></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="grid grid-cols-12 gap-6 mb-[30px]">
                  
                    <div className="col-span-6 relative">
                        <div className="rounded-[24px] overflow-hidden Destinationimg1 w-full h-full"></div>
                        <div className="absolute bottom-0 p-[53px]">
                            <h4 className="font-bold text-2xl text-white">Hiking Adventure</h4>
                            <p className="text-white">306 Destinations</p>
                        </div>
                    </div>

               
                    <div className="col-span-6 grid grid-cols-12 gap-6">
                        {/* Top Image */}
                {/* <div className="col-span-12 mb-[30px]">
                            <div className="rounded-[24px] overflow-hidden Destinationimg2 w-full h-full"></div>
                        </div>

                    
                        <div className="col-span-6">
                            <div className="rounded-[24px] overflow-hidden Destinationimg3 mb-[30px] w-full h-full"></div>
                        </div>
                        <div className="col-span-6">
                            <div className="rounded-[24px] overflow-hidden Destinationimg4 mb-[30px] "></div>
                        </div>
                    </div>
                </div> */}

                <div className="grid grid-cols-12 gap-6 mb-[30px]">

                    <div className="col-span-6 relative">
                        <div className="rounded-[24px] overflow-hidden h-full">
                            <img
                                src="Icons\Rectangle1.svg"
                                alt="Hiking Adventure"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 p-[53px]">
                            <h4 className="font-bold text-2xl text-white">Hiking Adventure</h4>
                            <p className="text-white">306 Destinations</p>
                        </div>
                    </div>


                    <div className="col-span-6 grid grid-cols-12 gap-6">

                        <div className="col-span-12 mb-[30px] h-full relative">
                            <div className="rounded-[24px] overflow-hidden h-full">
                                <img
                                    src="Icons\Rectangle2.svg"
                                    alt="Top Image"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0  p-[40px]  ">
                                <h4 className="font-bold text-2xl text-white">Outdoor Adventure</h4>
                                <p className="text-white">418 Destinations</p>
                            </div>
                        </div>


                        <div className="col-span-6 h-full relative">
                            <div className="rounded-[24px] overflow-hidden mb-[30px] h-full">
                                <img
                                    src="Icons\Rectangle3.svg"
                                    alt="Bottom Left Image"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0  p-[40px]">
                                <h4 className="font-bold text-2xl text-white">Beach Adventure</h4>
                                <p className="text-white">85 Destinations</p>
                            </div>
                        </div>
                        <div className="col-span-6 h-full relative">
                            <div className="rounded-[24px] overflow-hidden mb-[30px] h-full">
                                <img
                                    src="Icons\Rectangle4.svg"
                                    alt="Bottom Right Image"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0  p-[40px] ">
                                <h4 className="font-bold text-2xl text-white">Pilgrimage Destination</h4>
                                <p className="text-white">29 Destinations</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='text-customblue bg-white border font-medium text-lg py-[13px] px-[37px] rounded-[8px] border-customblue'>View More</button>
                </div>
            </div >

        </div >
    )
}

export default Destination
