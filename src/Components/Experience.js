import { Experience as Experience_List } from "../Components/Data/Data";

const Experience = () => {
    return (
        <div
            name="Experience"
            className="w-full min-h-screen text-white pt-28 bg-gradient-to-b from-black to-gray-800"
        >

            <div className="max-w-screen-lg px-14 pb-10 mx-auto flex flex-col justify-center items-center w-full h-full">
                {/* Header for the About section */}
                <div className="pb-8 flex flex-row justify-center items-center">
                    <p className="font-bold text-4xl border-b-4 inline border-gray-500">
                        Experience
                    </p>
                </div>

                <div className="bg-gradient-to-b from-black to-gray-900 w-full h-full p-6  shadow-md shadow-gray-500 rounded-md flex flex-col gap-6 justify-center items-center">
                    {
                        Experience_List.map(({ id, designation }) => (

                            <div key={id} className="flex flex-row gap-6 justify-center">
                                <div className="border-white  py-2 rounded-md">

                                </div>
                                <div
                                    className="rounded-md px-3 md:px-5 py-2 w-[80%] md:w-[100%] h-full bg-gray-800">
                                    <p className="md:text-[1.2rem] font-bold text-center">{designation}</p>
                                </div>
                            </div>

                        )
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Experience;

