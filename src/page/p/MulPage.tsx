import React from "react";
import BasePPage from "./BasePPage";
import Modules from "../../api/Modules";

const MulPage: React.FC = () => (
    <BasePPage
        apiMethod={"MUL_PP_P"}
        modules={[Modules.MUL_PP_P, Modules.MUL_PQ_P, Modules.MUL_Pxk_P, Modules.ADD_PP_P]}
    />
);

export default MulPage;