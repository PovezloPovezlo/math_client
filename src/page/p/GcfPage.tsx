import React from "react";
import BasePPage from "./BasePPage";
import Modules from "../../api/Modules";

const GcfPage: React.FC = () => (
    <BasePPage
        apiMethod={"GCF_PP_P"}
        modules={[Modules.GCF_PP_P, Modules.DEG_P_N, Modules.MOD_PP_P]}
    />
);

export default GcfPage;