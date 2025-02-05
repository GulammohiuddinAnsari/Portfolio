import React from 'react';
import Profile from '../Assets/profile-image.png';

const Home = () => {


    return (
        // Div container for the Home section with gradient background
        <div name="Home" className='bg-gradient-to-b from-black via-black to-gray-800  pt-16 min-h-screen w-full flex flex-col justify-center items-center'>

            {/* Max width container for content with padding and center alignment */}
            <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full py-10 px-14 md:flex-row '>

                {/* Left column containing introduction and call-to-action */}
                <div className='flex flex-col justify-center h-full mx-auto'>

                    {/* Introduction text with typewriter effect */}
                    <div className='text-white text-lg md:text-4xl sm:7xl font-bold'>
                        <p className='mb-2'>Hi,</p>
                        <p className='mb-2'>I'm <span className='italic hover:underline underline-offset-4 whitespace-nowrap'>Gulam Mohiuddin Ansari</span>,</p>
                      
                    </div>

                    {/* Brief description about myself */}
                    <p className=' text-gray-100 py-4 text-justify max-w-md0'>
                        A recent graduate with a B.C.A from Veer Narmad South Gujarat University. My journey in the world of technology has equipped me with a diverse set of skills that I'm excited to leverage in the software development realm.
                    </p>

                    

                </div>

                {/* Right column containing the profile image */}
                <div className='p-4 md:p-10'>
                    <img src={Profile}
                        alt="Profile"
                        className='mx-auto h-[30%] w-[100%] md:h-auto md:w-[900px] rounded-[50%]'
                    />
                </div>

            </div>

        </div>


    );
}

// Exporting the Home component as the default export
export default Home;
