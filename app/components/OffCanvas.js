"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import ImgLightBox from "@/public/assets/images/light-box-image.png";
import ImgLightBoxBtn from "@/public/assets/images/light-box-btn.png";
import ImgMarkGroup1 from "@/public/assets/images/Mask-group-1.png";
import ImgMarkGroup2 from "@/public/assets/images/Mask-group-2.png";
import ImgMarkGroup3 from "@/public/assets/images/Mask-group-3.png";
import ImgMarkGroup4 from "@/public/assets/images/Mask-group-4.png";
import ImgMarkGroup5 from "@/public/assets/images/Mask-group-5.png";
import ImgMarkGroup6 from "@/public/assets/images/Mask-group-6.png";
import Img10 from "@/public/assets/images/image-10.png";
import ImgCart from "@/public/assets/images/cart-img.svg";
import { FaStar } from "react-icons/fa";

export default function OffCanvas() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>

      <div className="">
        <div
          className={`fixed left-0 z-100 top-24 w-2/5 bg-gray-900 z-50 text-white transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex gap-2">
            <div className="w-2/5 bg-white">
              <ul className="text-lg text-black font-normal ps-5">
                <li className="p-2"><Link href="#" className="text-[#7f1d1d]">All Appel</Link></li>
                <li className="p-2"><Link href="#">Cosmo</Link></li>
                <li className="p-2"><Link href="#">Ozutochi</Link></li>
                <li className="p-2"><Link href="#">Enoc</Link></li>
                <li className="p-2"><Link href="#">Flash Sale</Link></li>

              </ul>
            </div>
            <div className="w-3/5 bg-[#000000a8] p-5">
              <div className="my-5 md:my-0 w-full">
                <div class="relative group">
                  <Image src={ImgMarkGroup1} className="rounded-2xl" />{" "}
                  <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                  <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-100">
                    <div class="flex-row pb-5  w-full">
                      <h4 class="text-white font-bold text-xl ps-5">
                        OZUNA AURA TOUR T-SHIRT
                      </h4>
                      <div className="flex justify-between px-3 items-center">
                        <div>
                          <div className="flex gap-1 py-1">
                            <div className="flex text-xl text-[#FFC829]">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                            </div>
                            <div className="text-white text-base font-medium">
                              5 Reviews
                            </div>
                          </div>
                          <h5 className="text-white text-xl font-medium">
                            US $9.98
                          </h5>
                        </div>
                        <div>
                          <Link href="#">
                            <Image src={ImgCart} className="w-10" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-5 md:my-0 w-full">
                <div class="relative group">
                  <Image src={ImgMarkGroup1} className="rounded-2xl" />{" "}
                  <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                  <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-100">
                    <div class="flex-row pb-5  w-full">
                      <h4 class="text-white font-bold text-xl ps-5">
                        OZUNA AURA TOUR T-SHIRT
                      </h4>
                      <div className="flex justify-between px-3 items-center">
                        <div>
                          <div className="flex gap-1 py-1">
                            <div className="flex text-xl text-[#FFC829]">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                            </div>
                            <div className="text-white text-base font-medium">
                              5 Reviews
                            </div>
                          </div>
                          <h5 className="text-white text-xl font-medium">
                            US $9.98
                          </h5>
                        </div>
                        <div>
                          <Link href="#">
                            <Image src={ImgCart} className="w-10" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               <div className="my-5 md:my-0 w-full">
                <div class="relative group">
                  <Image src={ImgMarkGroup1} className="rounded-2xl" />{" "}
                  <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                  <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-100">
                    <div class="flex-row pb-5  w-full">
                      <h4 class="text-white font-bold text-xl ps-5">
                        OZUNA AURA TOUR T-SHIRT
                      </h4>
                      <div className="flex justify-between px-3 items-center">
                        <div>
                          <div className="flex gap-1 py-1">
                            <div className="flex text-xl text-[#FFC829]">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                            </div>
                            <div className="text-white text-base font-medium">
                              5 Reviews
                            </div>
                          </div>
                          <h5 className="text-white text-xl font-medium">
                            US $9.98
                          </h5>
                        </div>
                        <div>
                          <Link href="#">
                            <Image src={ImgCart} className="w-10" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div
            className="opacity-50 z-1000"
            onClick={toggleMenu}
          ></div>
        )}
        <button
          className="text-white p-2 rounded flex items-center"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <ImCross className="text-2xl text-white pe-2" />
          ) : (
            <IoReorderThreeOutline className="text-2xl text-white" />
          )}
          {isOpen ? "PRODUCTS" : "PRODUCTS"}
        </button>
      </div>


      <div className="relative hidden">
        {/* Off-canvas menu */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="p-4">
            <h2 className="text-xl font-bold">Menu</h2>
            <ul className="mt-4">
              <li className="py-2">Item 1</li>
              <li className="py-2">Item 2</li>
              <li className="py-2">Item 3</li>
            </ul>
          </div>
        </div>
        {/* Off-canvas overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleMenu}
          ></div>
        )}
        {/* Toggle button */}
        <button
          className="fixed top-0 left-0 m-4 bg-gray-900 text-white p-2 rounded flex items-center"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
          {isOpen ? "Close Menu" : "Open Menu"}
        </button>
      </div>
    </div>
  );
}