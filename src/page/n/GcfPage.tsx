import React from "react";
import BaseZPage from "../z/BaseZPage";
import Modules from "../../api/Modules";
import ULongNumber from "../../base/ULongNumber";

const GcfPage: React.FC = () => (
    <BaseZPage
        apiMethod={"GCF_NN_N"}
        validator={ULongNumber.validate}
        modules={[Modules.GCF_NN_N, Modules.MOD_NN_N, Modules.COM_NN_D, Modules.NZER_N_B]}
    />
);

export default GcfPage;