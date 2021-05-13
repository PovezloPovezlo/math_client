import React from "react";
import BaseZPage from "../z/BaseZPage";
import Modules from "../../api/Modules";

const SumPage: React.FC = () => (
    <BaseZPage
        apiMethod={"ADD_NN_N"}
        modules={[Modules.ADD_NN_N, Modules.COM_NN_D]}
    />
);

export default SumPage;