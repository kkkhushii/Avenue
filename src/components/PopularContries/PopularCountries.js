import React from 'react'

function PopularCountries() {


    const countries = [
        { name: 'France', offers: '1500 Offers', imgSrc: '/Icons/france 1.svg' },
        { name: 'Spain', offers: '135 Offers', imgSrc: '/Icons/spain 1.svg' },
        { name: 'China', offers: '1593 Offers', imgSrc: '/Icons/china 1.svg' },
        { name: 'Turkey', offers: '69 Offers', imgSrc: '/Icons/turkey 1.svg' },
        { name: 'Germany', offers: '589 Offers', imgSrc: '/Icons/germany 1.svg' },
        { name: 'Thailand', offers: '3600 Offers', imgSrc: '/Icons/thailand 1.svg' },
        { name: 'Maxico', offers: '330 Offers', imgSrc: '/Icons/mexico 1.svg' },
        { name: 'Canada', offers: '1030 Offers', imgSrc: '/Icons/canada 1.svg' },
        { name: 'Brazil', offers: '890 Offers', imgSrc: '/Icons/brazil 1.svg' },
        { name: 'India', offers: '3100 Offers', imgSrc: '/Icons/india 1.svg' },
        { name: 'Colombia', offers: '150 Offers', imgSrc: '/Icons/colombia 1.svg' },
        { name: 'Malaysia', offers: '2480 Offers', imgSrc: '/Icons/Frame 54.svg' },
    ];

    return (
        <div className='lg:mt-[121px]'>
            <div className='max-w-[1200px] mx-auto px-6'>
                <div className='flex justify-between'>
                    <h2 className='text-4xl font-bold text-customcol mb-[61px]'>Popular Countries</h2>
                    <p className='font-normal text-lg text-lablecolor'>Adventure Place</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[70px]'>
                    {countries.map((country, index) => (
                        <div key={index} className='pl-7 border-l-2 border-l-customColor country-entry'>

                            <div className='mb-6'>
                                <img src={country.imgSrc} alt={country.name} />
                            </div>
                            <div className='relative'>
                                <h4 className='mb-1 text-2xl text-customcol font-bold country-name'>{country.name}</h4>
                            </div>
                            <p className='mb-1 text-base font-normal text-lablecolor'>{country.offers}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopularCountries

