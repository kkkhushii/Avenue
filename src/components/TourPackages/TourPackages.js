'use client'

import Link from "next/link";


function TourPackages() {

    const items = [
        {
            src: '/Icons/img1.jpg',
            title: 'Amazing East Coast Usa Tour',
            description: '9 Nights / 10 Days.',
            price: '$200'
        },
        {
            src: '/Icons/img2.jpg',
            title: 'Paris & Swiss Delight',
            description: '7 Nights / 8 Days.',
            price: '$230'
        },
        {
            src: '/Icons/img1.jpg',
            title: 'European Explorer',
            description: '5 Nights / 6 Days.',
            price: '$350'
        },

    ];

    return (
        <div className='pb-8 mt-[107px]'>
            <div className='max-w-[1200px] mx-auto px-6'>
                <div className=''>
                    <h2 className='text-customcol font-bold text-[38px] pb-1 mb-[39px]  text-center'>Summer Holiday Tour Packages</h2>
                </div>
                <div className="flex justify-center gap-[32px]">
                    {items.map((item, index) => (
                        <div key={index} className="bg-white overflow-hidden ">
                            <div className=" relative flex justify-center  overflow-hidden  rounded-3xl  ">
                                <Link href="#">
                                    <img className=" object-cover transition duration-500 
                                    hover:scale-110 " src={item.src} alt={item.title} />
                                </Link>
                                <span className="absolute top-[10px] right-3 bg-customblue text-white text-sm font-medium py-1 px-3 rounded-full">
                                    Starts {item.price}
                                </span>
                            </div>
                            <div className="mt-[22px] mx-3">
                                <Link href='#'>
                                    <h3 className="text-xl font-bold text-customcol hover:text-customblue">{item.title}</h3>
                                </Link>
                                <p className="text-base font-normal text-lablecolor mb-4">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center mt-[39px]'>
                    <button className='text-customblue bg-white border font-medium text-lg py-[13px] px-[36px] rounded-lg border-customblue fill' >View More</button>

                </div>

            </div>

        </div>


    )
}

export default TourPackages
