"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="w-screen z-10 bg-slate-300">
      <div className="flex justify-between items-center bg-white p-3 pl-6 shadow-custom fixed top-0 left-0 w-screen ">

        <div className="">
          <Link href="/">
            <h2 className="sm:text-lg sm:font-semibold font-bold">Artisian</h2>
          </Link>
        </div>

        <div className="md:flex md:justify-between md:items-center hidden">
          <Link href="/" className="mr-4">
            <p className="sm:text-base sm:font-semibold">Home</p>
          </Link>

          <Link href="/about" className="mr-4">
            <p className="sm:text-base sm:font-semibold">About</p>
          </Link>

          <Link href="/contact">
            <p className="sm:text-base sm:font-semibold">Contact</p>
          </Link>
        </div>

        <div className="md:flex  md:justify-between md:items-center hidden">
          <Link href="/buyer/register" className="mr-4">
            <p className="sm:text-base sm:font-semibold">Buyer</p>
          </Link>

          <Link href="/seller/register">
            <p className="sm:text-base sm:font-semibold">Seller</p>
          </Link>
        </div>

        {nav ? (
          <ImCross
            className="md:hidden cursor-pointer"
            onClick={() => {
              setNav(!nav);
            } } />
        ) : (
          <GiHamburgerMenu
            className="md:hidden cursor-pointer font-bold text-lg"
            onClick={() => setNav(!nav)} />
        )}
      </div>
    </div>
    <div>
      {nav ?
          <div className="md:hidden fixed  w-[10rem] bg-slate-300  h-screen top-[3.3rem] left-0 p-3 shadow-responsive">
            <Link href='/'>
              <p className="font-semibold mb-6">Home</p>
            </Link>

            <Link href='/about'>
              <p className="mb-6 font-semibold">About</p>
            </Link>

            <Link href='/contact'>
              <p className="mb-6 font-semibold">Contact</p>
            </Link>

            <Link href='/buyer/register'>
              <p className="mb-6 font-semibold">Buyer</p>
            </Link>

            <Link href='/seller/register'>
              <p className="mb-2 font-semibold">Seller</p>
            </Link>
          </div>
          :
          <></>}

    </div>
  </>

  );
};

export default Navbar;
