import React from "react";
import Authors from "../../api/Authors";
import BaseZPage from "./BaseZPage";
import Modules from "../../api/Modules";

const DivPage: React.FC = () => (
    <BaseZPage
        apiMethod={"DIV_ZZ_Z"}
        modules={[Modules.DIV_ZZ_Z, Modules.ABS_Z_N, Modules.POZ_Z_D, Modules.DIV_NN_N, Modules.ADD_1N_N]}
    />
);

export default DivPage;