import React from 'react'

// Slider is a library that makes slider
import Slider from 'react-slick';

// testimonial Data is an array of objects with name and description properties with image
const TestimonialData = [
    {
        id: 1,
        name: 'John Doe',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem sit amet consectetur adipisicing elit.',
        img: 'https://picsum.photos/101/101'
    },
    {
        id: 2,
        name: 'Jane Hovhaness',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem sit amet consectetur adipisicing elit.',
        img: 'https://picsum.photos/102/102'
    },
    {
        id: 3,
        name: 'Jade Kthumbail',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem sit amet consectetur adipisicing elit.',
        img: 'https://picsum.photos/103/103'
    },
    {
        id: 4,
        name: 'John Rumbestiskler',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem sit amet consectetur adipisicing elit.',
        img: 'https://picsum.photos/104/104'
    },
    {
        id: 5,
        name: 'Dipankar Kumar',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem sit amet consectetur adipisicing elit.',
        img: 'https://picsum.photos/105/106'
    }
]

const Testimonial = () => {
    // settings for slider
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className='py-14 mb-10'>
            <div className='container'>
                {/* header section */}
                <div className='text-center mb-10'>
                    <h1 className='text-4xl font-bold font-cursive text-gray-800'>
                        Testimonials
                    </h1>
                </div>

                {/* Testimonials Cards Section */}
                <dir>
                    <Slider {...settings}>
                        {
                            // Map TestimonialData is an array of objects with name and description properties and display
                            TestimonialData.map((data, index) => {
                                return (
                                    <div key={data.id} className='my-6'>
                                        <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                                            {/* Image section */}
                                            <div className='mb-4'>
                                                <img src={data.img} alt={data.name} className='rounded-full w-20 h-20' />
                                            </div>
                                            {/* content section */}
                                            <div className='flex flex-col items-center gap-4'>
                                                <div className='space-y-3'>
                                                    <p className='text-xs text-gray-500'>{data.text}</p>
                                                    <h1 className='text-xl font-bold text-black/60 font-cursive'>{data.name}</h1>
                                                </div>
                                            </div>
                                            {/* Quotes section  */}
                                            <p className='text-black/20 text-9xl font-serif absolute top-0 right-5'>,,</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </dir>
            </div>
        </div>
    )
}

export default Testimonial;