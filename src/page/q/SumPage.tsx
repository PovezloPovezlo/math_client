import React from "react";
import Modules from "../../api/Modules";
import BaseQPage from "./BaseQPage";

const SumPage: React.FC = () => (
    <BaseQPage
        apiMethod={"ADD_QQ_Q"}
        modules={[Modules.ADD_QQ_Q, Modules.LCM_NN_N, Modules.MUL_ZZ_Z, Modules.ADD_ZZ_Z]}
    />
);

export default SumPage;