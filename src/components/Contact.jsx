import { faBuilding, faEnvelope, faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const ContactCompany = () => {
    return(
        <div className="bg-[#1d1f23] py-9 text-white">
            <h1 className="text-white font-sans font-bold text-center py-3 text-3xl">Contact Us</h1>
            <div className="max-w-[1040px] mx-auto grid md:grid-cols-2 gap-8 py-4">
                <div className="w-full flex flex-col py-4 my-2 mx-5">
                    <h1 className="text-white text-xl font-sans py-5">Call us by</h1>
                    <div className="text-white flex flex-row my-3">
                        <FontAwesomeIcon icon={faPhone} color="white" className="pt-1"/>
                        <p className="mx-2">+1 &#40;617&#41; 291&#45;0447</p>
                    </div>
                    <div className="text-white flex flex-row my-3">
                        <FontAwesomeIcon icon={faEnvelope} color="white" className="pt-1"/>
                        <p className="mx-2">info&#64;engora.tech</p>
                    </div>
                    <div className="text-white flex flex-row my-3">
                        <FontAwesomeIcon icon={faGlobe} color="white" className="pt-1"/>
                        <p className="mx-2">info&#64;engora.tech</p>
                    </div>
                </div>
                <div className="w-full flex flex-col py-4 my-2 mx-5">
                    <h1 className="text-white text-xl font-sans py-5">
                        <FontAwesomeIcon icon={faBuilding}/> Our Company
                    </h1>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContactCompany;