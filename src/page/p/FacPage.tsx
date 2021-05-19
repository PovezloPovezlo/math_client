import React from "react";
import Modules from "../../api/Modules";
import BasePPageOneInput from "./BasePPageOneInput";

const FacPage: React.FC = () => (
    <BasePPageOneInput
        apiMethod={"FAC_P_Q"}
        modules={[Modules.FAC_P_Q, Modules.ABS_Z_N, Modules.TRANS_Z_N, Modules.LCM_NN_N, Modules.GCF_NN_N, Modules.TRANS_N_Z, Modules.DIV_ZZ_Z]}
    />
);

export default FacPage;