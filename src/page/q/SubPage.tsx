import React from "react";
import Modules from "../../api/Modules";
import BaseQPage from "./BaseQPage";

const SubPage: React.FC = () => (
    <BaseQPage
        apiMethod={"SUB_QQ_Q"}
        modules={[Modules.SUB_QQ_Q, Modules.LCM_NN_N, Modules.MUL_ZZ_Z, Modules.ADD_ZZ_Z]}
    />
);

export default SubPage;