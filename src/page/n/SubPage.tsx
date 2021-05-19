import React from "react";
import Authors from "../../api/Authors";
import BaseZPage from "../z/BaseZPage";
import Modules from "../../api/Modules";
import ULongNumber from "../../base/ULongNumber";

const SubPage: React.FC = () => (
    <BaseZPage
        apiMethod={"SUB_NN_N"}
        validator={ULongNumber.validate}
        modules={[Modules.SUB_NN_N, Modules.COM_NN_D]}
    />
);

export default SubPage;