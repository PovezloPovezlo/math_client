import React from "react";
import BasePPage from "./BasePPage";
import Modules from "../../api/Modules";

const DivPage: React.FC = () => (
    <BasePPage
        apiMethod={"DIV_PP_P"}
        modules={[Modules.DIV_PP_P, Modules.DIV_QQ_Q, Modules.DEG_P_N, Modules.MUL_Pxk_P, Modules.SUB_PP_P, Modules.ADD_PP_P]}
    />
);

export default DivPage;