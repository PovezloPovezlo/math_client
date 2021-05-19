import React from "react";
import BasePPage from "./BasePPage";
import Modules from "../../api/Modules";

const SumPage: React.FC = () => (
    <BasePPage
        apiMethod={"ADD_PP_P"}
        modules={[Modules.ADD_PP_P, Modules.ADD_QQ_Q]}
    />
);

export default SumPage;