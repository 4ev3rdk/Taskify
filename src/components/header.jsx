import React from 'react';

const Header = () => {

    return (
        <div className="bg-[#1d2125] w-full h-12 p-3 border-b border-box flex flex-row justify-between"> {/* we use brackets because of custom colors or else we could use bg-yellow-500 directly */}
            <div className="left justify-center flex items-center "><h3 className="text-slate-50">Taskify</h3></div>

            <div className="right flex items-center space-x-4">
                <span>Remote Dev </span>
                <img className="rounded-full" src="https://picsum.photos/id/237/200/300 " height="40" width="40" alt="" />

            </div>
        </div>
    );
}
export default Header;