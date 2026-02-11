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
            <div className={" " + className}>
                <div>
                    {children}
                </div>
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;