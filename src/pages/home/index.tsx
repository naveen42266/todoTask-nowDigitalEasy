import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='p-40 flex'>
            <div className='w-[25%]'></div>
            <div className='w-[50%]'>
                <div className='flex justify-between items-center py-4'>
                    <div className='text-lg font-medium'>User</div>
                    <div className='text-blue-600 border-2 border-blue-600 bg-blue-200 rounded-md px-4 py-0.5'>Add User</div>
                </div>
                {['Gobinath', 'Kirubhakaran']?.map((each, index) => {
                    return (
                        <div key={index} className='flex justify-between items-center py-2'>
                           <Link to={`/user/${each}`} className='text-lg'>{each}</Link>
                            <div className='flex'>
                                <div className='text-lg text-blue-600'>___</div>
                                <div className='w-16'></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='w-[25%]'></div>
        </div>
    )
}

export default Home;