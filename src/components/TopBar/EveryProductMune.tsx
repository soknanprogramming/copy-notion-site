import React from "react";
import ProductCard from "./ProductCard"
import { GiBrain } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { SiGotomeeting } from "react-icons/si";
import { FaSearchDollar } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { MdIntegrationInstructions } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";
import { MdSecurity } from "react-icons/md";

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

export default EveryProductMune;