import React from 'react'
import Image from 'next/image'


function Header() {
  return (
    <div className='flex flex-row justify-between pt-[27px] max-w-[1170px] mx-auto  items-center'>
      <div>
        <Image src='Icons\logo.svg' width={140} height={33} alt='logo'></Image>
      </div>
      <div className='font-normal text-lg leading-[22px] text-customcol '>
          <ul className='flex flex-row gap-[15px]'>
            <li>Travelers</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
      </div>
      <div>
        <button className='font-normal text-lg leading-[22px] text-white bg-customblue rounded-[8px] py-[13px] px-[24px]'>Contact Us</button>
      </div>
    </div>
  )
}

export default Header
// max-width: 1170px;
// margin-left: auto;
// margin-right: auto;
// align-items: center;