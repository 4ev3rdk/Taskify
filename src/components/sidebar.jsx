import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Plus } from 'react-feather';

const Sidebar = () => {
    const [collapsed, setcollapsed] = useState(false)
    return (
        <div className={`bg-[#121417] h-[calc(100vh-3rem)] border-r border-r-[#9fadbc29]  ${collapsed ? "w-[40px]" : "w-[280px]"}  transition-all linear duration-700 flex-shrink-0 `}>

            {/* && in React means “show this only if the thing on the left is true.” */}
            {collapsed && <div className="p-2">
                {/* onlclick flips !collapsed means do opposite */}
                <button onClick={() => setcollapsed(!collapsed)} className="hover:bg-slate-600 rounded-sm " >
                    <ChevronRight size="18"> </ChevronRight>
                </button>
            </div>}

            {!collapsed && <div className="p-2">

                <div className="workspace p-3 flex justify-between border-b border-b-[#9fadbc29]">

                    <h4> Remote Dev's Workspace</h4>

                    <button onClick={() => setcollapsed(!collapsed)} className="hover:bg-slate-600">
                        <ChevronLeft size="18"></ChevronLeft>
                    </button>
                </div>

                <div className="boardlist">
                    <div className="flex justify-between px-3 py-2 ">
                        <h6>Your Boards</h6>
                        <button className="hover:bg-slate-600 rounded-sm ">
                            <Plus size="18" ></Plus>
                        </button>
                    </div>
                </div>

                <ul>
                    <li>
                        <button className="px-3 py-2 w-full text-sm flex justify-start align-baseline hover:bg-gray-400 ">
                            <span className="w-6 h-max rounded-sm mr-2 bg-red-700 ">  &nbsp;  </span>
                            <span >My Taskify Board</span>
                        </button>
                    </li>
                </ul>
            </div>
            }
        </div >
    );
}
export default Sidebar;