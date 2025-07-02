import React from 'react';
import EditBar from "../../components/editBar/EditBar.jsx";
import HeaderSection from "../../components/headerSection/HeaderSection.jsx";

const ProductManagement = () => {
    return (
        <div>
            <HeaderSection props={"Управление товарами:"}/>
            <EditBar/>
        </div>
    );
};

export default ProductManagement;