import '../style/HeroStyle.css';
import Typed from 'react-typed';

const SuperHero = () => {
    return(
        <div className='hero-selector text-center text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='md:text-5xl sm:text-5xl text-5xl font-bold mt-4'>The First Stop for <br></br> Engineering</h1>
                <p className='text-2xl mt-5 mb-4'>
                    Finding the best part in the entire world should be as simpe as a Googe Search.<br></br>
                    And designing an entire aircraft should be as simple as a Python script.<br></br>
                    We remove the drudgery in engineering.<br></br>
                </p>
                <div className='flex justify-center items-center'>
                    <p className='md:text-2xl sm:text-2xl text-xl py-4'>
                    Let engineers innovate.
                    </p>
                    <Typed
                    className='md:text-xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                    strings={['Let computers do the rest.']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                    />
                </div>
                <button className='bg-[#b8b9fa] w-[280px] rounded-md my-2 mx-auto py-2 text-white hover:bg-[#595bc9]'>ENGORA SEARCH ALPHA</button>
            </div>
            <div className='columns-2'>

            </div>
        </div>
    )
}

export default SuperHero;