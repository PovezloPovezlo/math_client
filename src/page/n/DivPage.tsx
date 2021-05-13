import React from "react";
import Authors from "../../api/Authors";
import BaseZPage from "../z/BaseZPage";
import Modules from "../../api/Modules";

const DivPage: React.FC = () => (
    <BaseZPage
        apiMethod={"DIV_NN_N"}
        modules={[Modules.DIV_NN_N, Modules.DIV_NN_Dk, Modules.SUB_NDN_N]}
    />
);

export default DivPage;