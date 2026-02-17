import React, { useState, useEffect, useRef } from "react";
import ume_logo from "../assets/image/ume-logo.jpg"
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SiGotomeeting } from "react-icons/si";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { MdIntegrationInstructions } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";
import { FaSearchDollar } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { GrFormNextLink } from "react-icons/gr";
import { GoDesktopDownload } from "react-icons/go";
import { BsBoxSeam } from "react-icons/bs";
import { FaRegFaceFlushed } from "react-icons/fa6";
import ProductCard from "./TopBar/ProductCard";


const TopBar: React.FC = () => {
    const [isOpenProductMenu, setIsOpenProductMenu] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const productMenuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleEnterOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)
            && productMenuRef.current && !productMenuRef.current.contains(event.target as Node)) {
                setIsOpenProductMenu(false);
            }
        }

        if (isOpenProductMenu) {
            document.addEventListener('mouseover', handleEnterOutside);
        }

        return () => {
            document.removeEventListener('mouseover', handleEnterOutside);
        }

    }, [isOpenProductMenu])
    return(
        <div className="relative">
            <div className="border-b h-16.5 flex justify-between items-center px-15">
                <div>
                    <img className="size-8" src={ume_logo} />
                </div>
                <div ref={menuRef} className="flex h-full text-sm items-center gap-1 *:hover:bg-gray-300 *:px-2 *:py-1 *:hover:rounded-sm">
                    <div onMouseEnter={() => setIsOpenProductMenu(true)} className="flex items-center"><p>Product</p><IoIosArrowDown className="m-1.5"/></div>
                    <div className="flex items-center"><p>AI</p><IoIosArrowDown className="m-1.5"/></div>
                    <div className="flex items-center"><p>Solutions</p><IoIosArrowDown className="m-1.5"/></div>
                    <div className="flex items-center"><p>Resources</p><IoIosArrowDown className="m-1.5"/></div>
                    <div><p>Enterprise</p></div>
                    <div><p>Pricing</p></div>
                    <div><p>Request a demo</p></div>
                </div>
                <div className="flex gap-4 -ml-43">
                    <button className="hover:bg-gray-300 py-1 px-2 rounded-md">Log in</button>
                    <button className="bg-blue-500 hover:bg-blue-400 text-white py-1.5 px-3 rounded-md">Join Notion free</button>
                </div>
            </div>
            {/* product menu */}
            <div ref={productMenuRef} className="pt-3 w-2xl fixed right-0 left-0 mx-auto bg-white">
                <div className={(isOpenProductMenu ? "block" : "hidden")+ " " + "justify-center items-center flex flex-col px-3 border w-2xl mx-auto rounded-2xl"}>
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
                    <div className="flex w-full justify-between">
                        <div>
                            <ProductCard title="Notion AI" description="AI tools for work">
                                <GiBrain/>
                            </ProductCard>
                            <ProductCard title="Agents" description="Automate busywork">
                                <MdOutlineSupportAgent/>
                            </ProductCard>
                            <ProductCard title="AI Meeting Notes" description="Perfectly written by AI">
                                <SiGotomeeting />
                            </ProductCard>
                            <ProductCard title="Enterprise Search" description="Find answers instantly">
                                <FaSearchDollar/>
                            </ProductCard>
                        </div>
                        <div>
                            <ProductCard title="Knowledge Base" description="Centralize your knowledge">
                                <GiGiftOfKnowledge/>
                            </ProductCard>
                            <ProductCard title="Docs" description="Simple and powerful">
                                <SiGoogledocs/>
                            </ProductCard>
                            <ProductCard title="Product" description="Manage any project">
                                <AiOutlineProduct/>
                            </ProductCard>
                        </div>
                        <div>
                            <ProductCard title="Integrations" description="Connect your apps">
                                <MdIntegrationInstructions/>
                            </ProductCard>
                            <ProductCard title="Security" description="Safe and scalable">
                                <MdSecurity/>
                            </ProductCard>
                        </div>
                    </div>
                    <hr className="h-px my-2 bg-neutral-quaternary border-0"/>
                    {/* last session */}
                    <div className="flex *:flex *:items-center w-full justify-between mb-5">
                        <div className="">
                            <div className="px-2"><BsBoxSeam/></div>
                            <div>Claude Opus 4.6.</div>
                            <div className="flex items-center"><span className="text-blue-500 hover:underline underline-offset-2">&nbsp;See what's new</span><GrFormNextLink/></div>
                        </div>
                        <div>
                            <div className="px-2"><GoDesktopDownload/></div>
                            <div>Download the</div>
                            <div className="flex items-center"><span className="text-blue-500 hover:underline underline-offset-2">&nbsp;Notion App</span><GrFormNextLink/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;