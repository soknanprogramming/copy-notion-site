import React from "react";
import ume_logo from "../assets/image/ume-logo.jpg"
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaRegFaceFlushed } from "react-icons/fa6";
import ProductCard from "./TopBar/ProductCard";


const TopBar: React.FC = () => {
    return(
        <div className="flex flex-col">
            <div className="border-b h-16.5 flex justify-between items-center px-15">
                <div>
                    <img className="size-8" src={ume_logo} />
                </div>
                <div className="flex items-center gap-1 *:hover:bg-gray-300 *:px-2 *:py-1 *:hover:rounded-sm">
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
            <div className="justify-center items-center flex flex-col mt-3 px-3 border w-2xl mx-auto">
                <div className="flex w-full my-3 justify-between bg-gray-100 p-3 rounded-md">
                    <div className="flex items-center gap-2 group">
                        <div>
                            <img className="size-10" src={ume_logo} alt="" />
                        </div>
                        <div>
                            <h1 className="text-2xl group-hover:underline underline-offset-2">Notion</h1>
                            <p className="text-xs text-gray-500">Your AI workspace</p>
                        </div>
                    </div>
                    <div className="*:flex *:gap-2 *:items-center *:m-2 *:text-sm">
                        <div className="group">
                            <FaRegCalendarAlt/>
                            <p className="group-hover:underline underline-offset-2">Notion Calendar</p>
                        </div>
                        <div className="group">
                            <FaMailchimp/>
                            <p className="group-hover:underline underline-offset-2">Notion Mail</p>
                        </div>
                    </div>
                </div>
                {/* show product */}
                <div className="flex w-full bg-amber-200 justify-center">
                    <div>
                        <ProductCard title="Notion AI" description="AI tools for work">
                            <FaRegFaceFlushed/>
                        </ProductCard>
                        <ProductCard title="Notion AI" description="AI tools for work">
                            <FaRegFaceFlushed/>
                        </ProductCard>
                        <ProductCard title="Notion AI" description="AI tools for work">
                            <FaRegFaceFlushed/>
                        </ProductCard>
                        <ProductCard title="Notion AI" description="AI tools for work">
                            <FaRegFaceFlushed/>
                        </ProductCard>
                    </div>
                    <div>
                        <ProductCard title="Notion AI" description="AI tools for work">
                            <FaRegFaceFlushed/>
                        </ProductCard>
                        <ProductCard title="Notion AI" description="AI tools for work">
                            <FaRegFaceFlushed/>
                        </ProductCard>
                        <ProductCard title="Notion AI" description="AI tools for work">
                            <FaRegFaceFlushed/>
                        </ProductCard>
                    </div>
                    <div>
                        <ProductCard title="Notion AI" description="AI tools for work">
                            <FaRegFaceFlushed/>
                        </ProductCard>
                        <ProductCard title="Notion AI" description="AI tools for work">
                            <FaRegFaceFlushed/>
                        </ProductCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;