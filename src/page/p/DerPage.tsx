import React from "react";
import Modules from "../../api/Modules";
import BasePPageOneInput from "./BasePPageOneInput";

const DerPage: React.FC = () => (
    <BasePPageOneInput
        apiMethod={"DER_P_P"}
        modules={[Modules.DER_P_P]}
    />
);

export default DerPage;