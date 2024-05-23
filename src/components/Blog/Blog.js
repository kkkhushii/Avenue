import React from 'react'
import Image from 'next/image';

function Blog() {

    const Data = [
        {
            img: '/Icons/Rectangle 342.svg',
            name: 'Kerala',
            description: 'Business from the brink of ruin by optimizing our website.... .',
            time: '16 hours ago'
        },
        {
            img: '/Icons/Rectangle 343.jpg',
            name: 'Japan',
            description: 'The work is top-notch and I consistently outrank all my....',
            time: '1 Days ago'
        },
        {
            img: '/Icons/Rectangle 344.jpg',
            name: 'China',
            description: 'Grow my business through organic search and marketing....',
            time: '20-04-2022'
        }

    ];

    return (
        <div className='pb-8 mt-[116px]'>
            <div className='max-w-[1200px] mx-auto px-6'>

                <h2 className='font-bold text-[38px] text-customcol text-center mb-[55px]'>Recent Blog</h2>
                <div className='grid gap-[30px] md:grid-cols-2 lg:grid-cols-3'>
                    {Data.map((article, index) => (
                        <div key={index} className=' h-full w-full  overflow-hidden'>
                            <Image
                                className='object-cover rounded-[24px] overflow-hidden mb-[31px]'
                                src={article.img}
                                alt={article.name}
                                width={500}
                                height={0}

                            />
                            <div>
                                <h3 className='text-base font-medium text-customblue mb-[3px]'>{article.name}</h3>
                                <p className='font-medium text-[22px] text-customcol mb-[8px]'>{article.description}</p>
                                <p className='font-normal  text-grayclr mb-[48px]'>{article.time}</p>
                            </div>

                        </div>
                    ))}
                </div>
                <div className='text-center'>
                    <button className='text-customblue bg-white border font-medium text-lg   py-[14px] px-[36px] rounded-lg border-customblue fill' >View More</button> 
                </div>
            </div>
        </div>
    )
}

export default Blog
