import React from "react";
import {FaFacebookSquare} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";

export default function FooterPage() {
    return (
        <div>
            <div className="container mx-auto px-5">
                <div className="">
                    <h2 className="text-center font-extrabold text-black text-2xl md:text-3xl">
                        JOIN OUR MAILING LIST
                    </h2>
                    <div class="flex justify-center mt-5 md:mt-10">
                        <input type="search" class="relative m-0 block w-full md:w-2/5 py-6 rounded border border-solid border-[#C2C2C2] bg-transparent ps-4" id="exampleSearch" placeholder="Email Address"/>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-5 mt-5 mb-20">
                <div className="flex gap-2 items-center justify-center">
                    <div className="text-xl text-black font-medium">Follow us</div>
                    <div className="flex gap-2">
                        <a href="#"><FaTwitterSquare className="text-xl"/></a>
                        <a href="#"><FaInstagramSquare className="text-xl"/></a>
                        <a href="#"><FaFacebookSquare className="text-xl"/></a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-5 my-5">
                <div className="flex justify-center">
                    <ul className="flex gap-4 text-sm font-semibold flex-wrap justify-center">
                        <li className="border-r-2  border-black pr-4">
                            <a href="#">HELP</a>
                        </li>
                        <li className="border-r-2  border-black pr-4">
                            <a href="#">CONTACT</a>
                        </li>
                        <li className="border-r-2  border-black pr-4">
                            <a href="#">ACCESSIBILITY</a>
                        </li>
                        <li className="border-r-2 border-black pr-4">
                            <a href="#">PRIVACY POLICY</a>
                        </li>
                        <li className="border-r-2 border-black pr-4">
                            <a href="#">TERMS OF USE</a>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="container mx-auto px-5 my-3">
                <div className="text-center text-black text-sm font-semibold">
                    Copyright © 2023 Under license to Sony Music.
                </div>
            </div>
        </div>
    );
}
