'use client';
import React, {useState} from 'react';
import {ImCross} from "react-icons/im";

const Lightbox = ({onClose}) => {
    return (
        <div className="fixed inset-0 bg-[#000000] bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg hidden">
                {/* Your video player component goes here */}
                <iframe title="YouTube video player" className="w-full h-full" src="https://www.youtube.com/embed/Wh0q8vdH-ro?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    onClick={onClose}>
                    Close
                </button>
            </div>
            <div className="bg-[#0000002b]  p-8 rounded-lg">
                <div className='flex justify-center'>
                    <iframe title="YouTube video player" className="h-screen w-[1024px]" src="https://www.youtube.com/embed/Wh0q8vdH-ro?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <button className="text-white rounded"
                    onClick={onClose}>
                    <ImCross className='text-[#E7323F]'/>
                </button>
            </div>
        </div>
    );
};
export default Lightbox;
