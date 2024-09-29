import React, { Children } from 'react'

interface SectionProps {
    title?: string;
    description?: string;
    children? : React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}

const Section = ({ title, description, footer, children, className }: SectionProps) => {
    return (
        <section className={`section ${className}`}>
            {title &&
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold sm:w-4/5 w-full'>
                    {title}
                </h1>
            }
            {description &&
                <p className='text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl font-extralight mt-4 sm:w-4/5 w-full' >
                    {description}
                </p>}
            {children && <div>{children}</div>}
            {footer && <div className='pt-6 sm:pt-6 lg:pt-10 xl:pt-14 2xl:pt-18'>{footer}</div>}
        </section>
    )
}

export default Section