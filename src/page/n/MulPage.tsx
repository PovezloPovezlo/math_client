import React from "react";
import Authors from "../../api/Authors";
import BaseZPage from "../z/BaseZPage";
import Modules from "../../api/Modules";
import ULongNumber from "../../base/ULongNumber";


const MulPage: React.FC = () => (
    <BaseZPage
        apiMethod={"MUL_NN_N"}
        validator={ULongNumber.validate}
        modules={[Modules.MUL_NN_N, Modules.MUL_ND_N, Modules.MUL_Nk_N, Modules.ADD_NN_N]}
    />
);

export default MulPage;