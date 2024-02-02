import React from 'react'
import HeroImg from '../../assets/coffee2.png';

const Home = () => {
    return (
        <div className='min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white'>
            <div className='container pb-8 sm:pb-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/* Text content section  */}
                    <div className='order-2 sm:order-1 flex flex-col justify-center gap-6 font-bold'>
                        <h1 className='text-4xl sm:text-6xl lg:text-7xl'>We serve the richest
                            <span className='text-primary font-cursive'> Coffee </span>in the city
                        </h1>
                        <div>
                            <button className='bg-gradient-to-tr from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 
                            text-white hover:scale-105 duration-200'>Coffee And Code</button>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className='min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative'>
                        <img src={HeroImg} alt='' className='w-[300px] sm:w-[410px] sm:scale-110 mx-auto spin' />
                        <div className='bg-gradient-to-tr from-primary to-secondary absolute top-10 left-10 p-3 
                        rounded-xl'>
                            <h1>Hey Coder</h1>
                        </div>
                        <div className='bg-gradient-to-tr from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-xl'>
                            <h1>Best Coffee</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home