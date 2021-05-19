import React from "react";
import BaseZPage from "../z/BaseZPage";
import Modules from "../../api/Modules";
import ULongNumber from "../../base/ULongNumber";

const LcmPage: React.FC = () => (
    <BaseZPage
        apiMethod={"LCM_NN_N"}
        validator={ULongNumber.validate}
        modules={[Modules.LCM_NN_N, Modules.GCF_NN_N, Modules.MUL_NN_N]}
    />
);

export default LcmPage;