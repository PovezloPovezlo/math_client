import React from "react";
import BaseZPage from "../z/BaseZPage";
import Modules from "../../api/Modules";
import ULongNumber from "../../base/ULongNumber";

const ModPage: React.FC = () => (
    <BaseZPage
        apiMethod={"MOD_NN_N"}
        validator={ULongNumber.validate}
        modules={[Modules.MOD_NN_N, Modules.DIV_NN_N, Modules.SUB_NDN_N]}
    />
);

export default ModPage;