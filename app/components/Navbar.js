"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/assets/images/logo.png";
import Cart from "../../public/assets/images/cart.png";
import User from "../../public/assets/images/user.png";
import Search from "../../public/assets/images/search.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import Link from "next/link";
import SearchModal from "./SearchModal";
import OffCanvas from "./OffCanvas";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <div className="bg-hero bg-center bg-cover h-screen bg-no-repeat bg-[#00000069] py-10 ">
        <div className="container mx-auto px-1 md:px-5">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              {/* <div className="flex justify-center items-center">
               
              </div> */}
              {/* <IoReorderThreeOutline className="text-2xl text-white" />
              <p className="text-sm md:text-2xl font-light text-white">
                PRODUCTS
              </p> */}
              <OffCanvas />
            </div>
            <div className="">
              <Image src={Logo} className="w-[70px] md:w-48" />
            </div>
            <div className="flex gap:1 md:gap-3">
              <div className="text-white md:border-r pr-3">ESPAÑOL</div>
              <div className="px-1">
                <Link href="#" onClick={toggleModal}>
                  <Image src={Search} />
                </Link>
              </div>
              <div className="px-1">
                <Link href="#">
                  <Image src={User} />
                </Link>
              </div>
              <div className="px-1">
                <Link href="#">
                  <Image src={Cart} />
                </Link>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-1 md:px-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-3xl font-extrabold text-white text-center">
              OZUNA{" "}
              <span className="ps-2 text-3xl font-medium text-white">
                OFFICIAL STORE
              </span>
            </div>
            <div className="text-4xl md:text-6xl font-light text-white text-center mb-10 mt-5">
              PRE-ORDER COSMO MERCH
            </div>
            <div className="text-center my-1">
              <Link
                href="#"
                className="text-xl text-white font-black bg-[#ffffff34] px-10 py-4 rounded tracking-wide"
              >
                Porches now
              </Link>
            </div>
          </div>
          {/* search modal */}
          <SearchModal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
      </div>
    </div>
  );
}
