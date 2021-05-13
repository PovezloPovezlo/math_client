import React from "react";
import BaseZPage from "./BaseZPage";
import Modules from "../../api/Modules";

const SumPage: React.FC = () => (
    <BaseZPage
        apiMethod={"ADD_ZZ_Z"}
        modules={[Modules.ADD_ZZ_Z, Modules.POZ_Z_D, Modules.ABS_Z_N, Modules.COM_NN_D, Modules.ADD_NN_N, Modules.SUB_NN_N, Modules.MUL_ZM_Z]}
    />
);

export default SumPage;