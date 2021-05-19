import React from "react";
import BasePPage from "./BasePPage";
import Modules from "../../api/Modules";

const SubPage: React.FC = () => (
    <BasePPage
        apiMethod={"SUB_PP_P"}
        modules={[Modules.SUB_PP_P, Modules.SUB_QQ_Q]}
    />
);

export default SubPage;