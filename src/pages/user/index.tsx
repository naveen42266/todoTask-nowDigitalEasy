import { Link, useParams } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import { TodoContext } from "../../useContext";
import { Drawer, TextField } from "@mui/material";

const User = () => {
    const { userid } = useParams();
    const { todo, setTodo } = useContext<any>(TodoContext);
    const [open, setOpen] = useState({ isOpen: false, group: '' });

    const user = todo.find((each: any) => each.userId === userid);

    function handleAddGroup(name: string) {
        todo.map((each: any) => {
            if (each.userId === userid) {
                let newGroup = { groupId:'group' + `${each?.groups?.length + 1}`, groupName: name, isComplete: false, tasks: [] };
                each?.groups?.push(newGroup);
            }
        })
        setTodo(todo);
        setOpen({ ...open, isOpen: false, group: '' });
    }
    return (
        <div className='p-40 flex'>
            <div className='w-[10%]'></div>
            <Link to={'/'} className="w-[15%] flex gap-3 pt-4 h-10">
                <IoArrowBackSharp className="text-2xl" />
                <div className="text-lg">Back</div>
            </Link>
            <div className='w-[50%]'>
                <div className='flex justify-between items-center py-4'>
                    <div>
                        <div className="capitalize">{user?.userName}</div>
                        <div className='text-lg font-medium'>Todo Group</div>
                    </div>
                    <div className='text-blue-600 border-2 border-blue-600 bg-blue-200 rounded-md px-4 py-0.5' onClick={() => setOpen({ ...open, isOpen: true })}>Add</div>
                </div>
                {user?.groups?.map((each: any, index: number) => (
                    <div key={index} className="relative flex justify-between items-center py-2">
                        <div className="relative flex items-center text-lg">
                            <div className="relative">
                                <Link to={`/user/${userid}/${each?.groupId}`} className="capitalize">{each?.groupName}</Link>
                                {each?.isComplete && <div className="absolute top-[16px] left-1/2 transform -translate-x-1/2 w-full border-t-2 border-black rotate-[-8deg]"></div>}
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
            <Drawer anchor={"right"} open={open?.isOpen} onClose={() => setOpen({ ...open, isOpen: false, group: '' })}>
                <div className="w-[500px] h-full flex flex-col justify-between">
                    <div className="p-4">
                        <div>
                            <div className="py-2 text-base">Group</div>
                            <div><TextField value={open.group} onChange={(evt) => setOpen({ ...open, group: evt.target.value })} fullWidth /></div>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 shadow-md">
                        <div className="text-red-500 text-lg w-[50%] text-center p-2.5" onClick={() => setOpen({ ...open, isOpen: false, group: '' })}>Cancel</div>
                        <div className="bg-blue-500 text-white text-lg w-[50%] text-center p-2.5" onClick={() => { handleAddGroup(open?.group) }}>Save</div>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default User;