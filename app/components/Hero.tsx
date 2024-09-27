import React from 'react';

const Hero = () => {
  return (
    <section className='h-[90vh] shrink-0 flex flex-col items-center justify-center gap-6 relative'>
      <video
        className='absolute w-full h-full object-cover -z-10 brightness-50'
        muted
        autoPlay
        loop
        playsInline
        disablePictureInPicture
      >
        <source src='assets/videos/hero_background.mp4' type='video/mp4' />
      </video>
      <div className='container'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase font-extrabold animate-fadeInUp'>
          See the World from <br /> My <span className='text-primary'>Lenses</span>
        </h1>
        <p className='text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl font-extralight mt-4 sm:w-4/5 w-full animate-fadeInUp'>
          From breathtaking cinematic views to accurate inspections, I bring the sky&apos;s perspective to your fingertips. Ready to transform your project with aerial expertise? Let&apos;s take your ideas to new horizons.
        </p>
        <button className='btn btn-primary mt-6 animate-fadeInUp'>
          Book Your Flight Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
