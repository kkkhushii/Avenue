import React from 'react'
import Image from 'next/image'

function Feature() {
    return (
        <div className='bg-[#DAE7FF] p-10'>
            <div className='max-w-[1200px] mx-auto'>
                <div className='rounded-lg bg-white py-11  '>
                    <div>
                        <h2 className='text-4xl font-bold text-customcol text-center pb-[33px]'>Features</h2>
                    </div>




                    <div className='grid grid-cols-12 mb-4 px-8'>
                        <div className='col-span-4'>
                            <div className=' rounded-full bg-colorbg w-[90px]  flex justify-center items-center mb-6  flex flex-col'>
                                <Image src='\Icons\customer 1.svg' height={50} width={50}></Image>
                            </div>
                            <h3 className='font-bold text-2xl text-customcol'>1,000+ local guides</h3>
                            <p className='text-base font-normal'>Latin words that, as they are positioned not form sentences with complete.</p>


                        </div>
                        <div className='col-span-4'>

                            <div className='rounded-full bg-colorbg w-[90px]  flex justify-center items-center mb-6  flex flex-col'>
                                <Image src='\Icons\customer 1.svg' height={50} width={50}></Image>
                            </div>
                            <h3 className='font-bold text-2xl text-customcol'>1,000+ local guides</h3>
                            <p className='text-base font-normal'>Latin words that, as they are positioned not form sentences with complete.</p>


                        </div>
                        <div className='col-span-4'>
                            <div className='rounded-full bg-colorbg w-[90px]  flex justify-center items-center mb-6  flex flex-col'>
                                <Image src='\Icons\customer 1.svg' height={50} width={50}></Image>
                            </div>
                            <h3 className='font-bold text-2xl text-customcol'>1,000+ local guides</h3>
                            <p className='text-base font-normal'>Latin words that, as they are positioned not form sentences with complete.</p>


                        </div>



                    </div>


                </div>

            </div>
        </div>
    )
}

export default Feature
