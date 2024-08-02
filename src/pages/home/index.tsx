import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../../useContext";
import { Drawer, TextField } from "@mui/material";

const Home = () => {
    const { todo, setTodo } = useContext<any>(TodoContext);
    const [open, setOpen] = useState({ isOpen: false, name: '' });

    function handleAddUser(name: string) {
        let newUser = { userName: name, userId: `${todo?.length + 1}`, groups: [] }
        todo?.push(newUser);
        setTodo(todo)
        setOpen({ ...open, isOpen: false, name: '' })
    }

    return (
        <div className='p-40 flex'>
            <div className='w-[25%]'></div>
            <div className='w-[50%]'>
                <div className='flex justify-between items-center py-4'>
                    <div className='text-lg font-medium'>User</div>
                    <div className='text-blue-600 border-2 border-blue-600 bg-blue-200 rounded-md px-4 py-0.5 cursor-pointer' onClick={() => setOpen({ ...open, isOpen: true })}>Add User</div>
                </div>
                {todo?.map((each: any, index: number) => {
                    return (
                        <div key={index} className='flex justify-between items-center py-2'>
                            <Link to={`/user/${each?.userId}`} className='text-lg capitalize'>{each?.userName}</Link>
                            <div className='flex'>
                                <div className='text-lg text-blue-600'>___</div>
                                <div className='w-16'></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='w-[25%]'></div>
            <Drawer anchor={"right"} open={open?.isOpen} onClose={() => setOpen({ ...open, isOpen: false, name: '' })}>
                <div className="w-[500px] h-full flex flex-col justify-between">
                    <div className="p-4">
                        <div>
                            <div className="py-2 text-base">Name</div>
                            <div><TextField value={open.name} onChange={(evt) => setOpen({ ...open, name: evt.target.value })} fullWidth /></div>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 shadow-md">
                        <div className="text-red-500 text-lg w-[50%] text-center p-2.5" onClick={() => setOpen({ ...open, isOpen: false, name: '' })}>Cancel</div>
                        <div className="bg-blue-500 text-white text-lg w-[50%] text-center p-2.5" onClick={()=>{handleAddUser(open?.name)}}>Save</div>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Home;