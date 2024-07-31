import { Link, useParams } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { TbBackslash } from "react-icons/tb";


const User = () => {
    const { userid } = useParams();

    return (
        <div className='p-40 flex'>
            <div className='w-[10%]'></div>
            <Link to={'/'} className="w-[15%] flex gap-3 pt-4">
                <IoArrowBackSharp className="text-2xl" />
                <div className="text-lg">Back</div>
            </Link>
            <div className='w-[50%]'>
                <div className='flex justify-between items-center py-4'>
                    <div>
                        <div>{userid}</div>
                        <div className='text-lg font-medium'>Todo Group</div>
                    </div>
                    <div className='text-blue-600 border-2 border-blue-600 bg-blue-200 rounded-md px-4 py-0.5'>Add</div>
                </div>
                {['Office', 'Home Home Home', 'Home Home', 'Home'].map((each, index) => (
                    <div key={index} className="relative flex justify-between items-center py-2">
                        <div className="relative flex items-center text-lg">
                            <div className="relative">
                                {each}
                                {/* Centered straight line above the content */}
                                <div className="absolute top-[16px] left-1/2 transform -translate-x-1/2 w-full border-t-2 border-black rotate-[-8deg]"></div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-lg text-blue-600">___</div>
                            <div className="w-10"></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-[25%]'></div>
        </div>
    )
}

export default User;