import React from "react";
import Authors from "../../api/Authors";
import BaseZPage from "./BaseZPage";
import Modules from "../../api/Modules";

const MulPage: React.FC = () => (
    <BaseZPage
        apiMethod={"MUL_ZZ_Z"}
        modules={[Modules.MUL_ZZ_Z, Modules.POZ_Z_D, Modules.ABS_Z_N, Modules.MUL_NN_N, Modules.MUL_ZM_Z]}
    />
);

export default MulPage;