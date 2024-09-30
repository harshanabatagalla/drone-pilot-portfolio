import Link from 'next/link'
import React from 'react'

interface ExperienceCardProps {
  title?: string,
  description?: string,
  svg?: string
  sort?: number
}

const ExperienceCard = ( {title, description, svg, sort }: ExperienceCardProps ) => {
  return (
    <div className='bg-base-300 lg:w-1/3 rounded-md my-4 p-8'>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
        <div className='col-span-1 sm:col-span-1'>
          <img
            src={`/assets/svgs/${svg}`}
            alt={svg}
            className='w-full h-auto max-w-16 max-h-16'
          />
        </div>
        <div className='col-span-1 sm:col-span-4'>
          <h2 className='uppercase font-extrabold mb-3 text-lg'>
            <span className='text-primary text-xl'>{sort}. </span>
            {title}
          </h2>
          <p className='font-extralight'>
            {description}
          </p>
          <span>
            <Link href='/portfolio' className='btn btn-link px-0'>Learn more..</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
