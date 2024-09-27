'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'; // Use from next/navigation instead of next/router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { social_media_links } from '../data/data'

const NavBar = () => {
  const router = useRouter(); // Get the current route
  const pathname = usePathname(); // Get the current pathname
  const checkboxRef = useRef<HTMLInputElement>(null); // Ref for the checkbox

  // Function to close the drawer when a link is clicked
  const closeDrawer = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false; // Uncheck the checkbox to close the drawer
    }
  };

  const isActive = (path: string) => pathname === path; // In app directory, use pathname to get current route

  return (
    <div className="drawer-end text-md font-bold fixed top-0 left-0 right-0 uppercase z-50 ">
      <input id="mobile-menu" type="checkbox" className="drawer-toggle" ref={checkboxRef} />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div className="navbar bg-base-100 backdrop-blur-lg bg-opacity-70">
          <div className="mx-2 px-2 grow">
            <Link href="/" onClick={closeDrawer} >
              Sankalpa Bandara
            </Link>
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="mobile-menu" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </label>
          </div>
          <div className="hidden lg:block grow">
            <ul className="flex flex-nowrap px-1 gap-10">
              <li className={isActive('/') ? 'text-primary hover:text-primary' : 'hover:text-primary '}>
                <Link href="/" onClick={closeDrawer}>Home</Link>
              </li>
              <li className={isActive('/services') ? 'text-primary hover:text-primary' : 'hover:text-primary'}>
                <Link href="/services" onClick={closeDrawer}>Services</Link>
              </li>
              <li className={isActive('/portfolio') ? 'text-primary hover:text-primary' : 'hover:text-primary'}>
                <Link href="/portfolio" onClick={closeDrawer}>Portfolio</Link>
              </li>
              <li className={isActive('/contact') ? 'text-primary hover:text-primary' : 'hover:text-primary'}>
                <Link href="/contact" onClick={closeDrawer}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex-none lg:block hidden gap-3">
            <a className='mx-2 hover:text-primary' href={social_media_links.facebook} target='_blank'>
              <FontAwesomeIcon icon={faFacebook} size='lg' />
            </a>
            <a className='mx-2 hover:text-primary' href={social_media_links.instagram} target='_blank'>
              <FontAwesomeIcon icon={faInstagram} size='lg' />
            </a>
            <a className='mx-2 hover:text-primary' href={social_media_links.tiktok} target='_blank'>
              <FontAwesomeIcon icon={faTiktok} size='lg' />
            </a>
            <Link href='/booking' className="btn btn-primary btn-outline ml-4" onClick={closeDrawer}>Book Now</Link>
          </div>
        </div>
      </div>
      <hr className="border-t-[1px] border-gray-300 opacity-10" />
      <div className="drawer-side">
        <label htmlFor="mobile-menu" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu bg-base-100 min-h-full w-80 p-4 backdrop-blur-lg bg-opacity-50">
          <label htmlFor="mobile-menu" className="btn btn-square btn-ghost absolute right-4">
            <FontAwesomeIcon icon={faXmark} />
          </label>
          {/* Sidebar content here */}
          <ul className="menu text-base-content min-h-full p-4 mt-5 gap-1">
            <li className={isActive('/') ? 'text-primary' : ''}>
              <Link href="/" onClick={closeDrawer}>Home</Link>
            </li>
            <li className={isActive('/services') ? 'text-primary' : ''}>
              <Link href="/services" onClick={closeDrawer}>Services</Link>
            </li>
            <li className={isActive('/portfolio') ? 'text-primary' : ''}>
              <Link href="/portfolio" onClick={closeDrawer}>Portfolio</Link>
              <ul className="p-2">
                <li><Link href="/portfolio/#projects" onClick={closeDrawer}>Projects</Link></li>
                <li><Link href="/portfolio/#clients" onClick={closeDrawer}>Our Clients</Link></li>
                <li><Link href="/portfolio/#testimonials" onClick={closeDrawer}>Testimonials</Link></li>
              </ul>
            </li>
            <li className={isActive('/contact') ? 'text-primary' : ''}>
              <Link href="/contact" onClick={closeDrawer}>Contact</Link>
            </li>
          </ul>
          <Link href='/booking' className="btn btn-primary btn-sm mx-4 w-32" onClick={closeDrawer}>Book Now</Link>
          <div className="social-icons p-4 mt-2">
            <a className='mx-2 hover:text-primary' href={social_media_links.facebook} target='_blank'>
              <FontAwesomeIcon icon={faFacebook} size='xl' />
            </a>
            <a className='mx-2 hover:text-primary' href={social_media_links.instagram} target='_blank'>
              <FontAwesomeIcon icon={faInstagram} size='xl' />
            </a>
            <a className='mx-2 hover:text-primary' href={social_media_links.tiktok} target='_blank'>
              <FontAwesomeIcon icon={faTiktok} size='xl' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
