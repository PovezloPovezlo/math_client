import React from "react";
import BaseZPage from "./BaseZPage";
import Modules from "../../api/Modules";

const SubPage: React.FC = () => (
    <BaseZPage
        apiMethod={"SUB_ZZ_Z"}
        modules={[Modules.SUB_ZZ_Z, Modules.POZ_Z_D, Modules.ABS_Z_N, Modules.COM_NN_D, Modules.ADD_NN_N, Modules.SUB_NN_N, Modules.MUL_ZM_Z]}
    />
);

export default SubPage;