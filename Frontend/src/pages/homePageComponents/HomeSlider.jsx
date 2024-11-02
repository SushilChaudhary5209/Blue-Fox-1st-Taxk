

import React from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from 'react-icons/fa'; // Import the star icon
import CheckButton from '../../components/CheckButton';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-4xl text-gray-700" />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-4xl text-gray-700" />
    </div>
  );
};

function HomeSlider() {
  const testimonials = [
    { name: 'Sushil', feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae molestias qui, ad asperiores harum! Dolorem, ducimus exercitationem excepturi vel assumenda, quibusdam facilis blanditiis laboriosam, repellat laudantium quos necessitatibus ex.' },
    { name: 'Rahul', feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae molestias qui, ad asperiores harum! Dolorem, ducimus exercitationem excepturi vel assumenda, quibusdam facilis blanditiis laboriosam, repellat laudantium quos necessitatibus ex.' },
    { name: 'Arya', feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae molestias qui, ad asperiores harum! Dolorem, ducimus exercitationem excepturi vel assumenda, quibusdam facilis blanditiis laboriosam, repellat laudantium quos necessitatibus ex.' },
    { name: 'King', feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae molestias qui, ad asperiores harum! Dolorem, ducimus exercitationem excepturi vel assumenda, quibusdam facilis blanditiis laboriosam, repellat laudantium quos necessitatibus ex.' },
    { name: 'Queen', feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae molestias qui, ad asperiores harum! Dolorem, ducimus exercitationem excepturi vel assumenda, quibusdam facilis blanditiis laboriosam, repellat laudantium quos necessitatibus ex.' },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // For tablets and below
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  };

  return (
    <>
      <div className='relative w-full overflow-x-hidden mt-12 md:px-36'>
        <div className='flex justify-center items-center mb-8'>
          <p className='font-extrabold  text-2xl md:text-3xl text-center'>OUR HAPPY CUSTOMERS</p>
        </div>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='p-1 lg:p-6'>
              <div className='h-full rounded-xl border border-slate-300 p-6'>
                <div className='flex flex-col items-start gap-1 lg:gap-2 mb-4'>
                  {/* Yellow stars */}
                  <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className='font-bold'>{testimonial.name}</p>
                  <CheckButton />
                </div>
                <p className='text-sm text-gray-400'>{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default HomeSlider;
