import React from "react";
import Modules from "../../api/Modules";
import BaseQPage from "./BaseQPage";

const MulPage: React.FC = () => (
    <BaseQPage
        apiMethod={"MUL_QQ_Q"}
        modules={[Modules.MUL_QQ_Q, Modules.MUL_ZZ_Z]}
    />
);

export default MulPage;