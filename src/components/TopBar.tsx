import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ume_logo from "../assets/image/logo_ume.png"
import ume_welcome from "../assets/image/ume-welcome.png"
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
import { LuMenu } from "react-icons/lu";
import { FiX } from "react-icons/fi";
import ProductCard from "./TopBar/ProductCard";
import ListColMenu from "./TopBar/ListColMenu";
import CardRowMenu from "./TopBar/CardRowMenu";

interface Prop {
    setIsShowBody: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopBar: React.FC<Prop> = ({ setIsShowBody }) => {
    const [isOpenProductMenu, setIsOpenProductMenu] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const productMenuRef = useRef<HTMLDivElement>(null);
    const aiMenuRef = useRef<HTMLDivElement>(null);
    const solutionsMenuRef = useRef<HTMLDivElement>(null);
    const resourcesMenuRef = useRef<HTMLDivElement>(null);

    const [isOpenSmallDeviceMenu, setIsOpenSmallDeviceMenu] = useState<boolean>(false);


    const [isOpenAIMenu, setIsOpenAIMenu] = useState<boolean>(false);
    const [isOpenSolutionsMenu, setIsOpenSolutionsMenu] = useState<boolean>(false);
    const [isOpenResourcesMenu, setIsOpenResourcesMenu] = useState<boolean>(false);

    useEffect(() => {
        const handleEnterOutside = (event: MouseEvent) => {
            if (
                productMenuRef.current && !productMenuRef.current.contains(event.target as Node) &&
                aiMenuRef.current && !aiMenuRef.current.contains(event.target as Node) &&
                solutionsMenuRef.current && !solutionsMenuRef.current.contains(event.target as Node) &&
                resourcesMenuRef.current && !resourcesMenuRef.current.contains(event.target as Node) &&
                menuRef.current && !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpenProductMenu(false);
                setIsOpenAIMenu(false);
                setIsOpenSolutionsMenu(false);
                setIsOpenResourcesMenu(false);
            }
        }

        document.addEventListener('mouseover', handleEnterOutside);
        return () => document.removeEventListener('mouseover', handleEnterOutside);

    }, [isOpenProductMenu, isOpenAIMenu, isOpenSolutionsMenu, isOpenResourcesMenu])

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 1280px)')
        const handler = (e: MediaQueryListEvent) => {
            if (e.matches) {
                setIsOpenSmallDeviceMenu(false)
                setIsShowBody(true)
                // console.log("min-width: 1280px")
            }
        }
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [setIsShowBody])


    function handleMouseOverProductMenu() {
        setIsOpenProductMenu(true);
        setIsOpenAIMenu(false);
        setIsOpenSolutionsMenu(false);
        setIsOpenResourcesMenu(false);
    }

    function handleMouseOverAIMenu() {
        setIsOpenProductMenu(false);
        setIsOpenAIMenu(true);
        setIsOpenSolutionsMenu(false);
        setIsOpenResourcesMenu(false);
    }

    function handleMouseOverSolutionsMenu() {
        setIsOpenProductMenu(false);
        setIsOpenAIMenu(false);
        setIsOpenSolutionsMenu(true);
        setIsOpenResourcesMenu(false);
    }

    function handleMouseOverResourcesMenu() {
        setIsOpenProductMenu(false);
        setIsOpenAIMenu(false);
        setIsOpenSolutionsMenu(false);
        setIsOpenResourcesMenu(true);
    }

    function handleMouseOverEnterpriseMenu() {
        setIsOpenProductMenu(false);
        setIsOpenAIMenu(false);
        setIsOpenSolutionsMenu(false);
        setIsOpenResourcesMenu(false);
    }

    function handleMouseOverPricingMenu() {
        setIsOpenProductMenu(false);
        setIsOpenAIMenu(false);
        setIsOpenSolutionsMenu(false);
        setIsOpenResourcesMenu(false);
    }

    function handleMouseOverRequestADemoMenu() {
        setIsOpenProductMenu(false);
        setIsOpenAIMenu(false);
        setIsOpenSolutionsMenu(false);
        setIsOpenResourcesMenu(false);
    }

    const [isOpenProductSmallDeviceMenu, setIsOpenProductSmallDeviceMenu] = useState<boolean>(false);
    const [isOpenAISmallDeviceMenu, setIsOpenAISmallDeviceMenu] = useState<boolean>(false);
    const [isOpenSolutionsSmallDeviceMenu, setIsOpenSolutionsSmallDeviceMenu] = useState<boolean>(false);
    const [isOpenResourcesSmallDeviceMenu, setIsOpenResourcesSmallDeviceMenu] = useState<boolean>(false);




    function handleOnClickProductSmallDeviceMenu() {
        setIsOpenProductSmallDeviceMenu(prev => !prev)
        setIsOpenAISmallDeviceMenu(false)
        setIsOpenSolutionsSmallDeviceMenu(false)
        setIsOpenResourcesSmallDeviceMenu(false)
    }

    function handleOnClickAISmallDeviceMenu() {
        setIsOpenProductSmallDeviceMenu(false)
        setIsOpenAISmallDeviceMenu(prev => !prev)
        setIsOpenSolutionsSmallDeviceMenu(false)
        setIsOpenResourcesSmallDeviceMenu(false)
    }

    function handleOnClickSolutionsSmallDeviceMenu() {
        setIsOpenProductSmallDeviceMenu(false)
        setIsOpenAISmallDeviceMenu(false)
        setIsOpenSolutionsSmallDeviceMenu(prev => !prev)
        setIsOpenResourcesSmallDeviceMenu(false)
    }

    function handleOnClickResourcesSmallDeviceMenu() {
        setIsOpenProductSmallDeviceMenu(false)
        setIsOpenAISmallDeviceMenu(false)
        setIsOpenSolutionsSmallDeviceMenu(false)
        setIsOpenResourcesSmallDeviceMenu(prev => !prev)
    }


    return (
        <>
            <div className="sticky bg-white top-0">
                <div className={(!isOpenSmallDeviceMenu && "border-b-gray-300 border-b") + " h-16.5 flex justify-between items-center px-5"}>
                    <div>
                        <img className="size-8" src={ume_logo} />
                    </div>
                    {/* menu center */}
                    <div ref={menuRef} className="hidden xl:flex h-full text-sm items-center gap-1 *:hover:bg-gray-300 *:px-2 *:py-1 *:hover:rounded-sm">
                        <div onMouseEnter={handleMouseOverProductMenu} className={"flex items-center " + (isOpenProductMenu && "bg-gray-300 rounded-sm")}><p>Product</p>
                            {!isOpenProductMenu ? <IoIosArrowDown className="m-1.5" /> : <IoIosArrowUp className="m-1.5" />}
                        </div>
                        <div onMouseOver={handleMouseOverAIMenu} className={"flex items-center " + (isOpenAIMenu && "bg-gray-300 rounded-sm")}><p>AI</p>
                            {!isOpenAIMenu ? <IoIosArrowDown className="m-1.5" /> : <IoIosArrowUp className="m-1.5" />}
                        </div>
                        <div onMouseOver={handleMouseOverSolutionsMenu} className={"flex items-center " + (isOpenSolutionsMenu && "bg-gray-300 rounded-sm")}><p>Solutions</p>
                            {!isOpenSolutionsMenu ? <IoIosArrowDown className="m-1.5" /> : <IoIosArrowUp className="m-1.5" />}
                        </div>
                        <div onMouseOver={handleMouseOverResourcesMenu} className={"flex items-center " + (isOpenResourcesMenu && "bg-gray-300 rounded-sm")}><p>Resources</p>
                            {!isOpenResourcesMenu ? <IoIosArrowDown className="m-1.5" /> : <IoIosArrowUp className="m-1.5" />}
                        </div>
                        <div onMouseOver={handleMouseOverEnterpriseMenu}><p>Enterprise</p></div>
                        <div onMouseOver={handleMouseOverPricingMenu}><p>Pricing</p></div>
                        <div onMouseOver={handleMouseOverRequestADemoMenu}><p>Request a demo</p></div>
                    </div>
                    <div className="flex gap-4 -ml-35">
                        <button className="hidden md:block hover:bg-gray-300 py-1 px-2 rounded-md">Log in</button>
                        <button className="bg-blue-500 hover:bg-blue-400 text-white py-1.5 px-3 rounded-md">Join Notion</button>
                        <button onClick={() => {
                            setIsOpenSmallDeviceMenu(prev => {
                                const next = !prev
                                setIsShowBody(!next)
                                return next
                            })
                        }} className="xl:hidden">
                            {isOpenSmallDeviceMenu ? <FiX className="size-8" /> : <LuMenu className="size-8" />}
                        </button>
                    </div>
                </div>
                {/* product menu */}
                <div ref={productMenuRef} className={(isOpenProductMenu ? "block" : "hidden") + " w-2xl fixed right-0 pt-3 left-0 mx-auto"}>
                    <div className={"justify-center bg-white items-center flex flex-col px-3 border w-2xl mx-auto rounded-2xl"}>
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
                                    <FaRegCalendarAlt />
                                    <p className="group-hover:underline underline-offset-2">Notion Calendar</p>
                                </div>
                                <div className="group">
                                    <FaMailchimp />
                                    <p className="group-hover:underline underline-offset-2">Notion Mail</p>
                                </div>
                            </div>
                        </div>
                        {/* show product */}
                        <div className="flex w-full justify-between">
                            <EveryProductMune />
                        </div>
                        <hr className="h-px my-2 bg-neutral-quaternary border-0" />
                        {/* last session */}
                        <div className="flex *:flex *:items-center w-full justify-between mb-5">
                            <div className="">
                                <div className="px-2"><BsBoxSeam /></div>
                                <div>Claude Opus 4.6.</div>
                                <div className="flex items-center"><span className="text-blue-500 hover:underline underline-offset-2">&nbsp;See what's new</span><GrFormNextLink /></div>
                            </div>
                            <div>
                                <div className="px-2"><GoDesktopDownload /></div>
                                <div>Download the</div>
                                <div className="flex items-center"><span className="text-blue-500 hover:underline underline-offset-2">&nbsp;Notion App</span><GrFormNextLink /></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* AI menu */}
                <div ref={aiMenuRef} className={(isOpenAIMenu ? "block" : "hidden") + " w-2xl fixed right-0 pt-3 left-0 mx-auto"}>
                    <div className="bg-white justify-between flex p-3 border w-2xl *:w-55 mx-auto rounded-2xl">
                        <div className="self-center">
                            <img className="size-50" src={ume_welcome} alt="" />
                        </div>
                        <EveryAIMenu />
                    </div>
                </div>
                {/* Solutions menu */}
                <div ref={solutionsMenuRef} className={(isOpenSolutionsMenu ? "block" : "hidden") + " w-2xl fixed right-0 pt-3 left-0 mx-auto"}>
                    <CardRowMenu>
                        <EverySolutionsMenu />
                    </CardRowMenu>
                </div>
                {/* Resources menu */}
                <div ref={resourcesMenuRef} className={(isOpenResourcesMenu ? "block" : "hidden") + " w-2xl fixed right-0 pt-3 left-0 mx-auto"}>
                    <CardRowMenu>
                        <EveryResourcesMenu />
                    </CardRowMenu>
                </div>
            </div>
            {/* small device menu */}
            <div className={(isOpenSmallDeviceMenu ? "block" : "hidden") + " w-full h-full bg-white pl-6.5 [&>button]:my-2.5"}>
                <button onClick={handleOnClickProductSmallDeviceMenu} className={"flex items-center text-2xl"}><p>Product</p>
                    {!isOpenProductSmallDeviceMenu ? <IoIosArrowDown className="m-1.5" /> : <IoIosArrowUp className="m-1.5" />}
                </button>
                {
                    isOpenProductSmallDeviceMenu && (
                        <div className="py-2">
                            <EveryProductMune />
                        </div>
                    )
                }
                <button onClick={handleOnClickAISmallDeviceMenu} className={"flex items-center text-2xl"}><p>AI</p>
                    {!isOpenAISmallDeviceMenu ? <IoIosArrowDown className="m-1.5" /> : <IoIosArrowUp className="m-1.5" />}
                </button>
                {
                    isOpenAISmallDeviceMenu && (
                        <div className="py-2">
                            <EveryAIMenu />
                        </div>
                    )
                }
                <button onClick={handleOnClickSolutionsSmallDeviceMenu} className={"flex items-center text-2xl"}><p>Solutions</p>
                    {!isOpenSolutionsSmallDeviceMenu ? <IoIosArrowDown className="m-1.5" /> : <IoIosArrowUp className="m-1.5" />}
                </button>
                {
                    isOpenSolutionsSmallDeviceMenu && (
                        <div className="py-2">
                            <EverySolutionsMenu />
                        </div>
                    )
                }
                <button onClick={handleOnClickResourcesSmallDeviceMenu} className={"flex items-center text-2xl"}><p>Resources</p>
                    {!isOpenResourcesSmallDeviceMenu ? <IoIosArrowDown className="m-1.5" /> : <IoIosArrowUp className="m-1.5" />}
                </button>
                {
                    isOpenResourcesSmallDeviceMenu && (
                        <div className="py-2">
                            <EveryResourcesMenu />
                        </div>
                    )
                }
                <Link to="/"><p className="text-2xl py-2.5">Enterprise</p></Link>
                <Link to="/"><p className="text-2xl py-2.5">Pricing</p></Link>
                <div className="fixed bottom-0 ">
                    Hello
                </div>
            </div>
        </>


    )
}


export default TopBar;

const EveryProductMune: React.FC = () => {
    return (
        <>
            <div>
                <ProductCard title="Notion AI" description="AI tools for work">
                    <GiBrain />
                </ProductCard>
                <ProductCard title="Agents" description="Automate busywork">
                    <MdOutlineSupportAgent />
                </ProductCard>
                <ProductCard title="AI Meeting Notes" description="Perfectly written by AI">
                    <SiGotomeeting />
                </ProductCard>
                <ProductCard title="Enterprise Search" description="Find answers instantly">
                    <FaSearchDollar />
                </ProductCard>
            </div>
            <div>
                <ProductCard title="Knowledge Base" description="Centralize your knowledge">
                    <GiGiftOfKnowledge />
                </ProductCard>
                <ProductCard title="Docs" description="Simple and powerful">
                    <SiGoogledocs />
                </ProductCard>
                <ProductCard title="Product" description="Manage any project">
                    <AiOutlineProduct />
                </ProductCard>
            </div>
            <div>
                <ProductCard title="Integrations" description="Connect your apps">
                    <MdIntegrationInstructions />
                </ProductCard>
                <ProductCard title="Security" description="Safe and scalable">
                    <MdSecurity />
                </ProductCard>
            </div>
        </>
    )
}

const EveryAIMenu: React.FC = () => {
    return (
        <>
            <div>
                <ListColMenu title="AI features" type_of_col="feature">
                    <ProductCard title="Notion AI" description="AI tools for work">
                        <GiBrain />
                    </ProductCard>
                    <ProductCard title="Agents" description="Automate busywork">
                        <MdOutlineSupportAgent />
                    </ProductCard>
                    <ProductCard title="AI Meeting Notes" description="Perfectly written by AI">
                        <SiGotomeeting />
                    </ProductCard>
                    <ProductCard title="Enterprise Search" description="Find answers instantly">
                        <FaSearchDollar />
                    </ProductCard>
                </ListColMenu>

            </div>
            <div className="">
                <ListColMenu title="Explore use cases" type_of_col="sample">
                    <Link to="/">
                        <p>For work</p>
                    </Link>
                    <Link to="/">
                        <p>For life</p>
                    </Link>
                </ListColMenu>
            </div>
        </>
    )
}

const EverySolutionsMenu: React.FC = () => {
    return (
        <>
            <ListColMenu title="Teams" type_of_col="header">
                <Link to="/"><p>Eng & Product</p></Link>
                <Link to="/"><p>Design</p></Link>
                <Link to="/"><p>Marketing</p></Link>
                <Link to="/"><p>IT</p></Link>
            </ListColMenu>
            <ListColMenu title="Company size" type_of_col="sample">
                <Link to="/"><p>Startups</p></Link>
                <Link to="/"><p>Small businesses</p></Link>
                <Link to="/"><p>Enterprise</p></Link>
            </ListColMenu>
            <ListColMenu title="Resources" type_of_col="sample">
                <Link to="/"><p>Education</p></Link>
                <Link to="/"><p>Personal</p></Link>
                <Link to="/"><p>Professional</p></Link>
                <Link to="/"><p>AI use cases</p></Link>
            </ListColMenu>
        </>
    )
}

const EveryResourcesMenu: React.FC = () => {
    return (
        <>
            <ListColMenu title="Browse" type_of_col="header">
                <Link to="/"><p>Templates</p></Link>
                <Link to="/"><p>Consultants</p></Link>
                <Link to="/"><p>Integrations</p></Link>
            </ListColMenu>
            <ListColMenu title="Discover" type_of_col="sample">
                <Link to="/"><p>What's New</p></Link>
                <Link to="/"><p>Customer stories</p></Link>
                <Link to="/"><p>Blog</p></Link>
                <Link to="/"><p>Webinars</p></Link>
            </ListColMenu>
            <ListColMenu title="Learn" type_of_col="sample">
                <Link to="/"><p>Academy</p></Link>
                <Link to="/"><p>Product tours</p></Link>
                <Link to="/"><p>Product tours</p></Link>
            </ListColMenu>
        </>
    )
}