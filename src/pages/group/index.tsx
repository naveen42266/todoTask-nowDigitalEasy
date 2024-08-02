import { Link, useParams } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import { TodoContext } from "../../useContext";
import { Drawer, TextField } from "@mui/material";

const Group = () => {
    const { userid } = useParams();
    const { groupid } = useParams();
    const { todo, setTodo } = useContext<any>(TodoContext);
    const [open, setOpen] = useState({ isOpen: false, todo: '' });

    const user = todo.find((each: any) => each.userId === userid);
    let group = null

    if (user) {
        group = user.groups.find((each: any) => each.groupId === groupid);
    }

    function handleTask(taskId: string) {
        const updatedTodo = todo.map((usr: any) => {
            if (usr.userId === userid) {
                return {
                    ...usr,
                    groups: usr.groups.map((grp: any) => {
                        if (grp.groupId === groupid) {
                            // Update the tasks within the group
                            const updatedTasks = grp.tasks.map((task: any) => {
                                if (task.taskId === taskId) {
                                    return { ...task, isComplete: !task.isComplete };
                                }
                                return task;
                            });
    
                            // Determine if all tasks are complete
                            const allTasksComplete = updatedTasks.every((task: any) => task.isComplete);
    
                            // Update the group
                            return {
                                ...grp,
                                tasks: updatedTasks,
                                isComplete: allTasksComplete
                            };
                        }
                        return grp;
                    })
                };
            }
            return usr;
        });
    
        setTodo(updatedTodo);
    }

    function handleNewTask(task: string) {
        todo.map((each: any) => {
            if (each.userId === userid) {
                each.groups.map((each: any) => {
                    if (each.groupId === groupid) {
                        let newTask = { taskId: 'task' + `${each?.tasks?.length + 1}`, taskName: task, isComplete: false };
                        each?.tasks?.push(newTask);
                    }
                })
            }
        })
        setTodo(todo);
        setOpen({ ...open, isOpen: false, todo: '' })
    }
    return (
        <div className='p-40 flex'>
            <div className='w-[10%]'></div>
            <Link to={`/user/${userid}`} className="w-[15%] flex gap-3 pt-4 h-10">
                <IoArrowBackSharp className="text-2xl" />
                <div className="text-lg">Back</div>
            </Link>
            <div className='w-[50%]'>
                <div className='flex justify-between items-center py-4'>
                    <div>
                        <div className="capitalize">{user?.userName}</div>
                        <div className='text-lg font-medium capitalize'>{group?.groupName}</div>
                    </div>
                    <div className='text-blue-600 border-2 border-blue-600 bg-blue-200 rounded-md px-4 py-0.5' onClick={() => setOpen({ ...open, isOpen: true })}>Add Todo</div>
                </div>
                {group?.tasks?.map((each: any, index: number) => (
                    <div key={index} className="relative flex justify-between items-center py-2">
                        <div className="relative flex items-center text-lg">
                            <div className="relative capitalize">
                                {each?.isComplete ? (
                                    <input
                                        type="checkbox"
                                        id={`task-${each?.taskId}`}
                                        className="mr-2"
                                        checked
                                        onChange={() => handleTask(each?.taskId)}
                                    />
                                ) : (
                                    <input
                                        type="checkbox"
                                        id={`task-${each?.taskId}`}
                                        className="mr-2"
                                        onChange={() => handleTask(each?.taskId)}
                                    />
                                )}
                                {each?.taskName}
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
            <Drawer anchor={"right"} open={open?.isOpen} onClose={() => setOpen({ ...open, isOpen: false, todo: '' })}>
                <div className="w-[500px] h-full flex flex-col justify-between">
                    <div className="p-4">
                        <div>
                            <div className="py-2 text-base">To-Do</div>
                            <div><TextField value={open.todo} onChange={(evt) => setOpen({ ...open, todo: evt.target.value })} fullWidth /></div>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 shadow-md">
                        <div className="text-red-500 text-lg w-[50%] text-center p-2.5" onClick={() => setOpen({ ...open, isOpen: false, todo: '' })}>Cancel</div>
                        <div className="bg-blue-500 text-white text-lg w-[50%] text-center p-2.5" onClick={() => { handleNewTask(open?.todo) }}>Save</div>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Group;