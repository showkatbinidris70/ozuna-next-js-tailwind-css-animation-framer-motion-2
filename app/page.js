"use client";
import Image from "next/image";
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
import Link from "next/link";
import { Tab, Tabs } from "./components/Tabs";
import React, { useState } from "react";
import Lightbox from "./components/Lightbox";

export default function Home() {
  const [isLightboxVisible, setLightboxVisible] = useState(false);

  const handleOpenLightbox = () => {
    setLightboxVisible(true);
  };

  const handleCloseLightbox = () => {
    setLightboxVisible(false);
  };
  return (
    <div>
      <div className="container mx-auto px-5 hidden">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-md">
            {/* Button to open lightbox */}
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={handleOpenLightbox}
            >
              Open Video
            </button>
            {isLightboxVisible && <Lightbox onClose={handleCloseLightbox} />}{" "}
          </div>
        </div>
      </div>
      <div className="bg-image-1 bg-no-repeat bg-right bg-auto py-52">
        <div className="container mx-auto px-5">
          <div className="md:flex gap-4 items-center justify-between">
            <div className="w-full md:w-2/5 py-3 md:py-1">
              <h2 className="text-5xl md:text-5xl xl:text-7xl  text-[#242F3D] font-bold">
                Anuel AA & Ozuna - Los Dioses CD
              </h2>
              <h5 className="text-[#242F3D] text-2xl py-4 font-semibold">
                US $9.98
              </h5>
              <div className="flex gap-3">
                <div className="flex gap-1 text-2xl text-[#FFC829]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="text-[#242F3D] text-2xl">5 Reviews</div>
              </div>
              <div className="my-6">
                <a
                  href="#"
                  className="bg-[#E7323F] text-white text-xl rounded py-4 px-10"
                >
                  Porches now
                </a>
              </div>
            </div>
            <div className="w-full md:w-3/5 py-3 md:py-1">
              <div className="relative">
                <Image
                  src={ImgLightBox}
                  className="2xl:w-[1034px] 2xl:h-[582px]"
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* <a href="#">
                                    <Image src={ImgLightBoxBtn}
                                        className="flex justify-center"/>
                                </a> */}
                  <button className="" onClick={handleOpenLightbox}>
                    <Image
                      src={ImgLightBoxBtn}
                      className="flex justify-center"
                    />
                  </button>
                  {isLightboxVisible && (
                    <Lightbox onClose={handleCloseLightbox} />
                  )}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-image-2 bg-no-repeat bg-left-bottom bg-auto pb-20 pt-48">
        <div className="container mx-auto px-5">
          <Tabs>
            <Tab label="OZUTOCHI">
              <h1>tab one</h1>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="my-5 md:my-0 w-full">
                  <div class="relative group">
                    <Image src={ImgMarkGroup1} className="rounded-2xl" />
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup2} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup3} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup4} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <div className="text-center my-1">
                          <Link
                            href="#"
                            className="text-xl text-white font-black bg-[#ffffff34] p-2 rounded"
                          >
                            Porches now
                          </Link>
                        </div>
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-center px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-center  text-2xl lg:text-xl xl:text-2xl font-medium">
                              US $9.98
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-5 md:my-0 w-full">
                  <div class="relative group">
                    <Image src={ImgMarkGroup5} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup6} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
            </Tab>
            <Tab label="LOS DIOSES">
              <h1>tab two</h1>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="my-5 md:my-0 w-full">
                  <div class="relative group">
                    <Image src={ImgMarkGroup1} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup2} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup3} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup4} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup5} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup6} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
            </Tab>
            <Tab label="ENOC">
              <h1>tab three</h1>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="my-5 md:my-0 w-full">
                  <div class="relative group">
                    <Image src={ImgMarkGroup1} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup2} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup3} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup4} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup5} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup6} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
            </Tab>
            <Tab label="FEATURED">
              <h1>tab four</h1>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="my-5 md:my-0 w-full">
                  <div class="relative group">
                    <Image src={ImgMarkGroup1} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup2} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup3} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup4} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup5} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
                    <Image src={ImgMarkGroup6} className="rounded-2xl" />{" "}
                    {/* <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/> */}
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full rounded-2xl"></div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-end opacity-0 hover:opacity-100">
                      <div class="flex-row pb-5  w-full">
                        <h4 class="text-white font-bold lg:text-lg text-xl xl:text-2xl ps-5">
                          OZUNA AURA TOUR T-SHIRT
                        </h4>
                        <div className="flex justify-between px-5 items-center">
                          <div>
                            <div className="flex gap-3 lg:gap-1 xl:gap-3 py-1">
                              <div className="flex gap-1 text-2xl lg:text-xl xl:text-2xl text-[#FFC829]">
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
                            <h5 className="text-white text-2xl lg:text-xl xl:text-2xl font-medium">
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
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="bg-image-3 bg-no-repeat bg-right bg-auto py-64">
        <div className="container mx-auto  px-5">
          <div className="md:flex gap-4 items-center justify-between bg-[#030303] rounded-2xl">
            <div className="w-full md:w-3/5 py-5 md:py-0">
              <h2 className="text-white text-4xl lg:text-7xl text-center font-bold">
                Coming Soon !
              </h2>
            </div>
            <div className="w-full md:w-2/5 py-5 md:py-0">
              <Image src={Img10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
