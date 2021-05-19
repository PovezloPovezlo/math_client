import React from "react";
import BasePPage from "./BasePPage";
import Modules from "../../api/Modules";

const ModPage: React.FC = () => (
    <BasePPage
        apiMethod={"MOD_PP_P"}
        modules={[Modules.MOD_PP_P, Modules.DIV_PP_P, Modules.MUL_PP_P, Modules.SUB_PP_P]}
    />
);

export default ModPage;