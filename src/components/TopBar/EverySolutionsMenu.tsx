import React from "react";
import ListColMenu from "./ListColMenu";
import { Link } from "react-router-dom";

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

export default EverySolutionsMenu;