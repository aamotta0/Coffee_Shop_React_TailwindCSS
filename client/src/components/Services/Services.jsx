import React from 'react'
import Img1 from '../../assets/espresso.jpeg'
import Img2 from '../../assets/americano.jpeg'
import Img3 from '../../assets/capuccino.jpeg'


// ServicesData is an array of objects with name and description properties
const ServicesData = [
    {
        id: 1,
        img: Img1,
        name: 'Espresso',
        description: 'This is a type of strong black coffee that is formed when hot water passes under high pressure through ground coffee beans.',
        aosDelay: '100'
    },
    {
        id: 2,
        img: Img2,
        name: 'Americano',
        description: 'An Americano is a milder coffee beverage created by diluting a shot of espresso with hot water, resulting in a smoother flavor profile.',
        aosDelay: '100'

    },
    {
        id: 3,
        img: Img3,
        name: 'Cappuccino',
        description: 'A cappuccino is a coffee made with equal parts espresso, steamed milk, and frothed milk, offering a rich and creamy flavor combination.',
        aosDelay: '100'

    }
]

const Services = () => {
    return (
        <>
            <span id='services'></span>
            <div className='py-10'>
                <div className='container'>
                    {/* header title */}
                    <div className='text-center mb-20'>
                        <h1 className='text-4xl font-bold font-cursive text-gray-800'>Best Coffee For You</h1>
                    </div>

                    {/* Services Card Section */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                        {
                            // Map Services is an array of objects with name and description properties and display
                            ServicesData.map((data, index) => (
                                <div
                                    data-aos='fade-up'
                                    data-aos-delay={data.aosDelay}
                                    key={index}
                                    className='rounded-2xl bg-white hover:bg-primary 
                                hover:text-white shadow-xl duration-200 max-w-[300px] group relative cursor-pointer'>
                                    {/* Image section */}
                                    <div className='h-[122px]'>
                                        <img src={data.img} alt={data.name} className='max-w-[200px] block mx-auto transform -translate-y-7 group-hover:scale-110 group-hover:rotate-5 duration-300 rounded-3xl' />
                                    </div>
                                    {/* Text Content */}
                                    <div className='p-4 text-center'>
                                        <h1 className='text-xl font-bold'>{data.name}</h1>
                                        <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Services