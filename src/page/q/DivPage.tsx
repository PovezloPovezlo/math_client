import React from "react";
import Modules from "../../api/Modules";
import BaseQPage from "./BaseQPage";

const DivPage: React.FC = () => (
    <BaseQPage
        apiMethod={"DIV_QQ_Q"}
        modules={[Modules.DIV_QQ_Q, Modules.MUL_ZZ_Z]}
    />
);

export default DivPage;