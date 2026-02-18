import React from "react";
import { Link } from "react-router-dom";

type Props = {
    children: React.ReactNode;
    className?: string;
    title: string;
    description: string;
    url?: string;
}

const ProductCard: React.FC<Props> = ({ 
    title,
    description,
    url = "/",
    children, 
    className = "", 
}) => {
    return (
        <Link to={url}>
            <div className={"hover:bg-gray-200 my-1.5 xl:w-50 w-full h-12 flex items-center gap-3 p-2 rounded-2xl" + " " + className}>
                <div>
                    {children}
                </div>
                <div className="-my-5">
                    <h1 className="text-sm">{title}</h1>
                    <p className="text-xs text-gray-500">{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;