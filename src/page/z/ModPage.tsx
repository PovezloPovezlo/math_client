import React from "react";
import BaseZPage from "./BaseZPage";
import Modules from "../../api/Modules";

const ModPage: React.FC = () => (
    <BaseZPage
        apiMethod={"MOD_ZZ_Z"}
        modules={[Modules.MOD_ZZ_Z, Modules.DIV_ZZ_Z, Modules.MUL_ZZ_Z, Modules.SUB_ZZ_Z]}
    />
);

export default ModPage;