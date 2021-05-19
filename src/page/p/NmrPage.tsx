import React from "react";
import Modules from "../../api/Modules";
import BasePPageOneInput from "./BasePPageOneInput";

const NmrPage: React.FC = () => (
    <BasePPageOneInput
        apiMethod={"NMR_P_P"}
        modules={[Modules.NMR_P_P, Modules.GCF_PP_P, Modules.DER_P_P, Modules.DIV_PP_P]}
    />
);

export default NmrPage;