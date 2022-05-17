import React from "react";


const Navigationbar = () => {
    return(
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
            <div>
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <h1 className="w-full text-3xl font-bold text-[#00df9a]">ENGORA</h1>
                    </div>
                    <div className="flex items-center px-4">
                        <ul className='hidden md:flex'>
                            <li className='p-4'>Home</li>
                            <li className='p-4'>Company</li>
                            <li className='p-4'>Resources</li>
                            <li className='p-4'>About</li>
                            <li className='p-4'>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Navigationbar;