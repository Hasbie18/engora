import '../style/CompanyStyle.css';
import graph2 from '../assets/images/graph2.gif';
import { faCloudArrowDown, faLaptop, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CompanyBuild = () => {
    return(
        <div className="company-build">
            <div className='p-5'>
                <h1 className='text-white text-center p-4 mt-4 text-3xl font-bold'>We build software tools that help engineers develop, share and <br></br>
                explore more designs with greater accuracy and creativity than <br></br>
                previosly possible.</h1>
            </div>
            <div className='w-full py-5 px-4'>
                <div className='max-w-[1080px] mx-auto grid md:grid-cols-2'>
                    <img className='flex felx-col justify-center opacity-20' src={graph2}/>
                    <div className='text-white mt-9 ml-5'>
                        <div className='flex flex-row mb-9'>
                            <FontAwesomeIcon icon={faCloudArrowDown} className='text-5xl mr-7'></FontAwesomeIcon>
                            <div>
                                <h1 className='md:text-2xl sm:text-xl text-2xl'>Component Search</h1>
                                <p className='md:text-lg sm:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias?</p>
                            </div>
                        </div>
                        <div className='flex flex-row mb-9'>
                            <FontAwesomeIcon icon={faLaptop} className='text-5xl mr-7'></FontAwesomeIcon>
                            <div>
                                <h1 className='md:text-2xl sm:text-xl text-2xl'>Data Management</h1>
                                <p className='md:text-lg sm:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias?</p>
                            </div>
                        </div>
                        <div className='flex flex-row mb-9'>
                            <FontAwesomeIcon icon={faGear} className='text-5xl mr-7'></FontAwesomeIcon>
                            <div>
                                <h1 className='md:text-2xl sm:text-xl text-2xl'>Decision Support</h1>
                                <p className='md:text-lg sm:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyBuild;