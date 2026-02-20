import React from "react";
import ListColMenu from "./ListColMenu";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { GiBrain } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { SiGotomeeting } from "react-icons/si";
import { FaSearchDollar } from "react-icons/fa";



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



export default EveryAIMenu;