import React from 'react'
import Image from 'next/image'

function Heropage() {
    return (
        <div className='max-w-[1370px] w-full mx-auto rounded-[24px] overflow-hidden '>
              <div className='bgcoloropacity'>
            <div className='bg-custom-image mt-[20px]'>
              
                <div className='flex flex-row justify-between gap-[4px]  '>

                    <div className='flex flex-col justify-end flex-1'>
                        <>
                            <h1 className='text-white font-customFont font-bold text-[6.25rem] text-shadowss w-fit '>CANADA</h1>
                        </>
                        <div className='flex items-center gap-4'>
                            <div>
                                <Image src='Icons\Group 380.svg' width={133} height={59} />
                            </div>
                            <span className=' font-customFont  text-[3.125rem] font-bold text-shadowss w-fit text-white'>$350</span>

                        </div>
                    </div>


                    <div className=' rounded-[24px]  shadow-customboxshadow flex-1  bg-white'>
                    <div className='p-[30px]'> 
                        <div className='flex items-center pb-4'>
                            <h4 className='font-customFont font-bold text-[26px] text-customcol'>Plan your Vacation</h4>
                        </div>
                        <form >
                            
                            <div className='border-b-2 py-4 flex flex-col'>
                                <label  htmlFor="Destination" className='text-lablecolor font-normal text-base font-customFont'>   Destination*  </label>
                                <select
                                    id="Destination"
                                    className='font-medium font-customFont text-[20px] text-customcol focus:outline-none focus:border-none'
                                >
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="Destination - 1">Destination - 1</option>
                                    <option value="Destination - 2">Destination - 2</option>
                                    <option value="Destination - 2">Destination - 3</option>
                                </select>

                            </div>
                            <div className='border-b-2 py-4 flex flex-col'>
                                <label  htmlFor="Vacation Mood" className='text-lablecolor font-normal text-base font-customFont'>  Vacation Mood*  </label>
                                <select
                                    id="Vacation Mood*"
                                    className='font-medium font-customFont text-[20px] text-customcol focus:outline-none focus:border-none'
                                >
                                    <option value="Hiking Adventure">Hiking Adventure</option>
                                    <option value="Mood - 1">Mood - 1</option>
                                    <option value="Mood - 2">Mood - 2</option>
                                    <option value="Mood - 3">Mood -  3</option>
                                </select>

                            </div>
                            
                            <div className=' py-4'>
                                <div className='flex flex-row  justify-between'>
                                        <div className='flex flex-col'>
                                            <label htmlFor="Date" className='text-lablecolor font-normal text-base font-customFont'>Date*</label>
                                            <input type='date' placeholder='mm/dd/yyyy'  className='font-medium font-customFont text-[20px] text-customcol focus:outline-[#93c5fd] '></input>
                                        </div>
                                        <div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="Passengers" className='text-lablecolor font-normal text-base font-customFont'>Passengers*</label>
                                                <input type='number' placeholder='3'  className='font-medium font-customFont text-[20px] text-customcol focus:outline-[#93c5fd] '></input>
                                            </div>
                                        </div>
                                  
                                </div>
                            </div>
                            <div>
                                <button type='submit' className='w-full bg-customblue rounded-[8px] py-[15px] px-[100px] text-white font-medium font-customFont text-base cursor-pointer' >Search Now</button>
                            </div>
                        </form>
</div>
                    </div>

                </div>
                </div>
            </div>


        </div>
    )
}

export default Heropage
// height: 100%;
// display: flex;
// flex-direction: column;
// justify-content: flex-end;
// padding: 90px 100px 75px;