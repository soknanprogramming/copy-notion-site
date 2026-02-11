import React from "react";
import ume_logo from "../assets/image/ume-logo.jpg"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const TopBar: React.FC = () => {
    return(
        <div className="border-b h-16.5 flex justify-between items-center px-15">
            <div>
                <img className="size-8" src={ume_logo} />
            </div>
            <div className="flex items-center gap-8">
                <div className="flex items-center"><p>Product</p><IoIosArrowDown className="m-1.5"/></div>
                <div className="flex items-center"><p>AI</p><IoIosArrowDown className="m-1.5"/></div>
                <div className="flex items-center"><p>Solutions</p><IoIosArrowDown className="m-1.5"/></div>
                <div className="flex items-center"><p>Resources</p><IoIosArrowDown className="m-1.5"/></div>
                <div><p>Enterprise</p></div>
                <div><p>Pricing</p></div>
                <div><p>Request a demo</p></div>
            </div>
            <div className="flex gap-12">
                <button>Log in</button>
                <button className="bg-blue-500 text-white py-1.5 px-3 rounded-md">Join Notion free</button>
            </div>
        </div>
    )
}

export default TopBar;