import React from 'react'

function Destination() {
  return (
    <div className=' py-[30px]'>
        <div className='container max-w-[1200px] mx-auto '>
              <h2 className='font-bold text-[38px] text-customcolpb-[30px]'>Top Destinations</h2>
              <div className='flex flex-row mb-[30px]'>
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
              </div>

              <div className='flex justify-center items-center'>
                <button className='text-customblue bg-white border font-medium text-lg py-[13px] px-[37px] rounded-[8px] border-customblue'>View More</button>
              </div>
        </div>
      
    </div>
  )
}

export default Destination
