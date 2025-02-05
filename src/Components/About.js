import { Personal_Description } from "../Components/Data/Data";

// Functional component for the About section
const About = () => {
    return (
        <div
            name="About"
            className=" w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white flex flex-col justify-center items-center"
        >
            <div className="max-w-screen-lg px-14 pb-24 mx-auto flex flex-col justify-center items-center w-full h-full">
                {/* Header for the About section */}
                <div className="pb-8 flex flex-row justify-center items-center">
                    <p className="font-bold text-4xl border-b-4 inline border-gray-500">
                        About
                    </p>
                </div>

                {/* Introduction paragraph */}
                <p className="text-xl mt-3 text-justify">
                    {Personal_Description}
                </p>
            </div>
        </div>
    );
};

// Exporting the About component as the default export
export default About;
